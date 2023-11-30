import React from "react";
import "../css/Newsletter_page.css";
import Footer from "../components/Footer";

export default function Newsletter_page() {
  return (
    <>
    <Navigation />
      <div className="landing_newsletter">
        <div className="" id="taonewsletter">
          <img
            src="https://s3-alpha-sig.figma.com/img/b656/fe7d/619f103cd4beec52d3d969d110a52a33?Expires=1697414400&Signature=no55heBZjmb3jEtJz2zWNkvDD8WpvgZFLQg0F2cwZfYiYKbr1qMQC41H94f-PSbgHOUJcpktPAX8eFRad8yQSqcjR~6N3w2F3S5NwCXyxhsv~ydQnOalWlp8q-BbhTcwFav57CYk-kjXioUwyj4gS81uX96h2DR9Ss5G1R6JHhn8YO8HGxSCjEfvZa57zx~oH3wq2iaH2~5UQUW148WH6qfBkgcyhwBuhQE9cAMmsQxd69SGZAWilV7Y2kGsC-sVA1QZu1EyIf~dbicRx8qQ-fin~CTiWFtzIMpyC97gJDOyYjJzqVYnH4sEQcrvALA7kx0CN2AIhSaPLhEpo8CV-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="newsletter_page_top_titlesection">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "68px",
                marginBottom: "0px",
                width: "700px",
              }}
            >
              Bạn có muốn mail trở nên khác biệt?
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#858585",
                marginTop: "12px",
                width: "500px",
              }}
            >
              Tùy biến email gửi đi theo cách riêng của bạn với những mẫu
              newsletter sáng tạo.
            </p>
            <div
              className="button"
              id="button_dangkyngay"
              style={{ height: "50px", padding: "6px" }}
            >
              Tạo newsletter
            </div>
          </div>
          <div className=" "></div>
        </div>

        <div className="landing_newsletter_content">
          <div className="landing_newsletter_content_title">
            <div
              className="landing_section"
              style={{ paddingTop: "60px", paddingBottom: "60px" }}
            >
              <h1
                className="landing_cv_section_title"
                style={{ width: "600px" }}
              >
                Tạo newsletter riêng cho mail của bạn{" "}
              </h1>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#858585",
                  width: "560px",
                  textAlign: "center",
                  margin: "unset",
                }}
              >
                Chúng tôi cung cấp đa dạng các mẫu newsletter để tối ưu hóa lựa
                chọn của người dùng
              </p>
            </div>
            <div className="landing_newsletter_section_choosingbar">
              <div
                className="choosingbar_title_newsletter"
                id="choosingbar_title_active"
              >
                Miễn phí{" "}
              </div>
              <div className="choosingbar_title_newsletter">Trả phí</div>
            </div>
          </div>
          <div
            className="landing_newsletter_section_img"
            style={{ paddingBottom: "100px", paddingTop: "80px" }}
          >
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://i.pinimg.com/564x/79/68/c5/7968c5e2b9b65d5d3b217b48754a06fe.jpg"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://i.pinimg.com/564x/13/99/30/1399308c95012e3c1086863e4783ef1f.jpg"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://i.pinimg.com/564x/a8/f2/9c/a8f29c2913bc3688cb7a6ee266ca89a2.jpg"
                alt=""
              />
            </div>

            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://i.pinimg.com/736x/71/43/a2/7143a29558762e043e68f7b41b57dc47.jpg"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://i.pinimg.com/564x/b5/31/ba/b531baa4b9e41e8074b9dd31b291d5a5.jpg"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://i.pinimg.com/564x/96/f8/3b/96f83bff06a0f832a52eabc87d77d1c2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
