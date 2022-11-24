import {
  CheckOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./styles.scss";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <div className="footer__info">
          <div className="footer__info--details">
            <h3>
              About <span>LOCAL TOURIST</span>
            </h3>
            <p>
              The idea is to combine the motorbike phenomenon of the city with
              the beauty of Vietnamese women in our traditional outfit to
              international friends.{" "}
              <a href="https://www.facebook.com/profile.php?id=100009085743719">
                Read more about us.
              </a>
            </p>
            <div className="footer__info--details--icons">
              <a href="#">
                <FacebookOutlined />
              </a>
              <a href="#">
                <YoutubeOutlined />
              </a>
              <a href="#">
                <TwitterOutlined />
              </a>
            </div>
          </div>
          <div className="footer__info--details">
            <h3>
              Why choose <span>LOCAL TOURIST</span>
            </h3>
            <ul className="ul_1">
              <li>
                <CheckOutlined /> <span>Safety</span>{" "}
              </li>
              <li>
                <CheckOutlined /> <span>Truly local experiences</span>{" "}
              </li>
              <li>
                <CheckOutlined /> <span>Lots of fun</span>{" "}
              </li>
            </ul>
          </div>
          <div className="footer__info--details">
            <h3>Travel Tips</h3>
            <p>
              With an insight in Vietnam traveling & knowledge about the local
              culture, we provide some tips & information to help you know the
              ins and outs of travel in Vietnam
            </p>
            <ul className="ul_2">
              <li>Money talk – Vietnam travel guide</li>
              <li>Exciting things to do in Viet Nam</li>
              <li>Best street food in Viet Nam</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        {/* <div className="footer__contact">
          <h1> LOCAL TOURIST </h1>
          <p>
            <span> ĐỊA CHỈ : </span> 126 Xuân Thủy{" "}
          </p>

          <p>
            <span> TƯ VẤN VÀ ĐẶT DỊCH VỤ : </span> 0041000388783{" "}
          </p>

          <p>
            <span> EMAIL LIÊN HỆ : </span> nguyenkhoi180397@gmail.com{" "}
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
