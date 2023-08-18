var rules = ["o", "i", "2", "e", "a", "s"];
var str = "javascript is cool ".toLowerCase().trim();
for (var i = 0; i < rules.length; i++) {
  console.log("Đang kiểm tra trường hợp chữ " + rules[i] + " trong str");
  str = str.replaceAll(rules[i], i);
  console.log("Đã thay đổi " + rules[i] + " trong str thành " + i);
}
console.log(str);
