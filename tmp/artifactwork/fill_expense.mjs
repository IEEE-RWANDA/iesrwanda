import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/kip/Downloads/MGA Geo Unit - Expense Report Form.xlsx";
const outputDir = "/Users/kip/Documents/IES/outputs/expense_report";
const outputPath = `${outputDir}/IEEE_IES_Rwanda_Expense_Report_Kipngeno.xlsx`;

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
const sheet = workbook.worksheets.getItem("Sheet1");

sheet.getRange("A1").values = [["IEEE IES Rwanda"]];
sheet.getRange("B6").values = [["Kipngeno"]];
sheet.getRange("D6").values = [[new Date("2026-07-28T00:00:00")]];
sheet.getRange("D6").format.numberFormat = "dd-mmm-yyyy";

sheet.getRange("A11:E11").values = [[
  new Date("2026-07-27T00:00:00"),
  "Multimedia Services - David Shema (Invoice/Receipt No. 5)",
  "Y",
  531000,
  360,
]];
sheet.getRange("A11").format.numberFormat = "dd-mmm-yyyy";
sheet.getRange("D11").format.numberFormat = "#,##0.00";
sheet.getRange("E11").format.numberFormat = '"$"#,##0.00';
sheet.getRange("D29").formulas = [["=SUM(D11:D28)"]];
sheet.getRange("E29").formulas = [["=SUM(E11:E28)"]];
sheet.getRange("D29").format.numberFormat = "#,##0.00";
sheet.getRange("E29").format.numberFormat = '"$"#,##0.00';
sheet.getRange("B32").values = [["Kipngeno"]];

await fs.mkdir(outputDir, { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

const check = await workbook.inspect({
  kind: "table",
  range: "Sheet1!A1:E32",
  include: "values,formulas",
  tableMaxRows: 32,
  tableMaxCols: 5,
  maxChars: 16000,
});
console.log(check.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const preview = await workbook.render({
  sheetName: "Sheet1",
  autoCrop: "all",
  scale: 1.5,
  format: "png",
});
await fs.writeFile(`${outputDir}/expense-report-preview.png`, new Uint8Array(await preview.arrayBuffer()));
console.log(`OUTPUT ${outputPath}`);
