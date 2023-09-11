// Khai báo các biến global
let productCount = 0;
let orderCount = 0;
const products = [];
const orders = [];

function removeAccent(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("đ", "d")
    .replace("Đ", "D");
}

function randomID(str) {
  var word = removeAccent(str.replaceAll(" ", ""));
  var char = word.split("");
  for (var i = 0; i < char.length; i++) {
    var j = Math.floor(Math.random() * char.length);
    var temp = char[i];
    char[i] = char[j];
    char[j] = temp;
  }
  return char.join("");
}

// Hàm tạo sản phẩm
function Product(name, quantity, price) {
  this.id = randomID(name);
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

// Hàm tạo đơn hàng
function Order(product_id, product_quantity) {
  this.id = `${randomID(product_id)}_${product_id}`;
  this.status = "Chưa hoàn thành";
  this.product_id = product_id;
  this.product_quantity = product_quantity;
}

// Hàm thêm sản phẩm vào danh sách sản phẩm
function addProduct(product) {
  products.push(product);
  return product;
}

// Hàm tạo đơn hàng mới
function createOrder(product_id, product_quantity) {
  const order = new Order(product_id, product_quantity);
  orders.push(order);
  return order;
}

// Hàm tìm các đơn hàng dựa trên id sản phẩm
function findOrder(product_id) {
  return orders
    .filter((order) => order.product_id === product_id)
    .map((order) => {
      const product = products.find(
        (product) => product.id === order.product_id
      );
      return {
        id: order.id,
        status: order.status,
        product_id: order.product_id,
        product_quantity: order.product_quantity,
        total_price: product.price * order.product_quantity,
        product_name: product.name,
      };
    });
}

// Hàm thay đổi số lượng sản phẩm trong đơn hàng
function updateOrder(order_id, new_quantity) {
  const order = orders.find((order) => order.id === order_id);
  if (order) {
    order.product_quantity = new_quantity;
    return order;
  }
  return null;
}

// Hàm lấy thông tin về một đơn hàng
function getOrder(order_id) {
  const order = orders.find((order) => order.id === order_id);
  if (order) {
    const product = products.find((product) => product.id === order.product_id);
    return {
      id: order.id,
      status: order.status,
      product_id: order.product_id,
      product_quantity: order.product_quantity,
      total_price: product.price * order.product_quantity,
      product_name: product.name,
    };
  }
  return null;
}

// Hàm liệt kê tất cả các đơn hàng
function listOrders() {
  return orders.map((order) => {
    const product = products.find((product) => product.id === order.product_id);
    return {
      id: order.id,
      status: order.status,
      product_id: order.product_id,
      product_quantity: order.product_quantity,
      total_price: product.price * order.product_quantity,
      product_name: product.name,
    };
  });
}

// Hàm cập nhật trạng thái đơn hàng
function updateOrderStatus(order_id, new_status) {
  const order = orders.find((order) => order.id === order_id);
  if (order) {
    order.status = new_status;
    return order;
  }
  return null;
}

// Hàm xóa một đơn hàng
function deleteOrder(order_id) {
  const index = orders.findIndex((order) => order.id === order_id);
  if (index !== -1) {
    return orders.splice(index, 1)[0];
  }
  return null;
}

// Hàm tìm các đơn hàng có cùng 1 id sản phẩm
function findOrdersByProductId(product_id) {
  return orders
    .filter((order) => order.product_id === product_id)
    .map((order) => {
      const product = products.find(
        (product) => product.id === order.product_id
      );
      return {
        id: order.id,
        status: order.status,
        product_id: order.product_id,
        product_quantity: order.product_quantity,
        total_price: product.price * order.product_quantity,
        product_name: product.name,
      };
    });
}
