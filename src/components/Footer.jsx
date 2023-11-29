import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="title">
          <p>CƠ CHẾ BẢO MẬT</p>
          <p>QUY TẮC HOẠT ĐỘNG</p>
          <p>THÔNG TIN HỖ TRỢ</p>
        </div>
        <div className="contact">
          <Link to={`admin`} style={{ textDecoration: "none" }}>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/382319422_2948265998637115_607065943778768597_n.png?_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFiSxUYcrzw4v7QXi7EzwBR5VbzvU914qvlVvO9T3Xiq44xPE2eTCoxte1SJrD_jC8X8tJTfvp7uWvxQsqHQN0g&_nc_ohc=zpYpcBn47nQAX9gS7j-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTrhWvvu1-Z1knvPNMEgMUOB8BKvc1gvgKfGOWgbpYY6g&oe=658ECF71"
              alt="Logo"
            />
          </Link>
          <p style={{ paddingTop: "12px" }}>
            Hotline : 19000000 - Email: cskh@hotro.nemosletter.vns
          </p>
          <p>
            Chịu Trách Nhiệm Quản Lý Nội Dung : Nguyễn Đăng Khoa - Email:
            dangkhoakow2002@gmail.com
          </p>
          <p>
            Địa chỉ : Nhà Văn Hóa Sinh Viên TP.HCM VRG2+27X, Đ.Lưu Hữu Phước, P.
            Đông Hòa, Tx. Dĩ An, Tỉnh Bình Dương
          </p>
        </div>
        <div className="policy">
          <div id="fade_top_line"></div>
          <p>2023 Mọi quyền được bảo lưu, Nemosletter</p>
          <p>Chính sách quyền riêng tư | Điều khoản</p>
        </div>
        <div></div>
      </div>
    </>
  );
}
