import React from "react";
import './PrivacyAccept.scss'

const PrivacyAccept:React.FC = () => {
  return (
    <label htmlFor="privacy" className="privacy">
      <input type="checkbox" id="privacy" />
      <span>
        Отправляя данные я соглашаюсь с{" "}
        <a href="">Условиями конкурса</a> и <a href="">Политикой обработки данных</a>
      </span>
    </label>
  );
};

export default PrivacyAccept;
