import React from "react";
import "./Header.css";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";
import { ReactComponent as MyNetwork } from "../images/MyNetworkIcon.svg";
import { ReactComponent as JobsIcon } from "../images/JobsIcon.svg";
import { ReactComponent as MessagingIcon } from "../images/MessagingIcon.svg";
import { ReactComponent as NotificationIcon } from "../images/NotificationIcon.svg";
import { ReactComponent as WorkIcon } from "../images/WorkIcon.svg";
import { ReactComponent as ShowMore } from "../images/ShowMoreIcon.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://evergreenengineering.com/wp-content/uploads/2019/06/LinkedIn_logo_initials.png"
          alt="logo"
        />
        <div className="serch__form">
          <form>
            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" />
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__details">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__right__details">
          <MyNetwork />
          <p>My Network</p>
        </div>
        <div className="header__right__details">
          <JobsIcon />
          <p>Jobs</p>
        </div>
        <div className="header__right__details">
          <MessagingIcon />
          <p>Messaging</p>
        </div>
        <div className="header__right__details">
          <NotificationIcon />
          <p>Notification</p>
        </div>
        <div className="header__right__details">
          <WorkIcon />
          <div className="header__right__details__detail">
            <p>Work</p>
            <ShowMore />
          </div>
        </div>
        <p className="try">Try Premium Free for 1 Month</p>
      </div>
    </div>
  );
};

export default Header;
