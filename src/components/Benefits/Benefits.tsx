import React from "react";
import "./Benefits.scss";
import Benefit from "../Benefit/Benefit";
import starImg from "../../media/images/benefits/star.png";
import winnerImg from "../../media/images/benefits/winner.png";
import certifImg from "../../media/images/benefits/certification.png";
import giftImg from "../../media/images/benefits/gift.png";
import emailImg from "../../media/images/benefits/email.png";
import publishImg from "../../media/images/benefits/publish.png";

const benefitsState = [
  {
    id: 1,
    text: "Шанс занять 1 место — в вашем городе и по всей России",
    img: starImg,
    highlighted: "",
  },
  {
    id: 2,
    text: "Развитие самостоятельности + свободное время для родителей ;)",
    img: winnerImg,
    highlighted: "",
  },
  {
    id: 3,
    img: certifImg,
    text: "Персональный диплом в разных номинациях каждому участнику",
    highlighted: "",
  },
  {
    id: 4,
    text: "Призы и скидки для подписчиков и авторизованных пользователей",
    img: giftImg,
    highlighted: "",
  },
  {
    id: 5,
    text: "Бесплатный диплом на email — через 1 день после конкурса",
    img: emailImg,
    highlighted: "",
  },
  {
    id: 6,
    text: "Публикация работ победителей во ВКонтакте.",
    img: publishImg,
    highlighted: "Подписывайтесь!",
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <h2 className="benefits__title title">Для чего нужно участвовать</h2>
      <div className="benefits__row">
        {benefitsState.map((b) => (
          <Benefit
            key={b.id}
            img={b.img}
            text={b.text}
            highlighted={b.highlighted}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
