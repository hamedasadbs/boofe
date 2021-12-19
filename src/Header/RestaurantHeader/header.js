/*CSS*/
import style from "./header.module.scss";
/*ASSETS*/
import logo from "../../Images/logo.png";
/*CHILD-COMPONENTS*/
import { Search } from "../Search/search";

export const RestaurantHeader = () => (
  <div className={style.header}>
    <main>
      <div className={style.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <a href="/sign" className={style.account}>
        <h1>حامد اسداللهی</h1>
        <i className="fa fa-user"></i>
      </a>
    </main>
    <Search />
  </div>
);
