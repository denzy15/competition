import React, { useRef, useState } from "react";
import Benefits from "../Benefits/Benefits";
import Diploma from "../Diploma/Diploma";
import Plan from "../Plan/Plan";
import FAQ from "../FAQ/FAQ";
import Registrate from "../Registrate/Registrate";
import "./Content.scss";
import Subscribe from "../Subscribe/Subscribe";
import ChatComponent from "../ChatComponent/ChatComponent";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { DiscussionEmbed } from "disqus-react";
import reactStringReplace from "react-string-replace";
import Price from "../Price/Price";
import Form from "../Form/Form";
import Header from "../Header/Header";

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

const Content: React.FC = () => {
  const [openedChat, setOpenedChat] = useState(false);

  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="content">
      <Header />
      <div className="container">
        <section className="info">
          Компания <b>СлонУм</b> – проводит конкурс для детей в котором могут
          участвовать ребята <span>всех возрастов!</span> Номинации в которых
          можно победить, есть возможность проявить себя во всех направлениях и
          даже <span>без художественных способностей.</span>
        </section>
        {openedChat && (
          <ChatComponent /* isOpen={openedChat} toggle={setOpenedChat} */ />
        )}
        <SecondaryButton isOpened={openedChat} toggle={setOpenedChat} />
        <Benefits />
        <section className="plan">
          <h2 className="plan__title title">Пошаговый план</h2>
          <div className="plan__body">
            {planState.map((p) => (
              <div className="step">
                <div className="step__order">{p.id}</div>
                <p className="step__text">
                  {reactStringReplace(p.text, "Здесь", () => (
                    <span onClick={handleClick}>Здесь</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
        <Diploma />
        <div className="registrate" ref={ref}>
          <Price />
          <Form />
        </div>
        <FAQ />
        <DiscussionEmbed
          shortname="den-12"
          config={{
            url: "https://example.com/my-article-url",
            identifier: "unique-article-id",
            title: "disqus-test",
            language: "ru",
          }}
        />
      </div>
      <Subscribe />
    </main>
  );
};

export default Content;
