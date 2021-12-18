/*CSS*/
import style from "./restaurants.module.scss";
/*CHILD-COMPONENTS*/
import { Restaurant } from "./Restaurant/restaurant";
/*ASSETS*/
import resPhoto1 from "../../Images/res1.jpg";
import resPhoto2 from "../../Images/res2.jpg";
import resPhoto3 from "../../Images/res3.jpg";
import resPhoto4 from "../../Images/res4.jpg";
import resPhoto5 from "../../Images/res5.jpg";
import resPhoto6 from "../../Images/res6.jpg";
import resPhoto7 from "../../Images/res7.jpg";

export const Restaurants = () => (
  <div className={style.restaurants}>
    <main>
      <Restaurant
        img={resPhoto1}
        stars="2"
        points="50"
        address="خیابان اول"
        title="رستوران اول"
        big
      />
      <Restaurant
        img={resPhoto2}
        stars="3"
        points="90"
        address="خیابان دوم"
        title="رستوران دوم"
      />
      <Restaurant
        img={resPhoto3}
        stars="5"
        points="15"
        address="خیابان سوم"
        title="رستوران سوم"
      />
      <Restaurant
        img={resPhoto4}
        stars="0"
        points="45"
        address="خیابان چهارم"
        title="رستوران چهارم"
      />
      <Restaurant
        img={resPhoto5}
        stars="1"
        points="65"
        address="خیابان پنجم"
        title="رستوران پنجم"
        big
      />
      <Restaurant
        img={resPhoto6}
        stars="2"
        points="32"
        address="خیابان ششم"
        title="رستوران ششم"
      />
      <Restaurant
        img={resPhoto7}
        stars="3"
        points="50"
        address="خیابان هفتم"
        title="رستوران هفتم"
      />
    </main>
  </div>
);
