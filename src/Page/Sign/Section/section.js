import style from "./section.module.scss";

const Section = () => {
  return (
    <section className={style.section}>
      <div className={style.login}>
        <h1>ورود</h1>

        <main>
          <div className={style.loginUser}>
            <input placeholder="نام کاربری یا ایمیل" />
            <i className="fa fa-user"></i>
          </div>
          <div className={style.loginPass}>
            <input type="password" placeholder="رمز عبور" />
            <i className="fa fa-lock"></i>
          </div>
          <a href="/">نام کاربری را فراموش کرده ام</a>
          <button>ورود</button>
        </main>
      </div>
    </section>
  );
};

export default Section;
