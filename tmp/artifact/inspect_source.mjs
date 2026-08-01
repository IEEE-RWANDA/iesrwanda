import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const input = await FileBlob.load("/Users/kip/Downloads/IEEE_Rwanda_Volkswagen_Tour.xlsx");
const workbook = await SpreadsheetFile.importXlsx(input);
const summary = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 12000,
  tableMaxRows: 100,
  tableMaxCols: 12,
  tableMaxCellChars: 120,
});
console.log(summary.ndjson);
for (const sheet of workbook.worksheets.items) {
  const preview = await workbook.render({ sheetName: sheet.name, autoCrop: "all", scale: 1.5, format: "png" });
  await fs.writeFile(`/Users/kip/Documents/IES/tmp/${sheet.name.replace(/[^A-Za-z0-9_-]+/g, "_")}.png`, new Uint8Array(await preview.arrayBuffer()));
}
