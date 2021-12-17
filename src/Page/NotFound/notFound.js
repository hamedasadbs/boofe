import style from "./notFound.module.scss";
import nf from "../../Images/notFound.png";

const NotFound = () => (
  <section className={style.notFound}>
    <img src={nf} alt="notFound" />
    <h1>!متاسفانه صفحه مورد نظر یافت نشد</h1>
  </section>
);

export default NotFound;
