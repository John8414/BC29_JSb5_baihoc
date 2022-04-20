/**
 * Fuction (hàm)
 * Không có tham số
 * có 1 hoặc nhiều tham số
 * hàm không có giá trị trả về
 * hàm có giá trị trả về
 */
function xuatThongTin() {
  //phần thân của hàm
  console.log("Hello Cybersoft");
}
// gọi lại hàm

xuatThongTin();

/**
 * Tính tổng 2 số
 */
// function tinhTong() {
//   //local
//   var number_1 = 20;
//   var number_2 = 10;

//   var tong = number_1 + number_2;

//   console.log(tong);
// }
// tinhTong();

// function tinhTong(a, b) {
//   var tong = a + b;
//   console.log(tong);
// }
// tinhTong(12, 20);
// tinhTong(20, 20);
// tinhTong(30, 20);

function tinhTong(a, b) {
  var tong = a + b;
  return tong;
  //   console.log(tong);
}
var sum = tinhTong(10, 5) * 2;
console.log(sum);

/**
 * Tinh lương
 * - số ngày làm: 5
 * - lương ngày: 100000
 * Viết hàm tính lương có 2 tham số ngày làm và lương ngày
 * Hàm tính lương trả về lương đã tính
 */

function tinhLuong(soNgayLam, luongNgay) {
  var tongLuong = soNgayLam * luongNgay;
  return tongLuong;
}
var tongLuong = tinhLuong(5, 100000);
console.log(tongLuong);

/**
 * fuction literal
 */

var tinhHieu = function () {
  console.log("tinhHieu");
};

tinhHieu();

/**
 * - Người dùng nhập số. Kiểm số chẵn hay lẻ
 */
function ktSochanLe(number) {
  //result : true là số chẵn
  //result : false là số lẻ
  var result;
  if (number % 2 === 0) {
    // số chẵn
    result = true;
  } else {
    // số lẽ
    result = false;
  }
  return result;
}

document.getElementById("kiemTra").onclick = function () {
  //Láy value từ thẻ input
  var number = document.getElementById("txt_number").value * 1;
  var result = "";

  // Kiểm tra số chẵn / lẽ
  var isStatus = ktSochanLe(number);
  if (isStatus) {
    result = "Số " + number + " là số chẵn";
  } else {
    result = "Số " + number + " là số lẻ";
  }
  // show kết quả
  document.getElementById("footerKetQua").innerHTML = result;
};

/**
 * Tìm số lớn nhất trong 3 số
 * Đầu vào
 * - number_1 = 5
 * - number_2 = 10
 * - number_3 = 20
 *
 * Xử lý
 * Viết hàm timSLN()
 * + Truyền vô 3 tham số a,b,c
 * +
 * +
 * +
 * + Trả về SLN
 *
 * Đầu ra: show kết quả
 */
var number_1 = 5;
var number_2 = 10;
var number_3 = 20;
var max = number_1;

number_2 > max;
max = number_2