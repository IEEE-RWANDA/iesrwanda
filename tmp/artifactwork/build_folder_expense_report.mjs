import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/kip/Downloads/MGA Geo Unit - Expense Report Form.xlsx";
const outputDir = "/Users/kip/Documents/IES/outputs/folder_expense_report";
const outputPath = `${outputDir}/IEEE_IES_Rwanda_Combined_Expense_Report_RWF_USD.xlsx`;

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
const report = workbook.worksheets.getItem("Sheet1");

report.getRange("A1").values = [["IEEE IES Rwanda"]];
report.getRange("B6").values = [["KOECH BRIAN"]];
report.getRange("D6").values = [[new Date("2026-07-28T00:00:00")]];
report.getRange("D6").format.numberFormat = "dd-mmm-yyyy";

report.getRange("A11:D14").values = [
  [new Date("2026-07-20T00:00:00"), "Food and refreshments - Mozy Pizza", "Y", 227500],
  [new Date("2026-07-20T00:00:00"), "T-shirts, IES pull-up banner and flyers - Mg Modern Design", "Y", 1490000],
  [new Date("2026-07-24T00:00:00"), "Transport services - Hakuzimana Ignace (Receipt No. 255)", "Y", 260000],
  [new Date("2026-07-27T00:00:00"), "Multimedia services - David Shema (Receipt No. 5)", "Y", 531000],
];
report.getRange("A11:A14").format.numberFormat = "dd-mmm-yyyy";
report.getRange("D11:D14").format.numberFormat = "#,##0.00";
report.getRange("E11:E14").formulas = [
  ["=ROUND(D11/'Source Notes'!$B$2,2)"],
  ["=ROUND(D12/'Source Notes'!$B$2,2)"],
  ["=ROUND(D13/'Source Notes'!$B$2,2)"],
  ["=ROUND(D14/'Source Notes'!$B$2,2)"],
];
report.getRange("E11:E14").format.numberFormat = '"$"#,##0.00';
report.getRange("D29").formulas = [["=SUM(D11:D28)"]];
report.getRange("E29").formulas = [["=SUM(E11:E28)"]];
report.getRange("D29").format.numberFormat = "#,##0.00";
report.getRange("E29").format.numberFormat = '"$"#,##0.00';
report.getRange("B32").values = [["Kipngeno Koech"]];

const notes = workbook.worksheets.add("Source Notes");
notes.showGridLines = false;
notes.getRange("A1:F1").merge();
notes.getRange("A1").values = [["Expense Report Sources and Conversion"]];
notes.getRange("A1:F1").format = {
  fill: "#17365D",
  font: { bold: true, color: "#FFFFFF", size: 16 },
  horizontalAlignment: "center",
  verticalAlignment: "center",
};
notes.getRange("A1:F1").format.rowHeight = 30;

notes.getRange("A2").values = [["RWF per USD"]];
notes.getRange("B2").values = [[1475]];
notes.getRange("B2").format.numberFormat = "#,##0";
notes.getRange("C2:F2").merge();
notes.getRange("C2").values = [["Derived from the confirmed RWF 531,000 = USD 360 multimedia payment."]];
notes.getRange("A2:F2").format.fill = "#D9EAF7";
notes.getRange("A2:B2").format.font = { bold: true, color: "#17365D" };

notes.getRange("A4:F8").values = [
  ["Date", "Expense", "Source file", "RWF", "USD", "Source / note"],
  [new Date("2026-07-20T00:00:00"), "Food and refreshments - Mozy Pizza", "food.pdf", 227500, null, "https://drive.google.com/file/d/1TDoUp5BYN2Abq1qdiN3c-WOGipuqKVbV/view - Date partly obscured; 20-Jul-2026 used from the visible stamp/event documents."],
  [new Date("2026-07-20T00:00:00"), "T-shirts, pull-up banner and flyers", "IEEE IES Rwanda Receipt .pdf", 1490000, null, "https://drive.google.com/file/d/1XLNz8imBuirhJYq3oDJh2cdk7ivOgn05/view"],
  [new Date("2026-07-24T00:00:00"), "Transport services - Hakuzimana Ignace", "transport", 260000, null, "https://drive.google.com/file/d/1oc2jllB67gSUuR-j50C17MSatAzfJgo3/view"],
  [new Date("2026-07-27T00:00:00"), "Multimedia services - David Shema", "MULTIMEDIA SERVICES RECEIPT.pdf", 531000, null, "https://drive.google.com/file/d/1XGD6KB0n74amW29x-z0SCtZ_5BkEwhH1/view"],
];
notes.getRange("E5:E8").formulas = [
  ["=ROUND(D5/$B$2,2)"],
  ["=ROUND(D6/$B$2,2)"],
  ["=ROUND(D7/$B$2,2)"],
  ["=ROUND(D8/$B$2,2)"],
];
notes.getRange("A9:C9").merge();
notes.getRange("A9").values = [["TOTAL"]];
notes.getRange("D9").formulas = [["=SUM(D5:D8)"]];
notes.getRange("E9").formulas = [["=SUM(E5:E8)"]];
notes.getRange("F9").values = [["The .numbers file in the folder was treated as an existing report, not a supporting expense."]];

notes.getRange("A4:F4").format = {
  fill: "#2E75B6",
  font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
  wrapText: true,
};
notes.getRange("A5:A8").format.numberFormat = "dd-mmm-yyyy";
notes.getRange("D5:D9").format.numberFormat = '#,##0.00 "RWF"';
notes.getRange("E5:E9").format.numberFormat = '"$"#,##0.00';
notes.getRange("A9:F9").format = {
  fill: "#D9D9D9",
  font: { bold: true, color: "#000000" },
  verticalAlignment: "center",
};
notes.getRange("A4:F9").format.borders = { preset: "all", style: "thin", color: "#B7B7B7" };
notes.getRange("A2:F2").format.borders = { preset: "outside", style: "thin", color: "#9EADBA" };
notes.getRange("A1:F9").format.wrapText = true;
notes.getRange("A:A").format.columnWidth = 15;
notes.getRange("B:B").format.columnWidth = 38;
notes.getRange("C:C").format.columnWidth = 38;
notes.getRange("D:E").format.columnWidth = 16;
notes.getRange("F:F").format.columnWidth = 68;
notes.getRange("A4:F9").format.autofitRows();
notes.freezePanes.freezeRows(4);

await fs.mkdir(outputDir, { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

for (const [sheetName, range, fileName] of [
  ["Sheet1", "A1:E33", "expense-report.png"],
  ["Source Notes", "A1:F9", "source-notes.png"],
]) {
  const preview = await workbook.render({ sheetName, range, scale: 1.5, format: "png" });
  await fs.writeFile(`${outputDir}/${fileName}`, new Uint8Array(await preview.arrayBuffer()));
}

const check = await workbook.inspect({
  kind: "table",
  range: "Sheet1!A1:E32",
  include: "values,formulas",
  tableMaxRows: 32,
  tableMaxCols: 5,
  maxChars: 16000,
});
console.log(check.ndjson);
const notesCheck = await workbook.inspect({
  kind: "table",
  range: "Source Notes!A1:F9",
  include: "values,formulas",
  tableMaxRows: 12,
  tableMaxCols: 6,
  maxChars: 12000,
});
console.log(notesCheck.ndjson);
const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);
console.log(`OUTPUT ${outputPath}`);
