import React, { Component } from "react";
import brendsLoading from "../../assets/images/brend-loading.png";
import brendsImg from "../../assets/images/brend-img.png";
import "../../sass/brends.scss";

export default class Brends extends Component {
  render() {
    return (
      <section className="brends">
        <div className="container">
          <div className="brends__top">
            <img
              src={brendsLoading}
              alt="brendsLoading"
              className="brends__loading"
            />
            <h2 className="brends__title">Партнеры - топовые бренды</h2>
          </div>
          <div className="brends__bottom">
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__right brends__btm"
            />
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__right brends__left brends__btm"
            />
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__right brends__left brends__btm"
            />
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__left brends__btm"
            />
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__right"
            />
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__right brends__left"
            />
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__right brends__left"
            />
            <img
              src={brendsImg}
              alt="brends__img"
              className="brends__img brends__left "
            />
          </div>
        </div>
      </section>
    );
  }
}
