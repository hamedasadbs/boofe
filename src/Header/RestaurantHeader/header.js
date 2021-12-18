/*CSS*/
import style from "./header.module.scss";
/*ASSETS*/
import logo from "../../Images/logo.png";
/*CHILD-COMPONENTS*/
import { Search } from "../Search/search";

export const RestaurantHeader = () => (
  <div className={style.header}>
    <div className={style.account}>
      <img src={logo} alt="logo" />
      <h1>حامد اسداللهی</h1>
      <i className="fa fa-user"></i>
    </div>
    <Search />
  </div>
);
