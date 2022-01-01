/*CSS*/
import style from "./section.module.scss";
/*CHILD-COMPONENTS*/
import { AdminRestaurant } from "../Restaurant/restaurant";
/*ASSETS*/
import resPhoto1 from "../../../Images/res1.jpg";
import resPhoto2 from "../../../Images/res2.jpg";
import resPhoto3 from "../../../Images/res3.jpg";
import resPhoto4 from "../../../Images/res4.jpg";
import resPhoto5 from "../../../Images/res5.jpg";
import resPhoto6 from "../../../Images/res6.jpg";
import resPhoto7 from "../../../Images/res7.jpg";

export const AdminSection = (props) => {
  const pointHandler = (e) => {
    document.getElementById("pointLabel").innerHTML = e.target.value;
  };
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
              <i class="fa fa-money"></i>
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
            <AdminRestaurant
              img={resPhoto1}
              stars="2"
              points="50"
              address="خیابان اول"
              title="رستوران اول"
              delete
            />
            <AdminRestaurant
              img={resPhoto2}
              stars="3"
              points="90"
              address="خیابان دوم"
              title="رستوران دوم"
              delete
            />
            <AdminRestaurant
              img={resPhoto3}
              stars="5"
              points="15"
              address="خیابان سوم"
              title="رستوران سوم"
              delete
            />
            <AdminRestaurant
              img={resPhoto4}
              stars="0"
              points="45"
              address="خیابان چهارم"
              title="رستوران چهارم"
              delete
            />
            <AdminRestaurant
              img={resPhoto5}
              stars="1"
              points="65"
              address="خیابان پنجم"
              title="رستوران پنجم"
              delete
            />
            <AdminRestaurant
              img={resPhoto6}
              stars="2"
              points="32"
              address="خیابان ششم"
              title="رستوران ششم"
              delete
            />
            <AdminRestaurant
              img={resPhoto7}
              stars="3"
              points="50"
              address="خیابان هفتم"
              title="رستوران هفتم"
              delete
            />
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
            <AdminRestaurant
              img={resPhoto1}
              stars="2"
              points="50"
              address="خیابان اول"
              title="رستوران اول"
              edit
            />
            <AdminRestaurant
              img={resPhoto2}
              stars="3"
              points="90"
              address="خیابان دوم"
              title="رستوران دوم"
              edit
            />
            <AdminRestaurant
              img={resPhoto3}
              stars="5"
              points="15"
              address="خیابان سوم"
              title="رستوران سوم"
              edit
            />
            <AdminRestaurant
              img={resPhoto4}
              stars="0"
              points="45"
              address="خیابان چهارم"
              title="رستوران چهارم"
              edit
            />
            <AdminRestaurant
              img={resPhoto5}
              stars="1"
              points="65"
              address="خیابان پنجم"
              title="رستوران پنجم"
              edit
            />
            <AdminRestaurant
              img={resPhoto6}
              stars="2"
              points="32"
              address="خیابان ششم"
              title="رستوران ششم"
              edit
            />
            <AdminRestaurant
              img={resPhoto7}
              stars="3"
              points="50"
              address="خیابان هفتم"
              title="رستوران هفتم"
              edit
            />
          </article>
        </div>
      )}
    </section>
  );
};
