import React, { useState, useEffect } from "react";
import "../css/Mail_page.css";
import { Link } from "react-router-dom";
import axios from "../apis/axios";
import Mail_content from "./Mail_content";
import Navigation from "../components/Navigation";

export default function Mail_page() {
  const [ mails, setMails ] = useState([])
  const [ email, setEmail ] = useState()

  const handleGetMails = async() => {
    try {
      const mailList = await axios.get('email/get-mails', {
        headers: {
          Authorization: "Bearer " +localStorage.getItem('accessToken')
        }
      })
      
      if (mailList) {
        setMails(mailList.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    handleGetMails()
  }, [])

  return (
    <>
    <Navigation />
      <div
        className="landing_email_container"
        style={{ backgroundColor: "#F6F7F9", paddingLeft: "25px" }}
      >
        <div className="email_sidebar">
          <div className="email_sidebar_section" id="create_button">
            <i className="fa-solid fa-plus"></i>Soạn thư
          </div>
          <div className="email_sidebar_section" id="active_section">
            <i className="fa-regular fa-envelope"></i>
            <p style={{ width: "92px" }}>Hộp thư đến</p>
            <div className="notice_number">99+</div>
          </div>
          <div className="email_sidebar_section">
            <i className="fa-regular fa-star"></i>
            <p>Quan trọng</p>
          </div>
          <div className="email_sidebar_section">
            <i className="fa-regular fa-paper-plane"></i>
            <p>Đã gửi</p>
          </div>
          <div className="email_sidebar_section">
            <i className="fa-solid fa-triangle-exclamation"></i> <p>Spam</p>
          </div>
          {/* <div className="email_sidebar_section">
            <p>Trò chuyện</p>
          </div>
          <div className="email_sidebar_section">
            <p>Nhóm</p>
          </div> */}
          <div className="email_sidebar_section" id="logout_section">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <p>Đăng xuất</p>
          </div>
        </div>
        <div className="email_mail_box_container">
          <div className="email_mail_box">
            {
              mails.map(mail=>(
              <div className="email_mail_section_content"  onClick={()=>setEmail(mail)}>
              <div className="email_mail_section_content_avatar">
                <img
                  src="https://w.wallhaven.cc/full/1p/wallhaven-1pd1o9.jpg"
                  alt=""
                />
              </div>
              <div className="mail_content">
                <div className="mail_content_title">
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "large",
                    }}
                  >
                    {mail.subject}
                  </h2>
                  <div style={{ display: "flex", columnGap: "6px" }}>
                    <i className="fa-regular fa-star"></i>
                    <p>10:00 AM</p>
                  </div>
                </div>
                <h5>{mail.sentEmails.join(", ")}</h5>
                <p
                  className=""
                  style={{
                    height: "90px",
                    overflow: "hidden",
                  }}
                >
                  {mail.text}
                </p>
              </div>
            </div>))
            }
          </div>
        </div>


        <div className="email_mail_content">
      <div className="content_mail_container">
        {email && <Mail_content mail={email} />}
        </div>
        </div>
      </div>
    </>
  );
}
