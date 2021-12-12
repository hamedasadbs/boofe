import style from "./header.module.scss";

import logo from "../Images/logo.png";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
};

export default Header;
