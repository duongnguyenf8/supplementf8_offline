var string = "THIS IS A STRING";
function getUpperCase(str) {
  if (!str) {
    console.log("Đây không phải là chuỗi!!!");
    return false;
  }
  str = str.toLowerCase();
  var stringSplit = str.split(" ");
  var newString = "";
  for (var i = 0; i < stringSplit.length; i++) {
    var firstLetter = stringSplit[i].slice(0, 1);
    if (typeof firstLetter === "string") {
      // "This"," ", "Is"," ", "A"," ", "String", " "
      var newStr = (stringSplit[i] =
        firstLetter.toUpperCase() + stringSplit[i].slice(1));
      newString = newString + newStr + " ";
    } else {
      console.log("Chữ cái đầu của mỗi từ không được là số");
      return false;
    }
  }
  return newString.trim();
}
console.log(getUpperCase(string));

// console.log("      Con CHó      ".trim());
