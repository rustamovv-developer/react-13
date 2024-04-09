import React, { Component } from "react";
import "../../sass/start.scss";
import startImg from "../../assets/images/start-img.png";

export default class Start extends Component {
  render() {
    return (
      <section className="start">
        <div className="container">
          <div className="start__top">
            <button className="start__btn">Заказать курс</button>
            <div className="start__center">
              <div className="start__exam">
                <h3 className="start__h3">Учеников всего:</h3>
                <h2 className="start__title">200</h2>
              </div>
              <div className="start__exam">
                <h3 className="start__h3">Успешно закончили курс:</h3>
                <h2 className="start__title">190</h2>
              </div>
            </div>
            <div className="start__end">
              <div className="start__box">
                <h3 className="start__h3">Заработано учениками:</h3>
                <h2 className="start__title start__top__title">400 000₽</h2>
              </div>
              <div className="start__colors">
                <div className="start__pink"></div>
                <div className="start__white"></div>
              </div>
              <div className="start__old">
                <h3 className="start__h3">0</h3>
                <h3 className="start__h3">1 000 000₽</h3>
              </div>
            </div>
          </div>
          <div className="start__bottom">
            <img
              src={startImg}
              alt="start-img"
              className="start__bottom__img"
            />
            <div className="start__bottom__box">
              <h2 className="start__bottom__title">Чем мы занимаемся?</h2>
              <p className="start__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                neque, dignissim et feugiat elit augue in suspendisse egestas.
                Dictum vestibulum mi et sed nunc, orci fermentum vestibulum,
                morbi. Et neque, adipiscing sapien sem senectus praesent aenean
                consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem
                felis sed interdum feugiat mattis elit, sollicitudin. Quam
                pharetra rhoncus risus, cursus id elementum aliquet. Nullam
                turpis arcu malesuada arcu interdum placerat nisi, lobortis.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
