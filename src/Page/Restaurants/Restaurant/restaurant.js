import style from "./restaurant.module.scss";
import photo from "../../../Images/restaurant.jpg";

const Restaurant = (props) => {
  return (
    <>
      {props.big ? (
        <section className={style.bigRestaurant}>
          <img src={photo} alt="restaurant" />
          <h1>{props.title}</h1>
          <div className={style.stars}>
            {[...Array(parseInt(props.stars))].map((x) => (
              <i className={`fa fa-star ${style.starOn}`}></i>
            ))}
            {[...Array(5 - parseInt(props.stars))].map((x) => (
              <i className={`fa fa-star ${style.starOff}`}></i>
            ))}
            <div className={style.point}>{props.points}</div>
          </div>
          <h2>{props.address}</h2>
          <div className={style.adds}>
            <div className={style.firstAdd}>شش ماه ضمانت</div>
            <div className={style.secondAdd}>صددرصد طبیعی</div>
          </div>
        </section>
      ) : (
        <section className={style.restaurant}>
          <img src={photo} alt="restaurant" />
          <h1>{props.title}</h1>
          <div className={style.stars}>
            {[...Array(parseInt(props.stars))].map((x) => (
              <i className={`fa fa-star ${style.starOn}`}></i>
            ))}
            {[...Array(5 - parseInt(props.stars))].map((x) => (
              <i className={`fa fa-star ${style.starOff}`}></i>
            ))}
            <div className={style.point}>{props.points}</div>
          </div>
          <h2>{props.address}</h2>
          <div className={style.adds}>
            <div className={style.firstAdd}>شش ماه ضمانت</div>
          </div>
        </section>
      )}
    </>
  );
};

export default Restaurant;
