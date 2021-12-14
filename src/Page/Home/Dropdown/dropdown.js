import style from "./dropdown.module.scss";

const Dropdown = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <article className={style.dropdown}>
      <a href="#qa">
        <i className="downArrow fa fa-angle-down"></i>
      </a>
    </article>
  );
};

export default Dropdown;
