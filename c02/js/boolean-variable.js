// Tạo biến và gán giá trị cho chúng. 
var inStock;
var shipping;
inStock = true;
shipping = false;

// Lấy phần tử có id stock.
var elStock = document.getElementById('stock');
// Đặt tên class với giá trị của biến stock.
elStock.className = inStock;

// Lấy phần tử có id lấy từ shipping.
var elShip = document.getElementById('shipping');
// Đặt tên lớp với giá trị của biến shipping.
elShip.className = shipping;