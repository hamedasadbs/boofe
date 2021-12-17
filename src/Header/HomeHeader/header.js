import style from "./header.module.scss";

import logo from "../../Images/logo.png";

import Search from "../Search/search";

const Header = () => (
  <div className={style.header}>
    <div className={style.account}>
      <h1>حامد اسداللهی</h1>
      <i className="fa fa-user"></i>
    </div>
    <div className={style.logo}>
      <a href="/home">
        <img src={logo} alt="logo" />
        <h1>بوفه</h1>
      </a>
    </div>
    <Search />
  </div>
);

export default Header;
