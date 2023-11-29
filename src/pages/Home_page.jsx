import React from "react";
import "../css/Home_page.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
export default function Home_page() {
  return (
    <>
      <div className="landing">
        <div className="landing_section" id="dangkyngay">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "68px",
              marginBottom: "0px",
            }}
          >
            Bạn muốn thiết kế gì?
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#858585",
              marginTop: "12px",
            }}
          >
            Nemosletter giúp bạn dễ dàng tạo thiết kế chuyên nghiệp, chia sẻ và
            in ấn.
          </p>
          <div className="button" id="button_dangkyngay">
            Truy cập ngay
          </div>
        </div>
        <div className="landing_section" id="section_vechungtoi">
          <h1 className="landing_section_title">Về chúng tôi</h1>
          <p className="landing_section_content">
            Chào mừng bạn đến với trang web của chúng tôi - nơi tạo ra trải
            nghiệm trực tuyến tuyệt vời cho bạn. Tại đây, chúng tôi mong muốn
            mang đến cho bạn giải pháp tích hợp trên nền tảng điện tử để giải
            quyết những vấn đề thực tế của cuộc sống hằng ngày.
          </p>
        </div>
        <div className="landing_section">
          <h1
            className="landing_section_title"
            style={{ paddingBottom: "60px" }}
          >
            Nemosletter cho mọi người
          </h1>
          <div className="landing_section_inside">
            <div className="landing_section_inside_box" id="lsib1">
              <img
                style={{ width: "576px", objectFit: "cover" }}
                src="https://i.pinimg.com/564x/84/88/7c/84887cc19221c71fef76d8e7eb59feaa.jpg"
                alt=""
              />
              <div className="landing_section_inside_box_content">
                <h2 className="landing_section_inside_box_title">
                  Thư điện tử thông minh, quản lí mail
                </h2>
                <p>Những tin nhắn rác - spam mail không còn xuất hiện.</p>
                <p>
                  Tối ưu hóa hộp thư cá nhân - tăng hiệu quả trong công việc.
                </p>
                <p>Thông báo nhanh chóng - tiện lợi - chính xác.</p>
                <Link to={`mail`} style={{ textDecoration: "none" }}>
                  <div className="button" id="button_formore">
                    Tìm hiểu thêm
                  </div>
                </Link>
              </div>
            </div>
            <div className="landing_section_inside_box" id="lsib2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F29-sep-2023%2Fimage07159e17-5c84-468b-bbc2-190066714939.png?alt=media&token=20cc0ea9-e137-454c-89e9-435c3de294a2"
                alt=""
              />
              <div className="landing_section_inside_box_content">
                <h2 className="landing_section_inside_box_title">Newsletter</h2>
                <p>
                  Bạn cần một CV ấn tượng nhà tuyển dụng? Một CV với những thông
                  tin cá nhân luôn nổi bật?
                </p>
                <p>
                  Đừng lo, chúng tôi sẽ giúp cấu trúc hóa nội dung CV của bạn
                  theo sát chuyên môn đã được định sẵn cho từng ngành nghề!
                </p>
                <Link to={`newsletter`} style={{ textDecoration: "none" }}>
                  <div className="button" id="button_formore">
                    Tìm hiểu thêm
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="landing_section">
          <h1 className="landing_section_title">
            Bạn cần CV gì? Có mẫu CV đấy!
          </h1>
          <div className="landing_section_img">
            <div className="landing_section_img_frame">
              <img
                src="https://th.bing.com/th/id/R.01d94b30636ab70dcbafc0d6dbb5a09d?rik=VHvzoxKfAAHHvQ&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://c0.piktochart.com/v2/themes/3115-professional-resume-format/snapshot/large.jpg"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://th.bing.com/th/id/OIP.y_moNK0F0zpuakXqauO2_QHaHa?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>

            <div className="landing_section_img_frame">
              <img
                src="https://i.pinimg.com/originals/d1/d5/68/d1d5680bdebc4ed069242bea977f2d1c.jpg"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://i.pinimg.com/736x/74/18/43/74184312d68db4f6ec52a92f01b71e47.jpg"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://i.pinimg.com/736x/5e/3c/f4/5e3cf4bd7410f157cefb7b23fe420090.jpg"
                alt=""
              />
            </div>
          </div>
          <Link to={`cv`} style={{ textDecoration: "none" }}>
            <div
              className="button"
              id="button_formore"
              style={{ fontWeight: "bold", fontSize: "22px" }}
            >
              Thiết kế ngay
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
