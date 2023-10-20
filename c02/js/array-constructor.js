// Tạo và đặt tên biến.
// báo với trình thông dịch rằng đó là một mảng.
var colors = new Array('white',
                       'black',
                       'custom');

// Hiển thị mục đầu tiên từ mảng.                      
var el = document.getElementById('colors');
el.textContent = colors[0];