/*INNER-COMPONENTS*/
import { Link } from "react-router-dom";
/*CSS*/
import style from "./header.module.scss";
/*ASSETS*/
import logo from "../../Images/logo.png";
/*CHILD-COMPONENTS*/
import { Search } from "../Search/search";

export const HomeHeader = (props) => (
  <div id="home" className={style.header}>
    <Link className={style.account} to="/sign">
      <h1>{props.token}</h1>
      <i className="fa fa-user"></i>
    </Link>
    <div className={style.logo}>
      <Link to="/home">
        <img src={logo} alt="logo" />
        <h1>بوفه</h1>
      </Link>
    </div>
    <Search />
  </div>
);
