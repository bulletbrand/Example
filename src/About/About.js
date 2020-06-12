import React, { PureComponent } from 'react';
import logo from '../pictures/logo.jpg';
import './about.scss';

export default class About extends PureComponent {
  render() {
    return (
      <div className="about">
        <div className="about_inner">
          <div className="about_logo">
            <img src={logo} alt="woman" />
          </div>
          <div className="about_info">
            <h3>Вероника Ростова</h3>
            <p>Менеджер по продажам</p>
            <div className="about_info-describe">
              <span>
                Подберу для вас самые лучшие предложения.
                <br />
                Мои услуги абсолютно бесплатны
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

