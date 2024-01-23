import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="txt">
              <h3>Subscribe Newsletter</h3>
              <p>Subscribe newsletter to get 5% on all products.</p>
            </div>
          </div>
          <div className="col-xl-5 col-sm-6 col-12">
            <div className="inp">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="media">
              <div className="facebook">
                <FacebookOutlinedIcon />
              </div>
              <div className="instagram">
                <InstagramIcon />
              </div>
              <div className="youtube">
                <YouTubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ borderTop: "1px solid gray", borderBottom: "1px solid gray" }}
      >
        <div className="row">
          <div className="col-xl-4 col-sm-6 col-12">
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png"
              alt=""
            />
          </div>
          <div className="col-xl-2 col-sm-6 col-12">
            <h4>Shop Men</h4>
            <p>Clothing Fashion</p>
            <p>Winter</p>
            <p>Summer</p>
            <p>Formal</p>
            <p>Casual</p>
          </div>
          <div className="col-xl-2 col-sm-6 col-12">
            <h4>Shop Women</h4>
            <p>Clothing Fashion</p>
            <p>Winter</p>
            <p>Summer</p>
            <p>Formal</p>
            <p>Casual</p>
          </div>
          <div className="col-xl-2 col-sm-6 col-12">
            <h4>Baby Collection</h4>
            <p>Clothing Fashion</p>
            <p>Winter</p>
            <p>Summer</p>
            <p>Formal</p>
            <p>Casual</p>
          </div>
          <div className="col-xl-2 col-sm-6 col-12">
            <h4>Qucik Links</h4>
            <p>Clothing Fashion</p>
            <p>Winter</p>
            <p>Summer</p>
            <p>Formal</p>
            <p>Casual</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            Copyright ©2024 All rights reserved | This template is made with by{" "}
            <FavoriteIcon /> Colorlib
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;