import React, { useEffect, useState } from "react";
import "../css/Profile_page.css";
import Footer from "../components/Footer";
import axios from "../apis/axios";
import { useLogout } from "../hooks/use-logout";
import { useNavigate } from "react-router-dom";

export default function Profile_page() {
  const [ profile, setProfile ] = useState({})
  const { logout } = useLogout()
  const navigate = useNavigate()

  const handleGetProfile = async() => {
    try {
      const result = await axios.get("user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      
      if (result) {
        setProfile(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  useEffect(()=>{
    handleGetProfile()
  }, [])

  return (
    <>
      <div className="profile_page">
        <div className="profile_page_container">
          <div className="profile_page_sidebar"></div>
          <div className="profile_page_detail">
            <div className="profile_page_detail_top">
              <div className="avatar_name_box">
                <img
                  src={profile.picture}
                  alt=""
                />
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
