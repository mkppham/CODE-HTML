// Phương pháp 1
var price = 5;
var quantity = 14;
var total = price * quantity;

/* Phương pháp 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

// Viết tổng vào phần tử có id là cost.
var el = document.getElementById('cost'); // Lấy phần tử có id là cost.
el.textContent = '$' + total; // Thay thế nội dung của phần tử này.