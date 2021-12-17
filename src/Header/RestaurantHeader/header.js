import style from "./header.module.scss";

import logo from "../../Images/logo.png";

import Search from "../Search/search";

const Header = () => (
  <div className={style.header}>
    <div className={style.account}>
      <img src={logo} alt="logo" />
      <h1>حامد اسداللهی</h1>
      <i className="fa fa-user"></i>
    </div>
    <Search />
  </div>
);

export default Header;
