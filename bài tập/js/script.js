/*
Viết chương trình hiển thị giá và số lượng sản phẩm. Tính ra tổng tiền. Nếu số tiền >=100 thì hiển thị màu xanh, 
nếu <100 thì hiển thị màu đỏ. Nếu số tiền >=100 thì giảm giá 5%, còn nhỏ hơn thì ko giảm giá. 
ngoài ra hiển thị GIỜ HIỆN TẠI, và sau 1 phút đổi màu text 1 lần :D 
*/
function Time () { // Tạo hàm về thời gian thực
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var period = "";

    if (hour >= 12 ) { /* Tạo điều kiện cho đồng hồ vì thiết lập dạng đồng hồ 12h */
        period = " PM";
    } else {
        period = " AM";
    }
    
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    hour = update(hour);
    minute = update(minute);
    seconds = update(seconds);

    document.getElementById('digital-clock').innerText = hour + ":" + minute + ":" + seconds + "" + period;

    setTimeout(Time, 1000);
}

function update (t) { // Cập nhật về thời gian
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();

function changeColor() { // Biến đổi màu sắc của phần tử
    const textElement = document.getElementById('text');

    const currentColor = textElement.style.color;
    
    if (currentColor === 'blue') {
        textElement.style.color = 'red';
        textElement.textContent = 'Văn bản sẽ đổi màu sau 1p!';
    } else {
        textElement.style.color = 'blue';
        textElement.textContent = 'Văn bản sẽ đổi màu sau 1p!';
    }
}

setInterval(changeColor, 60000); // Gọi hàm thay đổi mỗi phút
