import style from "./dropdown.module.scss";

const Dropdown = () => {
  return (
    <article className={style.dropdown}>
        <i class="downArrow fa fa-angle-down"></i>
    </article>
  );
};

export default Dropdown;
