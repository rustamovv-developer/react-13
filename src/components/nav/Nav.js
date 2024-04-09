import React, { Component } from "react";
import img from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../../sass/nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__info">
          <img src={img} alt="logo" className="nav__img" />
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to={"#"}>
                Главная
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"#"}>
                Курсы
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"#"}>
                Расписание
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"#"}>
                Преподаватели
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"#"}>
                Рассылка
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"#"}>
                Контакты
              </Link>
            </li>
          </ul>
          <button className="nav__btn">Зайти в кабинет</button>
        </div>
      </nav>
    );
  }
}
