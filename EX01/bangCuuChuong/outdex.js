var number = 10;

function lapTd(i) {
  var content = "";
  for (var j = 1; j <= number; j++) {
    content = content + `<td>${i}*${j} = ${i * j}</td>`;
  }
  return content;
}

function lapTr() {
  var content = "";
  for (var i = 1; i <= number; i++) {
    content =
      content +
      `<tr>
            ${lapTd(i)}
        </tr>`;
  }
  return content;
}

var html = `
<table style="width: 100%" border="1">
${lapTr()}
</table>
`;
// shift alt chuột "chái"
// tr sẽ coi là "i"
// td sẽ coi là "j"

document.write(html);
