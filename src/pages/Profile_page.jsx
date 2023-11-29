import React, { useEffect, useState } from "react";
import "../css/Profile_page.css";
import Footer from "../components/Footer";
import axios from "../apis/axios";
import { useLogout } from "../hooks/use-logout";
import { useNavigate } from "react-router-dom";

export default function Profile_page() {
  const [profile, setProfile] = useState({});
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleGetProfile = async () => {
    try {
      const result = await axios.get("user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (result) {
        setProfile(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  return (
    <>
      <div className="profile_page">
        <div className="profile_page_container">
          <div className="profile_page_sidebar">
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/405883638_359389329918970_8485945254137712893_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEclsxrWvCE0JpRvFE8ECaD783Ex5YJ-8_vzcTHlgn7z8FMxOvIIg10Jsod3M0PQuNBGK-u5sIUqvdwkyiof6YC&_nc_ohc=IIro3re5-90AX9RR9ld&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQq9oNgJJQVpsP3i_aH5EtPN5KzFaPXM4T9mMNPY_hkuQ&oe=658F0C35" />

            <div>
              <h4>* Quý khách hãy kiểm tra thật kĩ thông tin chuyển khoản.</h4>
              <h4>* Giao dịch sẽ không được hoàn trả sau khi đã xác nhận.</h4>
            </div>
          </div>
          <div className="profile_page_detail">
            <div className="profile_page_detail_top">
              <div className="avatar_name_box">
                <img src={profile.picture} alt="" />
                <p style={{ fontSize: "44px", paddingLeft: "34px" }}>
                  {profile.name}
                </p>
              </div>
              <div className="avatar_name_button" onClick={handleLogout}>
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
                    <p>{profile.email}</p>{" "}
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
                  <h1>Tài khoản</h1>
                  <div className="inline_info">
                    <i class="fa-regular fa-paper-plane"></i>
                    <p>{profile.userType}</p>
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
