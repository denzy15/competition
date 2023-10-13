import React from "react";
import "./Price.scss";
import vkLogo from "../../media/icons/vk-2.svg";
import okLogo from "../../media/icons/odnkl.svg";

const Price: React.FC = () => {
  return (
    <article className="price">
      <div className="price__body">
        <div className="price__text">Стоимость участия:</div>
        <h2 className="price__title">1490 Тг</h2>
        <div className="price__text">При наличии репоста в соцсетях {":)"}</div>
      </div>
      <div className="price__discount">
        <span>Получить скидку:</span>
        <a href="https://vk.com">
          <img src={vkLogo} alt="" />
        </a>
        <a href="https://ok.ru/">
          <img src={okLogo} alt="" />
        </a>
      </div>
    </article>
  );
};

export default Price;
