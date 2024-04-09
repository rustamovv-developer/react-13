import React, { Component } from "react";
import workImg1 from "../../assets/images/work-1.png";
import workImg2 from "../../assets/images/work-2.png";
import workImg3 from "../../assets/images/work-3.png";
import "../../sass/work.scss";

export default class Work extends Component {
  render() {
    return (
      <section className="work">
        <h2 className="work__h2">Получите профессию прямо сейчас</h2>
        <div className="container">
          <div className="work__box">
            <div className="work__card">
              <img src={workImg1} alt="work__img" className="work__img" />
              <h2 className="work__title">
                Только практические навыки в работе
              </h2>
              <p className="work__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </div>
            <div className="work__card">
              <img src={workImg2} alt="work__img" className="work__img" />
              <h2 className="work__title">
                Работа на самом современном оборудовании
              </h2>
              <p className="work__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </div>
            <div className="work__card">
              <img src={workImg3} alt="work__img" className="work__img" />
              <h2 className="work__title">
                Сертификация по окончании обучения
              </h2>
              <p className="work__text">
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
