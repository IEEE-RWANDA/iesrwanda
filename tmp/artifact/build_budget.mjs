import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "/Users/kip/Documents/IES/outputs/food_transport_budget";
const outputPath = `${outputDir}/IEEE_IES_Rwanda_Food_Transport_Budget.xlsx`;
const previewPath = `${outputDir}/budget_preview.png`;

const wb = Workbook.create();
const ws = wb.worksheets.add("Visit Budget");
ws.showGridLines = false;
ws.freezePanes.freezeRows(4);

ws.mergeCells("A1:F1");
ws.getRange("A1").values = [["IEEE IES Rwanda - Volkswagen Industrial Visit Budget"]];
ws.mergeCells("A2:F2");
ws.getRange("A2").values = [["Friday, 24 July 2026 | Volkswagen Mobility Solutions Rwanda"]];

ws.getRange("A4:B4").merge();
ws.getRange("A4").values = [["Planning Inputs"]];
ws.getRange("A5:A14").values = [["Approved budget (USD)"],["Printing - separate invoice, payment requested (USD)"],["Exchange rate (RWF per USD)"],["Contingency rate"],["Registered participants"],["Planned attendance"],["Number of buses"],["Milk quantity"],["Soda quantity"],["Photography - separate invoice to be sent (USD)"]];
ws.getRange("B5:B12").values = [[2000],[1100],[1450],[0.10],[72],[80],[2],[6]];
ws.getRange("B13").formulas = [["=B10-B12"]];
ws.getRange("B14").values = [[300]];
ws.getRange("D4:E4").merge();
ws.getRange("D4").values = [["Budget Summary"]];
ws.getRange("D5:D14").values = [["Budget after printing commitment"],["Photography invoice commitment"],["Available for food + transport"],["Planned food + transport"],["Total committed event spend"],["Amount under / (over) budget"],["Required cost reduction"],["Food + transport limit (RWF)"],["Printing invoice reference (RWF)"],["Status"]];
ws.getRange("E5:E13").formulas = [["=B5-B6"],["=B14"],["=E5-E6"],["=F24"],["=B6+E6+E8"],["=B5-E9"],["=MAX(0,-E10)"],["=E7*B7"],["=1490000"]];
ws.getRange("E14").formulas = [["=IF(E10>=0,\"WITHIN BUDGET\",\"OVER BUDGET\")"]];

ws.mergeCells("A15:F15");
ws.getRange("A15").values = [["Food and Transport Estimate"]];
ws.getRange("A16:F16").values = [["Category","Item","Quantity","Unit Cost (RWF)","Total (RWF)","Total (USD)"]];
ws.getRange("A17:D22").values = [
  ["Food","Whole pizza (serves 3)",20,6000],
  ["Drink","Bottled water",null,1000],
  ["Drink","Soda",null,1500],
  ["Drink","Milk",null,1500],
  ["Transport","Bus - return trip",null,200000],
  ["Contingency","10% planning reserve",1,null],
];
ws.getRange("C18:C21").formulas = [["=B10"],["=B13"],["=B12"],["=B11"]];
ws.getRange("D22").formulas = [["=SUM(E17:E21)*B8"]];
ws.getRange("E17:E22").formulas = [["=C17*D17"],["=C18*D18"],["=C19*D19"],["=C20*D20"],["=C21*D21"],["=C22*D22"]];
ws.getRange("F17:F22").formulas = [["=E17/B7"],["=E18/B7"],["=E19/B7"],["=E20/B7"],["=E21/B7"],["=E22/B7"]];
ws.getRange("A24:D24").merge();
ws.getRange("A24").values = [["TOTAL PLANNED VISIT COST"]];
ws.getRange("E24:F24").formulas = [["=SUM(E17:E22)","=SUM(F17:F22)"]];

ws.mergeCells("A27:F27");
ws.getRange("A27").values = [["Attendance Scenarios"]];
ws.getRange("A28:F28").values = [["Attendance","Food + Drinks (RWF)","Transport (RWF)","Contingency (RWF)","Total (USD)","USD Buffer"]];
ws.getRange("A29:A31").values = [[70],[75],[80]];
ws.getRange("B29:B31").formulas = [["=$C$17*$D$17+A29*D18+(A29-B12)*D19+B12*D20"],["=$C$17*$D$17+A30*D18+(A30-B12)*D19+B12*D20"],["=$C$17*$D$17+A31*D18+(A31-B12)*D19+B12*D20"]];
ws.getRange("C29:C31").formulas = [["=B11*D21"],["=B11*D21"],["=B11*D21"]];
ws.getRange("D29:D31").formulas = [["=(B29+C29)*B8"],["=(B30+C30)*B8"],["=(B31+C31)*B8"]];
ws.getRange("E29:E31").formulas = [["=(B29+C29+D29)/B7"],["=(B30+C30+D30)/B7"],["=(B31+C31+D31)/B7"]];
ws.getRange("F29:F31").formulas = [["=E7-E29"],["=E7-E30"],["=E7-E31"]];

ws.mergeCells("A34:F34");
ws.getRange("A34").values = [["Notes"]];
ws.mergeCells("A35:F35");
ws.getRange("A35").values = [["Blue cells are editable planning assumptions. Update the exchange rate and supplier quotes when confirmed."]];
ws.mergeCells("A36:F36");
ws.getRange("A36").values = [["Printing: a separate invoice has been submitted and payment requested; USD 1,100 remains committed in this budget."]];
ws.mergeCells("A37:F37");
ws.getRange("A37").values = [["Photography: a separate USD 300 invoice is to be sent; this amount is reserved, leaving USD 600 for food and transport."]];
ws.mergeCells("A38:F38");
ws.getRange("A38").values = [["Drink plan: 74 sodas and 6 milks for attendees who do not take soda; everyone also receives water."]];
ws.mergeCells("A39:F39");
ws.getRange("A39").values = [["Coverage warning: 20 pizzas at 3 people each feed 60 people, leaving a gap of 20 against the 80-person plan."]];
ws.mergeCells("A40:F40");
ws.getRange("A40").values = [["The supplied printing invoice totals RWF 1,490,000, and the participant list contains 72 names."]];

