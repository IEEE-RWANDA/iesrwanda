import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/kip/Documents/IES/outputs/expense_report/IEEE_IES_Rwanda_Expense_Report_KOECH_BRIAN.xlsx";
const outputPath = "/Users/kip/Documents/IES/tmp/pdfs/expense-conversion/form.png";

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
const preview = await workbook.render({
  sheetName: "Sheet1",
  range: "A1:E33",
  scale: 2.5,
  format: "png",
});
await fs.writeFile(outputPath, new Uint8Array(await preview.arrayBuffer()));
console.log(outputPath);
