import React from "react";
import Benefits from "../Benefits/Benefits";
import Diploma from "../Diploma/Diploma";
import Plan from "../Plan/Plan";
import FAQ from "../FAQ/FAQ";
import Registrate from "../Registrate/Registrate";
import "./Content.scss";
import Subscribe from "../Subscribe/Subscribe";

const Content: React.FC = () => {
  return (
    <main className="content">
      <div className="container">
        <section className="info">
          Компания <b>СлонУм</b> – проводит конкурс для детей в котором могут
          участвовать ребята <span>всех возрастов!</span> Номинации в которых
          можно победить, есть возможность проявить себя во всех направлениях и
          даже <span>без художественных способностей.</span>
        </section>
        <Benefits />
        <Plan />
        <Diploma />
        <Registrate />
        <FAQ />
      </div>
      <Subscribe />
    </main>
  );
};

export default Content;
