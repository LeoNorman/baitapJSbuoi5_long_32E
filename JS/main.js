document.getElementById('btnKetQua_1').onclick = function () {
    //input: DiemChuan:number, KhuVuc: number, DoiTuong: number, diemMon1: numer, diemMon2, diemMon3: number
    var diemChuan = Number(document.getElementById('nhapDiemChuan').value);
    var diemKhuVuc = Number(document.getElementById('chonKhuVuc').value);
    var diemDoiTuong = Number(document.getElementById('chonDoiTuong').value);
    var diemMon1 = Number(document.getElementById('diemMon_1').value);
    var diemMon2 = Number(document.getElementById('diemMon_2').value);
    var diemMon3 = Number(document.getElementById('diemMon_3').value);
    //output: ketQua1: String
    ketQua1 = '';
    //progress
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
    if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        ketQua1 = 'Bạn đã đậu. Tổng điểm: ' + tongDiem;
    } else if (tongDiem < diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        ketQua1 = 'Bạn đã rớt. Tổng điểm: ' + tongDiem;
    } else {
        ketQua1 = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
    }

    document.getElementById('ketQua_1').innerHTML = ketQua1;
}

//Bài tập 2:Viết chương trình nhập vào thông tin tiêu thụ điện(tên, số kw) 
// Tính tiền và xuất tiền trả theo quy tắc:
//+ 50kw đầu: 500d/kw
//+ 50kw kế: 650d/kw
//+ 100kw kế: 850d/kw
//+ 150kw kế: 1100d/kw
//+ Còn lại: 1300d/kw

document.getElementById('btnTinhTienDien').onclick = function () {
    //input: hoTen_2: string, soKW : number
    var hoTen_2 = document.getElementById('nhapTen_2').value;
    var soKW = Number(document.getElementById('nhapSo_KW').value);
    //output: tienDien: number
    tienDien = 0;
    //progress
    if (soKW <= 50 && soKW > 0) {
        tienDien = 500 * soKW;
    } else if (soKW > 50 && soKW <= 100) {
        tienDien = 500 * 50 + 650 * (soKW - 50);
    } else if (soKW > 100 && soKW <= 200) {
        tienDien = 500 * 50 + 650 * 50 + 850 * (soKW - 100);
    } else if (soKW > 200 && soKW <= 350) {
        tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (soKW - 200);
    } else if (soKW > 350) {
        tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (soKW - 350);
    } else {
        alert('Số kw không hợp lệ! Vui lòng nhập lại');
    }
    document.getElementById('ketQua_2').innerHTML = 'Họ tên: ' + hoTen_2 + '; Tiền điện: ' + tienDien.toLocaleString();
}

//Bài tập 3

document.getElementById('btnTinhTienThue').onclick = function () {
    //input: hoTen_3: String, TongThuNhap: number, soNguoiPT: number
    var hoTen_3 = document.getElementById('nhapTen_3').value;
    var tongThuNhap = Number(document.getElementById('nhapTongThuNhap').value);
    var soNguoiPT = Number(document.getElementById('nhapSoNguoiPT').value);
    //output: thueThuNhapCN : number
    ketQua3 = '';
    thueThuNhapCN = 0;
    //progress
    var thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoiPT * 1.6e+6;
    if (thuNhapChiuThue > 4e+6 && thuNhapChiuThue <= 60e+6) {
        thueThuNhapCN = thuNhapChiuThue * 0.05;
    } else if(thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        thueThuNhapCN = thuNhapChiuThue * 0.1;
    } else if(thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        thueThuNhapCN = thuNhapChiuThue * 0.15;
    } else if(thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        thueThuNhapCN = thuNhapChiuThue * 0.2;
    } else if(thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        thueThuNhapCN = thuNhapChiuThue * 0.25;
    } else if(thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        thueThuNhapCN = thuNhapChiuThue * 0.3;
    } else if(thuNhapChiuThue > 960) {
        thueThuNhapCN = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.35;
    } else {
        alert('Số tiền thu nhập không hợp lệ')
    }
    
    document.getElementById('ketQua_3').innerHTML = 'Họ tên: ' + hoTen_3 + '; Tiền Thuế thu nhập cá nhân: ' + thueThuNhapCN.toLocaleString() + ' VND';
}

//Bài tập 4
function myFunction(obj)
{
    var changeStyle = document.getElementById('nhapSoKetNoi');
    var value = obj.value;
    if (value === ''){
        changeStyle.style.display = 'none';
    }
    else if (value === 'ND'){
        changeStyle.style.display = 'none';
    }
    else if (value === 'DN'){
        changeStyle.style.display = 'block';
    }
}

document.getElementById('btnTinhTienCap').onclick = function () {
    //input: loaiKH: string; maKH : number, soKenhCaoCap: number, soKenhKetNoi: number
    var loaiKH = document.getElementById('chonLoaiKH').value;
    var maKH = Number(document.getElementById('nhapMaKH').value);
    var soKenhCaoCap = Number(document.getElementById('nhapSoKenh').value);
    var soKenhKetNoi = Number(document.getElementById('nhapSoKetNoi').value);
    //output: tienCap: number
    tienCap = 0;
    //progress

    if(loaiKH == 'ND') {
        tienCap = 25 + 7.5 * soKenhCaoCap;
    }else if(loaiKH == 'DN' && soKenhKetNoi <= 10) {
        tienCap = 15 + 75 + 50 * soKenhCaoCap;
    }else if(loaiKH == 'DN' && soKenhKetNoi > 10) {
        tienCap = 15 + 75 + 5 * (soKenhKetNoi- 10) + 50 * soKenhCaoCap;
    }else if(loaiKH == ''){
        alert('Hãy chọn loại khách hàng')
    }

    document.getElementById('ketQua_4').innerHTML = 'Mã khách hàng: ' + maKH + '; Tiền cáp: ' + tienCap.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });;
}




