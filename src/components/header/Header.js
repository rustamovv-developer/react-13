import React, { Component } from "react";
import Nav from "../nav/Nav";
import "../../sass/header.scss";

export default class extends Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <div className="container">
          <div className="header__info">
            <h2 className="header__title">
              Первый курс по компьютерной сборке
            </h2>
            <div className="header__box">
              <div className="header__card">
                <h3 className="header__h3">18</h3>
                <p className="header__text">Дней</p>
              </div>
              <div className="header__card">
                <h3 className="header__h3">18</h3>
                <p className="header__text">Часов</p>
              </div>
              <div className="header__card">
                <h3 className="header__h3">18</h3>
                <p className="header__text">Минут</p>
              </div>
              <div className="header__card">
                <h3 className="header__h3">18</h3>
                <p className="header__text">Секунд</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
