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

  const addHandler = () => {
    let title = document.getElementById("title").value;
    let address = document.getElementById("address").value;
    let star = document.getElementById("star").value;
    let point = document.getElementById("point").value;
    let image = document.getElementById("image").value;

    if (title == "" || address == "")
      alert("لطفا تمامی اطلاعات رستوران را وارد کنید");
    else {
      if (window.confirm("آیا از ایجاد این رستوران مطمئن هستید؟")) {
        axios
          .post(
            url,
            JSON.stringify({
              title,
              address,
              star,
              point,
              image,
              goal: "add",
            })
          )
          .then((res) => {
            alert(res.data);
            updateHandler();
          });
      }
    }
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
              <input id="title" placeholder="نام رستوران" />
              <i className="fa fa-spoon"></i>
            </div>
            <div>
              <textarea id="address" placeholder="آدرس رستوران"></textarea>
              <i className="fa fa-map"></i>
            </div>
            <div>
              <select id="star">
                <option selected value="5">
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="0">0</option>
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
                  id="point"
                />
              </div>
              <label>
                امتیاز: <span id="pointLabel">50</span>
              </label>
              <i className="fa fa-money"></i>
            </div>
            <div>
              <form
                action="restaurant.php"
                method="post"
                enctype="multipart/form-data"
              >
                <input type="file" id="image" />
              </form>
              <label>تصویر</label>
              <i className="fa fa-picture-o"></i>
            </div>
            <button onClick={addHandler}>افزودن</button>
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
                key={res.id}
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
                key={res.id}
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
