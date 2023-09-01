function checkNumber(array) {
  return array.every(function (number) {
    return number % 1 === 0;
  });
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0) return false;
  if (number % 3 === 0) return false;
  if (number % 7 === 0) return false;  
  for (var i = 5; i * i < number; i += 6) {
    if (number % i === 0) return false;
  }
  return true;
}

function getPrimeArray(array) {
  if (!checkNumber(array)) return "Khong phai la so";
  return array.filter(function (number) {
    return isPrime(number);
  });
}
var array = [1, 2, 3, 9007199254740881, 9007199254740990, 9007199254740987];
var newArr = getPrimeArray(array);
// console.log("newArr", newArr);

console.log("12321".split("").reverse().join(""))
