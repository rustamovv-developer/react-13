import React, { Component } from "react";
import pcTopImg from "../../assets/images/start-loading.png";
import "../../sass/pc.scss";

export default class extends Component {
  render() {
    return (
      <section className="pc">
        <div className="container">
          <div className="pc__top">
            <div className="pc__top__start">
              <img src={pcTopImg} alt="pc-top-img" className="pt__top__img" />
              <h2 className="pc__top__title">Быстрый старт</h2>
            </div>
            <p className="pc__top__text">
              Больше 90% учеников прошли полный курс и смогли собрать свой
              первый компьютер
            </p>
          </div>
          <div className="pc__bottom">
            <div className="pc__titles">
              <h2 className="pc__bottom__title">100%</h2>
              <h2 className="pc__bottom__title">75%</h2>
              <h2 className="pc__bottom__title">50%</h2>
              <h2 className="pc__bottom__title">Итог</h2>
            </div>
            <div className="pc__box">
              <div className="pc__card-1"></div>
              <div className="pc__card-2"></div>
              <div className="pc__card-3"></div>
              <div className="pc__card-4"></div>
            </div>
            <div className="pc__texts">
              <p className="pc__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
              <p className="pc__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
              <p className="pc__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
              <p className="pc__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
