import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import "./index.scss";
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-top">
            <div className="categories">
              <Link className="category">About us</Link>
              <Link className="category">Privacy</Link>
              <Link className="category">FAQ</Link>
              <Link className="category">Careers</Link>
            </div>
            <div className="social">
              <Link className="socials"> My Wishlist</Link>
              <Link className="socials">Track your order</Link>
              <div className="icons">
                <Link className="icons">
                  <FacebookOutlinedIcon />
                </Link>
                <Link className="icons">
                  <InstagramIcon />
                </Link>
                <Link className="icons">
                  <TwitterIcon />
                </Link>
                <Link className="icons">
                  <LinkedInIcon />
                </Link>
                <Link className="icons">
                  <YouTubeIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-bottom">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png"
                alt=""
              />
            </div>
            <div className="links">
              <Link className="sections" to="/">Home</Link>
              <Link className="sections" to="/Men">Men</Link>
              <Link className="sections" to="/Women">Women</Link>
              <Link className="sections" to="/Baby">Baby Collection</Link>
              <Link className="sections" to="/Pages">Pages</Link>
              <Link className="sections" to="/basket">Basket</Link>
              <Link className="sections" to="/add">Add</Link>
            </div>
            <div className="icon">
              <span><SearchIcon/></span>
              <span><Person2OutlinedIcon/></span>
              <span><ShoppingCartOutlinedIcon/></span>
            </div>
            <div className="burger">
              <MenuIcon/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
