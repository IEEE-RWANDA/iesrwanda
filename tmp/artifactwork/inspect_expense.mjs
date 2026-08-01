import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/kip/Downloads/MGA Geo Unit - Expense Report Form.xlsx";
const workDir = "/Users/kip/Documents/IES";
const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
const summary = await workbook.inspect({
  kind: "workbook,sheet,table,definedName",
  maxChars: 12000,
  tableMaxRows: 40,
  tableMaxCols: 20,
  tableMaxCellChars: 120,
});
console.log(summary.ndjson);
for (const sheet of workbook.worksheets.items) {
  const used = sheet.getUsedRange();
  console.log(`SHEET ${sheet.name} USED ${used?.address ?? "none"}`);
  if (used) {
    const region = await workbook.inspect({
      kind: "region",
      sheetId: sheet.name,
      range: used.address,
      include: "values,formulas",
      maxChars: 18000,
    });
    console.log(region.ndjson);
    const preview = await workbook.render({
      sheetName: sheet.name,
      autoCrop: "all",
      scale: 1.5,
      format: "png",
    });
    await fs.writeFile(`${workDir}/tmp/${sheet.name.replaceAll(/[^A-Za-z0-9_-]/g, "_")}-before.png`, new Uint8Array(await preview.arrayBuffer()));
  }
}
