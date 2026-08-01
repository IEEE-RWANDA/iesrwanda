import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/kip/Documents/IES/outputs/expense_report/IEEE_IES_Rwanda_Expense_Report_Kipngeno.xlsx";
const outputPath = "/Users/kip/Documents/IES/outputs/expense_report/IEEE_IES_Rwanda_Expense_Report_KOECH_BRIAN.xlsx";
const previewPath = "/Users/kip/Documents/IES/outputs/expense_report/expense-report-preview-updated.png";

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
const sheet = workbook.worksheets.getItem("Sheet1");

sheet.getRange("B6").values = [["KOECH BRIAN"]];
sheet.getRange("B32").values = [["Kipngeno Koech"]];

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
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);
console.log(`OUTPUT ${outputPath}`);
