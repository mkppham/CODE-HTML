// Tạo biến cho thông điệp chào mừng.
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
// Ghép 3 biến trên để tạo thông điệp chào mừng.
var welcome = greeting + name + message;

// Tạo biến chứa thông tin chi tiết về sign.
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Lấy phần tử có id là greeting.
var  el = document.getElementById('greeting');
// Thay thế nội dung phần tử đó bằng welcome message.
el.textContent = welcome;

// Lấy phần tử có id là userSign sau đó cập nhật nội dung của nó.
var elSign = document.getElementById('uderSign');
elSign.textContent = sign;

// Lấy phần tử có id là tiles rồi cập nhật nội dung cho nó.
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Lấy phần tử có id là subTotal rồi cập nhật thông tin cho nó.
var elSupTotal = document.getElementById('subtotal');
elSupTotal.textContent = '$' + subTotal;

// Lấy phần tử có id là shipping rồi cập nhật thông tin cho nó.
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Lấy phần tử có id là grandTotal rồi cập nhật thông tin cho nó.
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;