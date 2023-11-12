import React from 'react'

export default function Mail_content({ mail }) {
  return (
        <div className="content_mail">
        <div className="top">
          <div className="email_mail_section_content_avatar">
            <img
              src="https://w.wallhaven.cc/full/1p/wallhaven-1pd1o9.jpg"
              alt=""
            />
          </div>
          <div className="title_container">
            <div className="email_mail_section_content_name">
              <h2 style={{ margin: "unset" }}>{mail.subject}</h2>
              <p style={{ margin: "unset", color: "#B1B1B1" }}>
                {mail.sentEmails?.join(", ")}
              </p>
            </div>
            <div className="email_mail_section_content_time">
              <i className="fa-regular fa-star"></i>
              <p>10:00 AM</p>
            </div>
          </div>
        </div>

        <div className="email_message">
          {mail.text}
        </div>
      </div>
  )
}
