import React from "react";
import diplomaImg from "../../media/images/diploma.png";
import './Diploma.scss'

const Diploma: React.FC = () => {
  return (
    <div className="diploma">
      <div className="diploma__body">
        <h2 className="diploma__title title">Выдаём дипломы участникам</h2>
        <p className="diploma__text text">
          Жюри конкурса рассмотрит работы и выделит победителей по городам и
          возрастным категориям, а также определит другие номинации, подчеркнув
          уникальную особенность каждого конкретного рисунка — дипломы получат
          все дети!
        </p>
        <p className="diploma__text text">
          Скачать диплом можно будет в личном кабинете через сутки после
          окончания конкурса, дополнительно вышлем его на e-mail
        </p>
        <p className="diploma__text text">Со слоном к победам напролом!</p>
      </div>
      <div className="diploma__img">
        <img src={diplomaImg} alt="" />
      </div>
    </div>
  );
};

export default Diploma;
