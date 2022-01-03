/*INNER-COMPONENTS*/
import axios from "axios";
/*INNER-COMPONENTS*/
import { useState } from "react";
/*CSS*/
import style from "./restaurant.module.scss";

export const AdminRestaurant = (props) => {
  const url = "http://localhost/boofe/restaurants.php";
  const [inEdit, setInEdit] = useState(false);

  const deleteHandler = () => {
    if (window.confirm("آیا از حذف این رستوران مطمئن هستید؟")) {
      let id = props.id;
      axios
        .post(
          url,
          JSON.stringify({
            id,
            goal: "delete",
          })
        )
        .then((res) => {
          alert(res.data);
          props.update();
        });
    }
  };

  const editHandler = () => {
    if (inEdit) setInEdit(false);
    else setInEdit(true);
  };

  const saveEditHandler = () => {
    let id = props.id;
    let title = document.getElementById("title").value;
    let address = document.getElementById("address").value;

    if (title == "") title = props.title;
    if (address == "") address = props.address;

    axios
      .post(
        url,
        JSON.stringify({
          id,
          title,
          address,
          goal: "update",
        })
      )
      .then((res) => {
        alert(res.data);
        props.update();
        editHandler();
      });
  };

  return (
    <>
      <section className={style.restaurant}>
        <img src={`/Images/Restaurants/${props.img}`} alt="restaurant" />
        {inEdit ? (
          <>
            <h1>
              <input id="title" placeholder={props.title} />
            </h1>
            <div className={style.stars}>
              {[...Array(parseInt(props.stars))].map((x) => (
                <i className={`fa fa-star ${style.starOn}`}></i>
              ))}
              {[...Array(5 - parseInt(props.stars))].map((x) => (
                <i className={`fa fa-star ${style.starOff}`}></i>
              ))}
              <div className={style.point}>{props.points}</div>
            </div>
            <h2>
              <textarea id="address" placeholder={props.address}></textarea>
            </h2>
            {props.delete && (
              <button className={style.delete} onClick={deleteHandler}>
                حذف
              </button>
            )}
            {props.edit && (
              <div className={style.btn}>
                <button className={style.save} onClick={saveEditHandler}>
                  ذخیره تغییرات
                </button>
                <button className={style.cancel} onClick={editHandler}>
                  لغو کردن
                </button>
              </div>
            )}
          </>
        ) : (
          <>
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
            {props.delete && (
              <button className={style.delete} onClick={deleteHandler}>
                حذف
              </button>
            )}
            {props.edit && (
              <button className={style.edit} onClick={editHandler}>
                ویرایش
              </button>
            )}
          </>
        )}
      </section>
    </>
  );
};
