var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // Khai báo biến
elForm          = document.getElementById('formSignup');          // Lưu trữ các phần tử
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                                                // Khai báo hàm
    var pack = this.options[this.selectedIndex].value;                  // Chọn tùy chọn đã chọn
    if (pack === 'monthly') {                                           // Gói hàng tháng nếu        
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 yaer!';    // Hiển thị tin nhắn này
    } else {                                                            // Nếu ko thì                               
        elPackageHint.innerHTML = 'Wise choise!';                       // Hiển thị thông báo này
    }
}
function checkTerms(event) {                                            // Khai báo hàm
    if (!elTerms.checked) {                                             // Nếu đánh dấu vào hộp kiểm tra
        elTermsHint.innerHTML = 'You must agree to the terms.';         // Hiển thị tin nhắn
        // event.preventDefault();                                                                // Không gửi biểu mẫu
    }
}
// Tạo trình sử lý sự kiện: gửi lện gọi checkTerms(), thay đổi lệnh gọi packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);