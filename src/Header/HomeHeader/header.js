import { useState } from "react";

import style from "./header.module.scss";

import logo from "../../Images/logo.png";

const Header = () => {
  const [firstType, setFirstType] = useState(true);
  const [secondType, setSecondType] = useState(false);

  function firstTypeHandler() {
    setFirstType(true);
    setSecondType(false);
  }

  function secondTypeHandler() {
    setFirstType(false);
    setSecondType(true);
  }

  return (
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
      <nav>
        <div className={style.tabs}>
          <button
            {...(secondType
              ? { className: style.activeTab }
              : { className: style.notActiveTab })}
            onClick={secondTypeHandler}
          >
            نوع دوم
          </button>
          <button
            {...(firstType
              ? { className: style.activeTab }
              : { className: style.notActiveTab })}
            onClick={firstTypeHandler}
          >
            نوع اول
          </button>
        </div>
        <div className={style.search}>
          <button>
            جست و جو<i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="دنبال چی ای؟" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
