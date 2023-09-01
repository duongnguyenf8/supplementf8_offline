## Phần 1

1. Viết chương trình in ra chuỗi "Hello World!".

- Gợi ý:
  - Sử dụng hàm `console.log()` để in ra chuỗi.

2. Viết chương trình nhận vào một số nguyên và in ra số đó nhân với 2.

- Gợi ý:

  - Sử dụng biến `n` để lưu trữ số nguyên đầu vào.
  - Sử dụng biến `result` để lưu trữ kết quả của phép nhân.
  - In ra biến `result`.

- **Input: 2 => Output: 4**

3. Viết chương trình nhận vào một số nguyên và in ra số đó chia cho 2.

- Gợi ý:

  - Sử dụng biến `n` để lưu trữ số nguyên đầu vào.
  - Sử dụng biến `result` để lưu trữ kết quả của phép chia.
  - In ra biến `result`.

- **Input: 4 => Output: 2**

4. Viết chương trình nhận vào hai hoặc nhiều số nguyên và in ra tổng của chúng.

- Gợi ý:

  - Sử dụng rest parameter để nhận các số nguyên.
    - Kiểm tra số trong đó có phải số nguyên không
  - Sử dụng biến `result` để lưu trữ kết quả của phép cộng.
  - In ra biến `result`.

- **Input: 2, 3, 4 => Output: 9**

5. Viết chương trình nhận vào hai số nguyên và in ra hiệu của chúng.

- Gợi ý:

  - Sử dụng biến `n1` để lưu trữ số nguyên đầu vào đầu tiên.
  - Sử dụng biến `n2` để lưu trữ số nguyên đầu vào thứ hai.
  - Sử dụng biến `result` để lưu trữ kết quả của phép trừ.
  - In ra biến `result`.

- **Input: 4, 8 => Output: -4**

6. Viết chương trình nhận vào hai số nguyên và in ra tích của chúng.

- Gợi ý:

  - Sử dụng biến `n1` để lưu trữ số nguyên đầu vào đầu tiên.
  - Sử dụng biến `n2` để lưu trữ số nguyên đầu vào thứ hai.
  - Sử dụng biến `result` để lưu trữ kết quả của phép nhân.
  - In ra biến `result`.

- **Input: 2, 4 => Output: 8**

7. Viết chương trình nhận vào hai số nguyên và in ra thương của chúng.

- Gợi ý:

  - Sử dụng biến `n1` để lưu trữ số nguyên đầu vào đầu tiên.
  - Sử dụng biến `n2` để lưu trữ số nguyên đầu vào thứ hai.
    - Kiểm tra n2 có phải là số 0 không...
  - Sử dụng biến `result` để lưu trữ kết quả của phép chia.
  - In ra biến `result`.

- **Input: 4, 2 => Output: 2**

8. Viết chương trình nhận vào một chuỗi và in ra số ký tự trong chuỗi đó.

- Gợi ý:

  - Sử dụng biến `str` để lưu trữ chuỗi đầu vào.
  - Sử dụng biến `count` để lưu trữ số ký tự trong chuỗi.
  - Duyệt qua chuỗi bằng vòng lặp `for` và tăng biến `count` lên 1 cho mỗi ký tự.
  - In ra biến `count`.

- **Input: "Hello World" => Output: 11**

9. Viết chương trình nhận vào một chuỗi và in ra chuỗi đảo ngược của chuỗi đó.

- Gợi ý:

  - Sử dụng biến `str` để lưu trữ chuỗi đầu vào.
  - Sử dụng biến `result` để lưu trữ chuỗi đảo ngược.
  - Duyệt qua chuỗi từ cuối đến đầu bằng vòng lặp `for` và thêm từng ký tự vào cuối của biến `result`.
  - In ra biến `result`.

- **Input: "Hello" => Output: "olleH"**

10. Viết chương trình nhận vào một mảng và in ra trung bình cộng của các phần tử trong mảng đó.

- Gợi ý:

  - Sử dụng biến `arr` để lưu trữ mảng đầu vào.
  - Sử dụng biến `result` để lưu trữ trung bình cộng của các phần
  - Sử dụng vòng lặp để xử lý.

- **Input: 1, 2, 3, 4, 5 => Output: 3**

## Phần 2

1. Viết chương trình nhận vào một số nguyên và in ra số đó có phải là số nguyên tố hay không.

- Gợi ý:

  - Sử dụng vòng lặp để duyệt.
  - Nếu số n chia hết cho bất kỳ số nguyên nào trong khoảng đó, thì n không phải là số nguyên tố.
  - Nếu số n không chia hết cho bất kỳ số nguyên nào trong khoảng đó, thì n là số nguyên tố.

- **Input: 9007199254740881 => Output: `true`**

2. Viết chương trình nhận vào một mảng các số nguyên và in ra các số nguyên tố trong mảng đó.

- Gợi ý:

  - Kiểm tra các số có phải số nguyên không, có phải số âm, số 0, 1... không.
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số nguyên tố, thì in ra số đó.

