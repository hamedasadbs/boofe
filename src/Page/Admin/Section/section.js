/*INNER-COMPONENTS*/
import axios from "axios";
import { useEffect, useState } from "react";
/*CSS*/
import style from "./section.module.scss";
/*CHILD-COMPONENTS*/
import { AdminRestaurant } from "../Restaurant/restaurant";

export const AdminSection = (props) => {
  const url = "http://localhost/boofe/restaurants.php";
  const [totalRestaurants, setTotalRestaurants] = useState([]);

  const pointHandler = (e) => {
    document.getElementById("pointLabel").innerHTML = e.target.value;
  };

  const updateHandler = () => {
    axios.get(url).then((res) => setTotalRestaurants(res.data));
  };

  useEffect(() => {
    axios.get(url).then((res) => setTotalRestaurants(res.data));
  }, []);

  return (
    <section className={style.section}>
      {props.activeTab === "add" ? (
        <div className={style.admin}>
          <h1>افزودن رستوران جدید</h1>
          <main>
            <div>
              <input placeholder="نام رستوران" />
              <i className="fa fa-spoon"></i>
            </div>
            <div>
              <textarea placeholder="آدرس رستوران"></textarea>
              <i className="fa fa-map"></i>
            </div>
            <div>
              <select>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                <option>0</option>
              </select>
              <label>تعداد ستاره ها</label>
              <i className="fa fa-star"></i>
            </div>
            <div>
              <div className={style.slideContainer}>
                <input
                  onChange={pointHandler}
                  type="range"
                  min="0"
                  max="100"
                  className={style.slider}
                />
              </div>
              <label>
                امتیاز: <span id="pointLabel">50</span>
              </label>
              <i className="fa fa-money"></i>
            </div>
            <button>افزودن</button>
          </main>
        </div>
      ) : props.activeTab === "remove" ? (
        <div className={style.admin}>
          <h1>حذف رستوران</h1>
          <main>
            <div>
              <input placeholder="فیلتر بر اساس نام رستوران" />
              <i className="fa fa-filter"></i>
            </div>
          </main>
          <article>
            {totalRestaurants.map((res) => (
              <AdminRestaurant
                id={res.id}
                img={res.image}
                stars={res.star}
                points={res.point}
                address={res.address}
                title={res.title}
                update={updateHandler}
                delete
              />
            ))}
          </article>
        </div>
      ) : (
        <div className={style.admin}>
          <h1>ویرایش رستوران</h1>
          <main>
            <div>
              <input placeholder="فیلتر بر اساس نام رستوران" />
              <i className="fa fa-filter"></i>
            </div>
          </main>
          <article>
            {totalRestaurants.map((res) => (
              <AdminRestaurant
                id={res.id}
                img={res.image}
                stars={res.star}
                points={res.point}
                address={res.address}
                title={res.title}
                update={updateHandler}
                edit
              />
            ))}
          </article>
        </div>
      )}
    </section>
  );
};
