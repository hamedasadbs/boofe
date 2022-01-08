/*INNER-COMPONENTS*/
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
/*CSS*/
import style from "./header.module.scss";
/*ASSETS*/
import logo from "../../Images/logo.png";
/*CHILD-COMPONENTS*/
import { Search } from "../Search/search";

export const HomeHeader = () => {
  const [username, setUsername] = useState("");

  const getCookie = (cName) => {
    const nameString = cName + "=";

    const value = document.cookie.split("; ").filter((item) => {
      return item.includes(nameString);
    });

    if (value.length) {
      return value[0].substring(nameString.length, value[0].length);
    } else {
      return "";
    }
  };

  const checkStation = () => {
    setUsername(getCookie("username"));
  };

  useEffect(() => {
    checkStation();
  }, []);

  const setCookie = (cName, cValue, minutes) => {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires;
  };

  const logoutHandler = () => {
    if (window.confirm("آیا از حساب خود خارج می شوید؟")) {
      setCookie("username", "", -100);
      checkStation();
    }
  };
  return (
    <div id="home" className={style.header}>
      {username ? (
        <div className={style.account} onClick={logoutHandler}>
          <h1>{username}</h1>
          <i className="fa fa-user"></i>
        </div>
      ) : (
        <Link className={style.account} to="/sign">
          <h1>حساب کاربری</h1>
          <i className="fa fa-user"></i>
        </Link>
      )}
      <div className={style.logo}>
        <Link to="/home">
          <img src={logo} alt="logo" />
          <h1>بوفه</h1>
        </Link>
      </div>
      <Search />
    </div>
  );
};
