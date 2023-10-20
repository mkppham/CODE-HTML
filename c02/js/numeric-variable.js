// Tạo ba biến để lưu trữ thông tin cần thiết.
var price;
var quantity;
var total;

// Gán giá trị cho biến price và quantity.
price = 5;
quantity = 14;
// Tính kết quả bằng cách nhân price và quantity.
total = price * quantity;

// lấy phần tử có id là cost.
var el = document.getElementById('cost');
el.textContent = '$' + total;