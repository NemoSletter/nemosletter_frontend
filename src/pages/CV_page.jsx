import React from "react";
import "../css/CV_page.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function CV_page() {
  return (
    <>
    <Navigation />
      <div className="landing_cv">
        <div className="CV_section_top">
          <div className="CV_section_top_title" id="dangkyngay">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "68px",
                marginBottom: "0px",
                width: "450px",
              }}
            >
              Bạn muốn có CV riêng?
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#858585",
                marginTop: "12px",
                width: "620px",
              }}
            >
              Nemosletwgiúp bạn dễ dàng tạo thiết kế chuyên nghiệp, chia sẻ và
              in ấn.
            </p>
            <div
              className="button"
              id="button_dangkyngay"
              style={{ width: "300px", height: "80px" }}
            >
              Taọ CV ngay{" "}
            </div>
          </div>
          <div className="CV_section_top_image">
            <img
              src="https://s3-alpha-sig.figma.com/img/2548/46ae/71a3734b4547d4dd8a00d0dc33d89795?Expires=1697414400&Signature=Rk2CYjlUU61aPBbz1oYetCPgOEsCuoTyuP52wRoIMEPfH~0mnVoJpzQETVFNXY-9pnIQYJzsscR3ubRWuY6CUeWOOqqctRCU5reO8y2HAhJSF2~9ZVBMxdouI2t4XfS59oI0gJKpWmcXQuVaxKKrtspJsK99crqBc~d36SkawGFhTiirJKI314po5bZ6ytu~UiWploOaWo83yHr7PemWFgqEh7pDXxNCzt1Ajacrniik~4A-doarIGH5lJWs-jOdgIRrf8UUEySrAZPnXR0CnAv8aylcWD8jqLA9n8hPtAUgVyOcUV7jdx5bBak3CU2k~Mb6A2gUzXJCRAWPBfNrVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
        <div
          className="landing_section"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <h1
            className="landing_cv_section_title"
            style={{ paddingBottom: "32px", width: "600px" }}
          >
            Tham khảo các mẫu CV theo phân loại{" "}
          </h1>
          <div className="landing_cv_section_choosingbar">
            <div className="choosingbar_title" id="choosingbar_title_active">
              Xu hướng
            </div>
            <div className="choosingbar_title">Học tập</div>
            <div className="choosingbar_title">Trường cao đẳng</div>
            <div className="choosingbar_title">Màu sắc</div>
            <div className="choosingbar_title">Công ty</div>
            <div className="choosingbar_title">Đồ họa</div>
          </div>
          <div
            className="landing_section_img"
            style={{ paddingBottom: "100px", paddingTop: "80px" }}
          >
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
                src="https://i.pinimg.com/736x/74/18/43/74184312d68db4f6ec52a92f01b71e47.jpg"
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
                src="https://i.pinimg.com/736x/5e/3c/f4/5e3cf4bd7410f157cefb7b23fe420090.jpg"
                alt=""
              />
            </div>
          </div>
          <Link to={`cv_maker`} style={{ textDecoration: "none" }}>
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
