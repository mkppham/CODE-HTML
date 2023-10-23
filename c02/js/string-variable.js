// Tạo biến để giữ tên và ghi chú văn bản
var username;
var message;

// Gán giá trị cho các biến này.
username = 'Molly';
message = 'See our upcoming range';

// Lấy phần tử có id name.
var elName = document.getElementById('name');
// Thay thế nội dung của phần tử này.
elName.textContent = username;

// Lấy phần tử có id note.
var elNote = document.getElementById('note');
// Thay thế nội dung phần tử này.
elNote.textContent = message;