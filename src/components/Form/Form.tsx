import axios from "axios";
import React from "react";
import Button from "../Button/Button";
import PrivacyAccept from "../PrivacyAccept/PrivacyAccept";
import "./Form.scss";

const initialData = {
  name: "",
  birthDate: "",
  city: "",
  email: "",
  password: "",
};

const Form: React.FC = () => {
  const [formData, setFormData] = React.useState(initialData);

  function handleChange(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function submit(e: any) {
    e.preventDefault();
    axios
      .post("/api/register", formData)
      .then(() => {
        alert("Успешно зарегестрированы");
        setFormData(initialData);
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  return (
    <article className="form">
      <form action="#" method="post">
        <h2 className="form__title title">
          Зарегистрируйтесь, чтобы участвовать
        </h2>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="ФИО ребёнка"
        />
        <input
          onChange={handleChange}
          type="text"
          name="birthDate"
          value={formData.birthDate}
          placeholder="Дата рождения (дд.мм.гггг)"
        />
        <input
          onChange={handleChange}
          type="text"
          name="city"
          value={formData.city}
          placeholder="Город"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={formData.password}
          placeholder="Пароль"
        />
        {/*<PrivacyAccept />*/}
        <Button submit={submit} key={3} content="Участвовать" />
      </form>
    </article>
  );
};

export default Form;
