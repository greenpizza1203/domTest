// const pug = require("pug");
// let tileHtml;
//
// async function loadCode() {
//     tileHtml = await $.get("tile.html");
// }
//
// loadCode().then(initDom)
//
// function initDom() {
//     const $table = $("<table>").appendTo("#parent");
//     const $tbody = $("<tbody>").appendTo($table);
//     createRow().appendTo($tbody)
//     const $tr = $("<tr>").appendTo($tbody);
//     $tr.append(getDefaultTile())
//     $tr.append($("<td>").attr("rowspan", 9).attr("colspan", 9));
//     $tr.append(getDefaultTile())
//     for (let i = 0; i < 8; i++) {
//         const $tr = $("<tr>").appendTo($tbody);
//         $tr.append(getDefaultTile())
//         $tr.append(getDefaultTile("right").addClass("h-small"))
//
//     }
//     createRow().appendTo($tbody)
//
// }
//
// function createRow(type) {
//     const $row = $("<tr class='h-big'>");
//     $row.append(getCornerTile())
//     for (let i = 0; i < 9; i++) {
//         $row.append(getDefaultTile(type))
//     }
//     $row.append(getCornerTile())
//     return $row
//
// }
//
// function getCornerTile() {
//     $td = $("<td>").addClass(["w-big", "h-big"])
//     // $td.html(tileHtml);
//     return $td
// }
//
// function getDefaultTile(type="left") {
//     $td = $(`<td class='orientation-${type}'>`)
//
//     const compiledFunction = pug.compile(templateCode);
//
//     $td.html(compiledFunction);
//     return $td
// }
