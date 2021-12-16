import style from "./restaurants.module.scss";
import Restaurant from "./Restaurant/restaurant";

const Restaurants = () => {
  return (
    <div className={style.restaurants}>
      <main>
        <Restaurant
          stars="2"
          points="50"
          address="خیابان اول"
          title="رستوران اول"
          big
        />
        <Restaurant
          stars="3"
          points="90"
          address="خیابان دوم"
          title="رستوران دوم"
        />
        <Restaurant
          stars="5"
          points="15"
          address="خیابان سوم"
          title="رستوران سوم"
        />
        <Restaurant
          stars="0"
          points="45"
          address="خیابان چهارم"
          title="رستوران چهارم"
        />
        <Restaurant
          stars="1"
          points="65"
          address="خیابان پنجم"
          title="رستوران پنجم"
          big
        />
        <Restaurant
          stars="2"
          points="32"
          address="خیابان ششم"
          title="رستوران ششم"
        />
        <Restaurant
          stars="3"
          points="50"
          address="خیابان هفتم"
          title="رستوران هفتم"
        />
        <Restaurant
          stars="4"
          points="80"
          address="خیابان هشتم"
          title="رستوران هشتم"
        />
      </main>
    </div>
  );
};

export default Restaurants;
