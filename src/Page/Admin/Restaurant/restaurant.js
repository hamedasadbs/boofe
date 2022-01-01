/*INNER-COMPONENTS*/
import { useState } from "react";
/*CSS*/
import style from "./restaurant.module.scss";

export const AdminRestaurant = (props) => {
  const [inEdit, setInEdit] = useState(false);

  const deleteHandler = () => {
    if (window.confirm("آیا از حذف این رستوران مطمئن هستید؟")) {
      alert("با موفقیت حذف شد");
    }
  };

  const editHandler = () => {
    if (inEdit) setInEdit(false);
    else setInEdit(true);
  };

  const saveEditHandler = () => {
    alert("با موفقیت ذخیره شد");
  };

  return (
    <>
      <section className={style.restaurant}>
        <img src={props.img} alt="restaurant" />
        {inEdit ? (
          <>
            <h1>
              <input placeholder={props.title} />
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
              <textarea placeholder={props.address}></textarea>
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
