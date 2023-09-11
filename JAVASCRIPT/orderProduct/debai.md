1. Tạo một hàm tạo có tên `Product()` và một đối tượng có tên là `product` với các thuộc tính sau:

   - `id`: id DUY NHẤT của sản phẩm, được tạo tự động trong hàm tạo `Product()`.

   - `name`: Tên sản phẩm

   - `quantity`: Số lượng sản phẩm

   - `price`: Giá sản phẩm

2. Tạo một mảng có tên là `products` chứa danh sách các sản phẩm.

---

3. Tạo một hàm tạo có tên `Order()` đối tượng có tên là `order` với các thuộc tính sau:

   - `id`: id DUY NHẤT đơn hàng, được tạo tự động trong hàm tạo `Order()`.

   - `status`: Trạng thái đơn hàng, được tạo tự động trong hàm tạo `Order()`, giá trị mặc định là **`"chưa hoàn thành"`**.

   - `product_id`: Chứa ID của product

   - `product_quantity`: Chứa số lượng của product trong order

4. Tạo một mảng có tên là `orders` chứa danh sách các đơn hàng.

---

5. Tạo một hàm có tên là `addProduct()` để thêm 1 sản phẩm mới vào products, hàm này nhận vào **một object** được tạo từ hàm tạo `Product()`, thêm 1 sản phẩm vào products, trả về object vừa thêm

   - Hàm tạo `Product()` chỉ nhận vào **name, quantity, price** và không nhận ID

6. Tạo một hàm có tên là `createOrder()` để thêm một sản phẩm vào đơn hàng. Hàm này cần nhận vào **hai** tham số là ID sản phẩm và số lượng. Trả về order đã create được tạo bằng hàm tạo `Order()`

7. Tạo một hàm có tên là `updateOrder()` để thay đổi một đơn hàng. Hàm này cần nhận vào **hai** tham số là ID đơn hàng và số lượng mới. Trả về order vừa được update

8. Tạo một hàm có tên là `getOrder()` để lấy thông tin về một đơn hàng. Hàm này cần nhận vào **một** tham số là ID đơn hàng. Cần trả về **id, status, product_id, product_quantity, `total_price`, `product_name`**

- `total_price` được tạo bằng cách lấy thông tin product từ `product_id`, sau đó lấy được `price`, nhân với `product_quantity`

- `product_name` được tạo bằng cách lấy thông tin product từ `product_id`

9. Tạo một hàm có tên là `listOrders()` để liệt kê **tất cả** các đơn hàng. Cần trả về **id, status, product_id, product_quantity, `total_price`, `product_name`** với **mỗi order**

- `total_price` được tạo bằng cách lấy thông tin product từ `product_id`, sau đó lấy được `price`, nhân với `product_quantity`

- `product_name` được tạo bằng cách lấy thông tin product từ `product_id`

10. Tạo một hàm có tên là `updateOrderStatus()` để cập nhật trạng thái của một đơn hàng. Hàm này cần nhận vào **hai** tham số là ID đơn hàng và trạng thái mới của đơn hàng. Trả về order vừa được update

11. Tạo một hàm có tên là `deleteOrder()` để xóa một đơn hàng. Hàm này cần nhận vào **một** tham số là **ID đơn hàng**. Trả về order vừa được xóa

12. Tạo 1 hàm có tên là `findOrder()` để tìm **tất cả** các order có cùng 1 id sản phẩm, nhận vào **một** tham số là id sản phẩm, trả về 1 mảng chứa các phần tử order tương ứng với id sản phẩm đã tìm, chứa **id, status, product_id, product_quantity, `total_price`, `product_name`** với **mỗi order**

- `total_price` được tạo bằng cách lấy thông tin product từ `product_id`, sau đó lấy được `price`, nhân với `product_quantity`

- `product_name` được tạo bằng cách lấy thông tin product từ `product_id`

---

Ví dụ về cách sử dụng các hàm này:

```javascript
// Tạo một product
const product = new Product("Con mèo", 200, 100000); // tên, số lượng, giá

// Tạo một product mới
addProduct(product);

// Tạo một order mới
createOrder(id_san_pham, so_luong_san_pham); // Trong hàm này gọi đến hàm tạo Order()

// Tìm nhiều đơn hàng
findOrder(id_don_hang);

// Thay đổi một đơn hàng
updateOrder(id_don_hang, so_luong_moi);

// Lấy thông tin về một đơn hàng
const order = getOrder(id_don_hang);

// Liệt kê tất cả các đơn hàng
listOrders();

// Cập nhật trạng thái của một đơn hàng
updateOrderStatus(id_don_hang, "Đã hoàn thành");

// Xóa một đơn hàng
deleteOrder(id_don_hang);
```

Ví dụ về **products** sau khi được tạo:

```json
{
  "products": [
    {
      "id": 2211,
      "name": "Quả chuối",
      "quantity": 100,
      "price": 5000
    },
    {
      "id": 1221,
      "name": "Quả cam",
      "quantity": 10,
      "price": 2000
    },
    {
      "id": 2112,
      "name": "Quả dưa hấu",
      "quantity": 1,
      "price": 10000
    },
    {
      "id": 1122,
      "name": "Quả táo",
      "quantity": 1000,
      "price": 1000
    }
  ]
}
```

Ví dụ về **orders** sau khi được tạo:

```json
{
  "orders": [
    {
      "id": 4433,
      "status": "Chưa hoàn thành",
      "product_id": 2211,
      "product_quantity": 50
    },
    {
      "id": 3443,
      "status": "Đã hoàn thành",
      "product_id": 1221,
      "product_quantity": 1
    },
    {
      "id": 3445,
      "status": "Đã hoàn thành",
      "product_id": 1221,
      "product_quantity": 9
    },
    {
      "id": 4334,
      "status": "Đã hoàn thành",
      "product_id": 2112,
      "product_quantity": 1
    },
    {
      "id": 3344,
      "status": "Đã hoàn thành",
      "product_id": 1122,
      "product_quantity": 123
    },
    {
      "id": 3345,
      "status": "Đã hoàn thành",
      "product_id": 1122,
      "product_quantity": 124
    }
  ]
}
```
