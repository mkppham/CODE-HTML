// Tạo biến cho subtotal và thực hiện phép var.
var subtotal = (13 + 1) * 5; // Kết quả là 70.

// Tạo biến cho shipping và thực hiện phép var.
var shipping = 0.5 * (13 + 1); // Kết quả là 7.

// Tạo tổng bằng cách tính tổng subtotal và shipping.
var total = subtotal + shipping; // Kết quả là 77.

// Ghi kết quả ra màn hình.
var elSup = document.getElementById('subtotal');
elSup.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

/*
Lưu Ý: textContent không hoạt động trong IE8 trở về trước. 
Bạn có thể sử dụng innerHTML trên các dòng 12, 15 và 18 nhưng lưu ý vấn đề bảo mật trên p228-231.
elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;
*/