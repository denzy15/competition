import React from "react";
import Button from "../Button/Button";
import PrivacyAccept from "../PrivacyAccept/PrivacyAccept";
import "./Subscribe.scss";

const Subscribe: React.FC = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__body">
        <h2 className="subscribe__title title">
          Подпишись на нашу рассылку
        </h2>
        <p className="subscribe__text text " style={{color: 'white'}}>
          Обещаем присылать только самое важное и интересное {":)"}
        </p>
        <div className="subscribe__form">
          <input type="email" placeholder="Email" />
          <Button key={4} content="Отправить" />
        </div>
        <PrivacyAccept />
      </div>
    </div>
  );
};

export default Subscribe;