- **Input: [9007199254740881, 1, 2, 3, 5, 6, 8, 7] => Output: [9007199254740881, 2, 3, 5, 7]**

3. Viết chương trình nhận vào một mảng các số nguyên và in ra các số chẵn trong mảng đó.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số chẵn, thì in ra số đó.

- **Input: [2, 4, 5, 7, 8] => Output: [2, 4, 8]**

4. Viết chương trình nhận vào một mảng các số nguyên và in ra các số lẻ trong mảng đó.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số lẻ, thì in ra số đó.

- **Input: [2, 4, 5, 7, 8] => Output: [5, 7]**

5. Viết chương trình nhận vào một mảng các số nguyên và in ra các số dương trong mảng đó.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số dương, thì in ra số đó.

- **Input: [-2, 4, -5, -7, 8] => Output: [4, 8]**

6. Viết chương trình nhận vào một mảng các số nguyên và in ra các số âm trong mảng đó.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số âm, thì in ra số đó.

- **Input: [-2, 4, -5, -7, 8] => Output: [-2, -5, -7]**

7. Viết chương trình nhận vào một mảng các số nguyên và in ra các số nguyên tố trong mảng đó, sắp xếp theo thứ tự tăng dần.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số nguyên tố, thì in ra số đó.

- **Input: [-2, 4, -5, -7, 8] => Output: [-7, -5, -2, 4, 8]**

8. Viết chương trình nhận vào một mảng các số nguyên và in ra các số nguyên tố trong mảng đó, sắp xếp theo thứ tự giảm dần.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số nguyên tố, thì in ra số đó.

- **Input: [-2, 4, -5, -7, 8] => Output: [8, 4, -2, -5, -7]**

9. Viết chương trình nhận vào một mảng các số nguyên và in ra các số nguyên tố trong mảng đó, sắp xếp theo thứ tự tăng dần và chỉ in ra các số có 3 chữ số.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số nguyên tố và có 3 chữ số, thì in ra số đó.

- **Input: [-234, 45, -567, -7, 890] => Output: [-567, -234, 890]**

10. Viết chương trình nhận vào một mảng các số nguyên và in ra các số nguyên tố trong mảng đó, sắp xếp theo thứ tự giảm dần và chỉ in ra các số có 3 chữ số.

- Gợi ý:

  - Kiểm tra có phải số không, có phải số nguyên không...
  - Sử dụng vòng lặp `for` để duyệt qua tất cả các số trong mảng.
  - Nếu số đó là số nguyên tố và có 3 chữ số, thì in ra số đó.
  - Sử dụng hàm `sort()` để sắp xếp các số trong mảng theo thứ tự giảm dần.

- **Input: [-234, 45, -567, -7, 890] => Output: [890, -234, -567]**

## Phần 3

1. Viết chương trình nhận vào một chuỗi và in ra chuỗi đó với tất cả các ký tự viết hoa.

- Gợi ý:

  - Sử dụng vòng lặp `for` để duyệt qua tất cả các ký tự trong chuỗi, và chuyển đổi tất cả các ký tự thành chữ hoa.

- **Input: "hello" => Output: "HELLO"**

2. Viết chương trình nhận vào một chuỗi và in ra chuỗi đó với tất cả các ký tự viết thường.

- Gợi ý:

  - Sử dụng vòng lặp `for` để duyệt qua tất cả các ký tự trong chuỗi, và chuyển đổi tất cả các ký tự thành chữ thường.

- **Input: "HELLO" => Output: "hello"**

3. Viết chương trình nhận vào một chuỗi và in ra chuỗi đó với tất cả các khoảng trắng bị loại bỏ.

- Gợi ý:

  - Sử dụng vòng lặp `for` để duyệt qua tất cả các ký tự trong chuỗi, và chỉ in ra các ký tự không phải là khoảng trắng.

- **Input: "hello world" => Output: "helloworld"**

4. Viết chương trình nhận vào một chuỗi và in ra chuỗi đó với tất cả các ký tự đặc biệt bị loại bỏ.

- Gợi ý:

  - Sử dụng vòng lặp `for` để duyệt qua tất cả các ký tự trong chuỗi, và chỉ in ra các ký tự là chữ cái hoặc số.

- **Input: "hello& \* % wor^ld" => Output: "helloworld"**

5. Viết chương trình nhận vào một chuỗi và in ra chuỗi đó với tất cả các ký tự được lặp lại hai lần.

- Gợi ý:

  - Sử dụng vòng lặp `for` để duyệt qua tất cả các ký tự trong chuỗi, và in ra ký tự đó hai lần.

- **Input: "hello world" => Output: "hheelllloo wwoorrlldd"**

6. **Chuỗi palindrome** Viết chương trình kiểm tra 1 chuỗi có phải chuỗi palindrome không?

- Gợi ý:

  - Chuỗi palindrome là chuỗi đối xứng: "aba", "abba", "1221", "12321"...

- **Input: "aba" => Output: true**
