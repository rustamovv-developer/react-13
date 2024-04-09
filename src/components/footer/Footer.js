import React, { Component } from "react";
import img1 from "../../assets/images/footer-1.png";
import img2 from "../../assets/images/footer-2.png";
import img3 from "../../assets/images/footer-3.png";
import img4 from "../../assets/images/footer-4.png";
import "../../sass/footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__info">
          <h2 className="footer__title">Статьи каждую неделю</h2>
          <p className="footer__text">
            Больше 90% учеников прошли полный курс и смогли собрать свой первый
            компьютер
          </p>
          <div className="footer__card">
            <input type="text" placeholder="E-mail" className="footer__input" />
            <button className="footer__btn"> Подписаться</button>
          </div>
          <div className="footer__box">
            <img src={img1} alt="footer__img" className="footer__img" />
            <img src={img2} alt="footer__img" className="footer__img" />
            <img src={img3} alt="footer__img" className="footer__img" />
            <img src={img4} alt="footer__img" className="footer__img" />
          </div>
          <p className="footer__text">Templates #18. More on Figma.info</p>
        </div>
      </footer>
    );
  }
}
