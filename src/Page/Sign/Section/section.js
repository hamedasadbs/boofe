import style from "./section.module.scss";

const Section = (props) => (
  <section className={style.section}>
    {props.activeTab === "login" ? (
      <div className={style.login}>
        <h1>ورود</h1>
        <main>
          <div>
            <input placeholder="ایمیل یا شماره تلفن" />
            <i className="fa fa-user"></i>
          </div>
          <div>
            <input type="password" placeholder="رمز عبور" />
            <i className="fa fa-lock"></i>
          </div>
          <div className={style.forget}>
            <a href="/">نام کاربری را فراموش کرده ام</a>
          </div>
          <button>ورود</button>
        </main>
      </div>
    ) : (
      <div className={style.signup}>
        <h1>ثبت نام</h1>
        <main>
          <div>
            <input placeholder="نام کاربری" />
            <i className="fa fa-user"></i>
          </div>
          <div>
            <input placeholder="ایمیل یا شماره تلفن" />
            <i className="fa fa-envelope"></i>
          </div>
          <div>
            <input type="password" placeholder="رمز عبور" />
            <i className="fa fa-lock"></i>
          </div>
          <div>
            <input type="password" placeholder="تکرار رمز عبور" />
            <i className="fa fa-lock"></i>
          </div>
          <span className={style.terms}>
            قوانین را میپذیرم
            <input type="checkbox" />
          </span>
          <br />
          <button>ثبت نام</button>
        </main>
      </div>
    )}
  </section>
);

export default Section;
