var n = 10;
function sqrt(number) {
  for (var i = 1; i <= number; i++) {
    console.log("Lặp với i = " + i);
    if (i ** 2 < n && (i + 1) ** 2 > n) {
      console.log(i + "Đã thỏa mãn");
      for (var j = i + 0.1; j <= i + 0.9; j += 0.1) {
        console.log("Lặp với j = " + j);
        if (j ** 2 < n && (j + 0.1) ** 2 > n) {
          console.log(j + "Đã thỏa mãn");
          for (var k = j + 0.01; k <= j + 0.09; k += 0.01) {
            console.log("Lặp với k = " + k);
            if (k ** 2 < n && (k + 0.01) ** 2 > n) {
              console.log(k + "Đã thỏa mãn");
              break;
            }
          }
          break;
        }
      }
      break;
    } else if (i ** 2 === n) {
      console.log("i", i);
      break;
    }
  }
}
sqrt(n);