const navy = "#163A5F";
const teal = "#1F7A8C";
const paleBlue = "#EAF3F8";
const paleGreen = "#E8F4EA";
const paleYellow = "#FFF4CC";
const lightBorder = "#C9D5DF";

ws.getRange("A1:F1").format = { fill: navy, font: { color: "#FFFFFF", bold: true, size: 18 }, horizontalAlignment: "center", verticalAlignment: "center" };
ws.getRange("A1:F1").format.rowHeight = 34;
ws.getRange("A2:F2").format = { fill: "#DDEAF2", font: { color: navy, italic: true, size: 11 }, horizontalAlignment: "center" };
for (const r of ["A4:B4","D4:E4","A15:F15","A27:F27","A34:F34"]) {
  ws.getRange(r).format = { fill: teal, font: { color: "#FFFFFF", bold: true, size: 11 }, verticalAlignment: "center" };
}
ws.getRange("A16:F16").format = { fill: navy, font: { color: "#FFFFFF", bold: true }, horizontalAlignment: "center", wrapText: true, borders: { preset: "all", style: "thin", color: lightBorder } };
ws.getRange("A28:F28").format = { fill: navy, font: { color: "#FFFFFF", bold: true }, horizontalAlignment: "center", wrapText: true, borders: { preset: "all", style: "thin", color: lightBorder } };
ws.getRange("A5:B14").format = { fill: paleBlue, borders: { preset: "inside", style: "thin", color: lightBorder } };
ws.getRange("B5:B12").format.font = { color: "#0000FF" };
ws.getRange("B14").format.font = { color: "#0000FF" };
ws.getRange("D5:E14").format = { fill: paleGreen, borders: { preset: "inside", style: "thin", color: lightBorder } };
ws.getRange("E14").format = { fill: "#C6EFCE", font: { color: "#006100", bold: true }, horizontalAlignment: "center" };
ws.getRange("A17:F22").format.borders = { preset: "inside", style: "thin", color: lightBorder };
ws.getRange("D17:D21").format = { fill: paleYellow, font: { color: "#0000FF" } };
ws.getRange("C17").format = { fill: paleYellow, font: { color: "#0000FF" } };
ws.getRange("A24:F24").format = { fill: paleGreen, font: { bold: true, color: navy }, borders: { preset: "doubleBottom", style: "medium", color: navy } };
ws.getRange("A29:F31").format.borders = { preset: "inside", style: "thin", color: lightBorder };
ws.getRange("A31:F31").format.fill = paleBlue;
ws.getRange("A35:F40").format = { font: { color: "#4A5560", italic: true, size: 9 }, wrapText: true };

ws.getRange("B5:B6").format.numberFormat = "$#,##0;[Red]($#,##0);-";
ws.getRange("B14").format.numberFormat = "$#,##0;[Red]($#,##0);-";
ws.getRange("B7").format.numberFormat = "#,##0";
ws.getRange("B8").format.numberFormat = "0%";
ws.getRange("B9:B11").format.numberFormat = "#,##0";
ws.getRange("B12:B13").format.numberFormat = "#,##0";
ws.getRange("E5:E11").format.numberFormat = "$#,##0.00;[Red]($#,##0.00);-";
ws.getRange("E12:E13").format.numberFormat = "#,##0 \"RWF\";[Red](#,##0 \"RWF\");-";
ws.getRange("C17:C22").format.numberFormat = "#,##0";
ws.getRange("D17:E24").format.numberFormat = "#,##0 \"RWF\";[Red](#,##0 \"RWF\");-";
ws.getRange("F17:F24").format.numberFormat = "$#,##0.00;[Red]($#,##0.00);-";
ws.getRange("A29:A31").format.numberFormat = "#,##0";
ws.getRange("B29:D31").format.numberFormat = "#,##0 \"RWF\";[Red](#,##0 \"RWF\");-";
ws.getRange("E29:F31").format.numberFormat = "$#,##0.00;[Red]($#,##0.00);-";

ws.getRange("A1:F40").format.font.name = "Aptos";
ws.getRange("A:A").format.columnWidth = 38;
ws.getRange("B:B").format.columnWidth = 17;
ws.getRange("C:C").format.columnWidth = 13;
ws.getRange("D:D").format.columnWidth = 34;
ws.getRange("E:E").format.columnWidth = 24;
ws.getRange("F:F").format.columnWidth = 18;
ws.getRange("A35:F40").format.rowHeight = 28;
ws.getRange("C17:F31").format.horizontalAlignment = "right";

await fs.mkdir(outputDir, { recursive: true });
const check = await wb.inspect({ kind: "table", range: "'Visit Budget'!A1:F40", include: "values,formulas", tableMaxRows: 45, tableMaxCols: 8, maxChars: 18000 });
console.log(check.ndjson);
const errors = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 100 }, summary: "final formula error scan" });
console.log(errors.ndjson);
const preview = await wb.render({ sheetName: "Visit Budget", range: "A1:F40", scale: 1.5, format: "png" });
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(outputPath);
console.log(JSON.stringify({ outputPath, previewPath }));
