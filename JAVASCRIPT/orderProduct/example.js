import { HTML, CSS, randomColor } from "https://unpkg.com/jsvjp";
import log from "https://unpkg.com/jsvjp";

HTML("h1", "success", "Em có console.log đó, mọi người bật devtool xem nha");
HTML(
  "h2",
  "link",
  "Mọi người comment từng dòng code để hiển thị từng phần, như vậy sẽ dễ hiểu luồng hơn và code đúng hơn nhé!"
);
HTML(
  "h3",
  "error",
  "Hi, em sử dụng 1 thư viện để in console.log lên màn hình. Nếu mọi người không quen có thể xóa các hàm log, HTML, CSS trong file code đi nha."
);

const classList = {
  "line-product": randomID("lineProduct"),
  "line-products": randomID("lineProducts"),
  "line-orders": randomID("lineOrders"),
  "line-order": randomID("lineOrder"),
  "line-update-order": randomID("lineUpdateOrder"),
  "line-order-info": randomID("lineOrderInfo"),
  "line-order-list": randomID("lineOrderList"),
  "line-order-status": randomID("lineOrderStatus"),
};

// Tạo một sản phẩm
const product1 = new Product("Quả chuối", 100, 5000);
const product2 = new Product("Quả cam", 10, 2000);
const product3 = new Product("Quả dưa hấu", 1, 10000);
const product4 = new Product("Quả táo", 1000, 1000);

log("product1 được tạo", product1);
console.log("product1 được tạo", product1);
log("product2 được tạo", product2);
console.log("product2 được tạo", product2);
log("product3 được tạo", product3);
console.log("product3 được tạo", product3);
log("product4 được tạo", product4);
console.log("product4 được tạo", product4);

HTML("hr", classList["line-product"]);

// // Thêm sản phẩm vào danh sách sản phẩm
addProduct(product1);
addProduct(product2);
addProduct(product3);
addProduct(product4);

log("mảng products sau khi thêm", products);
console.log("mảng products sau khi thêm", products);

HTML("hr", classList["line-products"]);

// Tạo một đơn hàng mới
const order1 = createOrder(product1.id, 50); // Đơn hàng với sản phẩm 1 và số lượng 50
const order2 = createOrder(product2.id, 100); // Đơn hàng với sản phẩm 2 và số lượng 100
const order3 = createOrder(product3.id, 150); // Đơn hàng với sản phẩm 3 và số lượng 150
const order4 = createOrder(product4.id, 250); // Đơn hàng với sản phẩm 4 và số lượng 250
const order5 = createOrder(product1.id, 150); // Đơn hàng với sản phẩm 1 và số lượng 150

log("order1 được tạo", order1);
console.log("order1 được tạo", order1);
log("order2 được tạo", order2);
console.log("order2 được tạo", order2);
log("order3 được tạo", order3);
console.log("order3 được tạo", order3);
log("order4 được tạo", order4);
console.log("order4 được tạo", order4);

log("mảng orders sau khi thêm", orders);
console.log("mảng orders sau khi thêm", orders);

HTML("hr", classList["line-orders"]);

// Tìm các đơn hàng dựa trên id sản phẩm
const ordersWithProductId1 = findOrdersByProductId(product1.id);
log("thông tin tất cả order với sản phẩm product1", ordersWithProductId1);
console.log(
  "thông tin tất cả order với sản phẩm product1",
  ordersWithProductId1
);

const ordersWithProductId3 = findOrdersByProductId(product3.id);
log("thông tin tất cả order với sản phẩm product3", ordersWithProductId3);
console.log(
  "thông tin tất cả order với sản phẩm product3",
  ordersWithProductId3
);

const ordersWithProductId5 = findOrdersByProductId(order5.id);
log("thông tin tất cả order với sản phẩm product3", ordersWithProductId5);
console.log(
  "thông tin tất cả order với sản phẩm product3",
  ordersWithProductId5
);

HTML("hr", classList["line-order"]);

// Thay đổi số lượng sản phẩm trong đơn hàng
updateOrder(order1.id, 60); // Đổi số lượng của đơn hàng 1 thành 60

const ordersWithProductId1_after_update_quantity = findOrdersByProductId(
  product1.id
);
log(
  "số lượng của order1 được đổi thành 60",
  ordersWithProductId1_after_update_quantity
);
console.log(
  "số lượng của order1 được đổi thành 60",
  ordersWithProductId1_after_update_quantity
);

updateOrder(order2.id, 10); // Đổi số lượng của đơn hàng 2 thành 10
const ordersWithProductId2_after_update_quantity = findOrdersByProductId(
  product2.id
);
log(
  "số lượng của order2 được đổi thành 10",
  ordersWithProductId2_after_update_quantity
);
console.log(
  "số lượng của order2 được đổi thành 10",
  ordersWithProductId2_after_update_quantity
);

HTML("hr", classList["line-update-order"]);

// Lấy thông tin về một đơn hàng
const orderInfo = getOrder(order3.id); // Lấy thông tin về đơn hàng 3

log("thông tin của order3", orderInfo);
console.log("thông tin của order3", orderInfo);

HTML("hr", classList["line-order-info"]);
// Liệt kê tất cả các đơn hàng
const allOrders = listOrders();
log("tất cả các order", allOrders);
console.log("tất cả các order", allOrders);

HTML("hr", classList["line-order-list"]);

// Cập nhật trạng thái của một đơn hàng
updateOrderStatus(order1.id, "Đã hoàn thành"); // Đánh dấu đơn hàng 1 là đã hoàn thành

const ordersWithProductId1_after_update_status = findOrdersByProductId(
  product1.id
);
log(
  "product1 đã được update thành hoàn thành",
  ordersWithProductId1_after_update_status
);
console.log(
  "product1 đã được update thành hoàn thành",
  ordersWithProductId1_after_update_status
);

HTML("hr", classList["line-order-status"]);

// Xóa một đơn hàng
const deletedOrder = deleteOrder(order4.id); // Xóa đơn hàng 4
const allOrders_after_delete = listOrders();
log("đơn hàng order4 đã bị xóa", deletedOrder);
console.log("đơn hàng order4 đã bị xóa", deletedOrder);
log("tất cả order bây giờ còn lại", allOrders_after_delete);
console.log("tất cả order bây giờ còn lại", allOrders_after_delete);

Object.keys(classList).forEach((key) => {
  console.log("classList[key]", classList[key]);
  CSS(`hr.${classList[key]}`, {
    width: "100vw",
    height: "0px",
    border: "1px solid",
    borderColor: randomColor(),
  });
});

/*
Hi, em sử dụng 1 chút thư viện để in console.log lên màn hình. chắc không vấn đề đâu he
*/
