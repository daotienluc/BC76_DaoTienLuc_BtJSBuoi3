// bài 1

document.getElementById("tinhTienLuong").onclick = function () {
  var tienLuong1Ngay = 100000;
  var soNgayLam = document.getElementById("soNgayLam").value;
  //   console.log(soNgayLam, typeof soNgayLam);
  var soTienLuongg = tienLuong1Ngay * soNgayLam;
  document.getElementById("soTienLuong").innerHTML =
    soTienLuongg.toLocaleString() + "VNĐ";
  //   console.log(soTienLuongg.typeof);
};

// bài 2

document.getElementById("tinhTrungBinh").onclick = function () {
  var o1 = parseFloat(document.getElementById("o1").value);
  var o2 = parseFloat(document.getElementById("o2").value);
  var o3 = parseFloat(document.getElementById("o3").value);
  var o4 = parseFloat(document.getElementById("o4").value);
  var o5 = parseFloat(document.getElementById("o5").value);
  //   console.log(o1, typeof o1);
  var tongCua5So = o1 + o2 + o3 + o4 + o5;
  var giaTriTrungBinh = tongCua5So / 5;
  document.getElementById("ketQua").innerHTML = giaTriTrungBinh + "%";
};

// bài 3

document.getElementById("quyDoiVnd").onclick = function () {
  var giaUsd = 23500;
  var soTienUsd = document.getElementById("soTienUsd").value;
  var giaQuyDoi = giaUsd * soTienUsd;
  document.getElementById("xuatRa").innerHTML =
    giaQuyDoi.toLocaleString() + "VNĐ";
};

// bài 4

document.getElementById("tinh").onclick = function () {
  var chieuDai = parseFloat(document.getElementById("chieuDai").value);
  var chieuRong = parseFloat(document.getElementById("chieuRong").value);

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById("ketQuaChieuDai").innerHTML = dienTich;
  document.getElementById("ketQuaChieuRong").innerHTML = chuVi;
};

// bài 5

document.getElementById("tong2KiSo").onclick = function () {
  // Lấy giá trị từ ô input
  var nhapSo = document.getElementById("nhapSo").value;

  // Chuyển giá trị thành số nguyên
  var so = nhapSo;

  // Tính hàng chục và hàng đơn vị
  var hangChuc = Math.floor(so / 10);
  var hangDonVi = so % 10;

  // Tính tổng của hàng chục và hàng đơn vị
  var tong2KiSo = hangChuc + hangDonVi;

  // Hiển thị kết quả
  document.getElementById("ketQuaTong2KiSo").innerHTML =
    "Tổng 2 kí số là: " + tong2KiSo;
};
