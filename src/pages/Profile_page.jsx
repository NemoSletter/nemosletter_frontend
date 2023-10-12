import React from "react";
import "../css/Profile_page.css";
import Footer from "../components/Footer";

export default function Profile_page() {
  return (
    <>
      <div className="profile_page">
        <div className="profile_page_container">
          <div className="profile_page_sidebar"></div>
          <div className="profile_page_detail">
            <div className="profile_page_detail_top">
              <div className="avatar_name_box">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c7f6/6f19/a5a5bee218dd868d2667e85a77ecda39?Expires=1698019200&Signature=OeSzqJS1HEJaJKSBjq0CcNnVVPtAEiOfBmcONf1q78CHI8VaZmrSD0CZQIp80zDdaE2JgsPuH4TN7i07LTeGsdGEUNS6lOIqC822NdnCUbIuYXwJ8pmhXbKTd5bjfKuat9b3i5f2mCnKJsdkNmGuBof2WWtgb6KTUnnxcX1M~lKFTF1Rr9ZluXq5XzxBr694gd1QmcRrLcOJw00dJv~kfpzkyqY80CEXHOuVrlr3XIp1bhVlVL1so0fO8KOmVKHii87E80WwCJtQ4B-4c1XS4u2JKy4N8iifisUegcXDOpSFyo2FCXKxkWK0O9OK675aKvwDbVOCgsWj~dQWDOYpEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
                <p style={{ fontSize: "44px", paddingLeft: "34px" }}>
                  {" "}
                  Hoàng Đinh Long
                </p>
              </div>
              <div className="avatar_name_button">
                <div className="avatar_name_button_btn">
                  <p style={{ backgroundColor: "#7357FF", color: "white" }}>
                    Đăng xuất
                  </p>
                </div>
              </div>
            </div>
            <div className="profile_page_detail_bottom">
              <div className="profile_page_detail_section_container">
                <div className="profile_page_detail_section">
                  <h1>Email</h1>
                  <div className="inline_info">
                    <i class="fa-regular fa-envelope"></i>
                    <p>hoanglong@gmail.com</p>{" "}
                  </div>
                </div>

                <div className="profile_page_detail_section">
                  <h1>Giới tính</h1>
                  <div className="inline_info">
                    <i class="fa-regular fa-paper-plane"></i>
                    <p>Nam</p>{" "}
                  </div>
                </div>
              </div>
              <div className="profile_page_detail_section_container">
                <div className="profile_page_detail_section">
                  <h1>Số điện thoại</h1>
                  <div className="inline_info">
                    <i class="fa-regular fa-paper-plane"></i>
                    <p>088209208202</p>{" "}
                  </div>
                </div>
                <div className="profile_page_detail_section">
                  <h1>Ngày sinh</h1>
                  <div className="inline_info">
                    <i class="fa-regular fa-calendar-days"></i>
                    <p>30/01/1998</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
