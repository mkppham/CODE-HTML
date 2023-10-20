// Lưu trữ greeting vào một biến.
var greeting = 'Howdy ';
// Lưa trữ users name vào một biến.
var name = 'Molly';

/* Tạo welcome message bằng cách nối các chuỗi trong hai biến */ 
var welcomeMessage = greeting + name + '!';

// Lấy phần tử có id là greeting.
var el = document.getElementById('greeting');
// Thay thế nội dung phần tử này bằng personal message.
el.textContent = welcomeMessage;