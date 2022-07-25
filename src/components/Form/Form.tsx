import React from "react";
import Button from "../Button/Button";
import PrivacyAccept from "../PrivacyAccept/PrivacyAccept";
import "./Form.scss";

const Form: React.FC = () => {
  return (
    <article className="form">
      <form action="#" method="post">
        <h2 className="form__title title">
          Зарегистрируйтесь, чтобы участвовать
        </h2>
        <input type="text" placeholder="ФИО ребёнка" />
        <input type="text" placeholder="Дата рождения" />
        <input type="text" placeholder="Город" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <PrivacyAccept/>
        <Button key={3} content="Участвовать" />
      </form>
    </article>
  );
};

export default Form;
