/*INNER-COMPONENTS*/
import axios from "axios";
import { useEffect, useState } from "react";
/*CSS*/
import style from "./restaurants.module.scss";
/*CHILD-COMPONENTS*/
import { Restaurant } from "./Restaurant/restaurant";

export const Restaurants = () => {
  const url = "http://localhost/boofe/restaurants.php";
  const [totalRestaurants, setTotalRestaurants] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setTotalRestaurants(res.data));
  }, []);

  return (
    <div className={style.restaurants}>
      <main>
        {totalRestaurants.map((res, index) => (
          <Restaurant
            img={res.image}
            stars={res.star}
            points={res.point}
            address={res.address}
            title={res.title}
            index={index}
            key={index}
          />
        ))}
      </main>
    </div>
  );
};
