import React, { Component } from "react";
import programImg from "../../assets/images/program-loading.png";
import "../../sass/program.scss";

export default class Program extends Component {
  render() {
    return (
      <section className="program">
        <div className="program__info">
          <div className="program__top">
            <img
              src={programImg}
              alt="program__loading"
              className="program__top__img"
            />
            <h2 className="program__top__title">Программа обучения</h2>
            <p className="program__top__text">
              Больше 90% учеников прошли полный курс и смогли собрать свой
              первый компьютер
            </p>
          </div>
          <div className="program__bottom">
            <div className="program__left">
              <div className="program__card">
                <h3 className="program__card__h3">Неделя №1</h3>
                <h2 className="program__card__title">
                  Красивая часть курса, которая помогает в успехе
                </h2>
              </div>
              <div className="program__card">
                <h3 className="program__card__h3">Неделя №3</h3>
                <h2 className="program__card__title">
                  Красивая часть курса, которая помогает в успехе
                </h2>
              </div>
              <div className="program__card">
                <h3 className="program__card__h3">Неделя №5</h3>
                <h2 className="program__card__title">
                  Красивая часть курса, которая помогает в успехе
                </h2>
              </div>
              <div className="program__card">
                <h3 className="program__card__h3">Неделя №7</h3>
                <h2 className="program__card__title">
                  Красивая часть курса, которая помогает в успехе
                </h2>
              </div>
            </div>
            <div className="program__center"></div>
            <div className="program__right">
              <div className="program__box">
                <h3 className="program__box__h3">Неделя №2</h3>
                <h2 className="program__box__title">
                  Красивая часть курса, которая помогает в успехе
                </h2>
              </div>
              <div className="program__box">
                <h3 className="program__box__h3">Неделя №4</h3>
                <h2 className="program__box__title">
                  Красивая часть курса, которая помогает в успехе
                </h2>
              </div>
              <div className="program__box">
                <h3 className="program__box__h3">Неделя №6</h3>
                <h2 className="program__box__title">
                  Красивая часть курса, которая помогает в успехе
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
