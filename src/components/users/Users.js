import React, { Component } from "react";
import usersImg from "../../assets/images/users-loading.png";
import user1 from "../../assets/images/user-1.png";
import user2 from "../../assets/images/user-2.png";
import user3 from "../../assets/images/user-3.png";
import "../../sass/users.scss";

export default class Users extends Component {
  render() {
    return (
      <section className="users">
        <div className="container">
          <div className="users__top">
            <img src={usersImg} alt="userImg" className="user__top__img" />
            <h2 className="users__top__title">Ваши преподаватели</h2>
          </div>
          <div className="users__bottom">
            <div className="users__card">
              <img src={user1} alt="user" className="users__bottom__img" />
              <h2 className="users__bottom__title">Дмитрий Иванов</h2>
              <h3 className="users__bottom__h3">Специалист по видеокартам</h3>
              <button className="users__bottom__btn">Биография</button>
            </div>
            <div className="users__card">
              <img src={user2} alt="user" className="users__bottom__img" />
              <h2 className="users__bottom__title">Дмитрий Иванов</h2>
              <h3 className="users__bottom__h3">Специалист по видеокартам</h3>
              <button className="users__bottom__btn">Биография</button>
            </div>
            <div className="users__card">
              <img src={user3} alt="user" className="users__bottom__img" />
              <h2 className="users__bottom__title">Дмитрий Иванов</h2>
              <h3 className="users__bottom__h3">Специалист по видеокартам</h3>
              <button className="users__bottom__btn">Биография</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
