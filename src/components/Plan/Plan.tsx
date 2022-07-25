import React from "react";
import Step from "../Step/Step";
import './Plan.scss'

const planState = [
  {
    id: 1,
    text: "Зарегистрируйтесь на конкурс Здесь",
  },
  {
    id: 2,
    text: "Выполните все условия конкурса",
  },
  {
    id: 3,
    text: "Загрузите рисунок Здесь или в Личном кабинете",
  },
];

const Plan: React.FC = () => {
  return (
    <section className="plan">
      <h2 className="plan__title title">Пошаговый план</h2>
      <div className="plan__body">
        {planState.map((p) => (
          <Step key={p.id} num={p.id} text={p.text} />
        ))}
      </div>
    </section>
  );
};

export default Plan;
