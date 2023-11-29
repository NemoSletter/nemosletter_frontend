import React from "react";
import Footer from "../components/Footer";
import "../css/CVMaker_page.css";
import { CVs } from "../data/ListofCV";
import { useState } from "react";

export default function CVMaker_page() {
  const [CV, setCV] = useState({});

  return (
    <>
      <div className="CVMaker_page_container">
        <h1>Danh sách các CV được ưa chuộng</h1>
        <div className="CVMaker_list">
          {CVs.map((cv) => (
            <a href="#popup1" id="openPopUp">
              <div className="CVMaker_card" onClick={() => setCV(cv)}>
                <img src={cv.img} alt="" />
                <div className="CVMaker_card_textbox">
                  <h2 style={{ color: "black" }}>{cv.name}</h2>
                  <p>{cv.club}</p>
                </div>
              </div>
            </a>
          ))}
          <div id="popup1" className="overlay">
            <div className="popup">
              <img src={CV.img} alt="" />
              <div className="popup_content">
                <p>{CV.name}</p>
                <div className="content">{CV.info}</div>
                <div className="popup_btn">
                  <a href="dowload" className="dowload">
                    <div>&times;Dowload</div>
                  </a>
                  <a href="#" className="close">
                    <div>&times;Close</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
