/*INNER-COMPONENTS*/
import { useEffect, useState } from "react";
/*CSS*/
import style from "./qas.module.scss";

export const QAs = () => {
  const [scrollUp, setScrollUp] = useState(false);

  const scroller = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };
  useEffect(() => {
    scroller();
  }, []);
  const scrollHandler = () => {
    scroller();
  };

  window.addEventListener(
    "scroll",
    function () {
      if (window.pageYOffset > 1200) setScrollUp(true);
      else setScrollUp(false);
    },
    false
  );

  return (
    <article id="qa" className={style.qas}>
      <h1>پرسش و پاسخ های متداول</h1>
      <div className={style.qa}>
        <section>
          <h1>چرا از بوفه خرید کنیم؟</h1>
          <p>
            بوفه این امکان را برای شما فراهم می آورد تا رستورا نهای اطرافتان را
            به راحتی ببینید و با مشاهده منو های عکس دار آنها غذای مورد علاقه تا
            را را به راحتی سفارش دهید و درب منزل و یا محل کارتان تحویل بگیرید
          </p>
        </section>
        <i className="fa fa-question-circle-o"></i>
      </div>
      <div className={style.qa}>
        <section>
          <h1>چرا از بوفه خرید کنیم؟</h1>
          <p>
            بوفه این امکان را برای شما فراهم می آورد تا رستورا نهای اطرافتان را
            به راحتی ببینید و با مشاهده منو های عکس دار آنها غذای مورد علاقه تا
            را را به راحتی سفارش دهید و درب منزل و یا محل کارتان تحویل بگیرید
          </p>
        </section>
        <i className="fa fa-question-circle-o"></i>
      </div>
      <div className={style.qa}>
        <section>
          <h1>چرا از بوفه خرید کنیم؟</h1>
          <p>
            بوفه این امکان را برای شما فراهم می آورد تا رستورا نهای اطرافتان را
            به راحتی ببینید و با مشاهده منو های عکس دار آنها غذای مورد علاقه تا
            را را به راحتی سفارش دهید و درب منزل و یا محل کارتان تحویل بگیرید
          </p>
        </section>
        <i className="fa fa-question-circle-o"></i>
      </div>
      <a href="#home">
        <i
          onClick={scrollHandler}
          {...(scrollUp
            ? { className: `fa fa-angle-double-up ${style.scrollUpActive}` }
            : {
                className: `fa fa-angle-double-up ${style.scrollUpNotActive}`,
              })}
        ></i>
      </a>
    </article>
  );
};
