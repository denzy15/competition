import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import Timer from "../Timer/Timer";
import "./Header.scss";

import plane from "../../media/images/header/plane.png";
import alarm from "../../media/images/header/alarm.svg";
import atom from "../../media/images/header/atom.svg";
import balloon from "../../media/images/header/balloon.svg";
import colors from "../../media/images/header/colors.svg";
import division from "../../media/images/header/division.svg";
import elephant from "../../media/images/header/elephant.svg";
import lamp from "../../media/images/header/lamp.svg";
import pencil from "../../media/images/header/pencil.svg";
import planet1 from "../../media/images/header/planet-1.svg";
import planet2 from "../../media/images/header/planet-2.svg";
import planet3 from "../../media/images/header/planet-3.svg";
import plus from "../../media/images/header/plus.svg";
import stars1 from "../../media/images/header/stars-1.svg";
import stars2 from "../../media/images/header/stars-2.svg";
import MovingIcon from "../MovingIcon/MovingIcon";
import { useNavigate } from "react-router-dom";
const iconsState = [
  {
    id: 1,
    src: plane,
    className: "up-down",
    position: { right: "1%", top: "40%" },
  },
  {
    id: 2,
    src: alarm,
    className: "up-down",
    position: { right: "45%", top: "25%" },
  },
  {
    id: 3,
    src: atom,
    className: "up-down",
    position: { right: "50%", top: "15%" },
  },
  {
    id: 4,
    src: balloon,
    className: "down-up",
    position: { right: "30%", top: "35%" },
  },
  {
    id: 5,
    src: colors,
    className: "up-down",
    position: { right: "8%", top: "15%" },
  },
  {
    id: 6,
    src: division,
    className: "up-down",
    position: { right: "22%", top: "20%" },
  },
  {
    id: 7,
    src: elephant,
    className: "down-up",
    position: { right: "10%", top: "30%" },
  },
  {
    id: 8,
    src: lamp,
    className: "up-down",
    position: { right: "20%", top: "40%" },
  },
  {
    id: 9,
    src: pencil,
    className: "down-up",
    position: { right: "40%", top: "40%" },
  },
  {
    id: 10,
    src: planet1,
    className: "up-down",
    position: { right: "40%", top: "10%" },
  },
  {
    id: 11,
    src: planet2,
    className: "up-down",
    position: { right: "28%", top: "15%" },
  },
  {
    id: 12,
    src: planet3,
    className: "up-down",
    position: { right: "34%", top: "55%" },
  },
  {
    id: 13,
    src: plus,
    className: "up-down",
    position: { right: "29%", top: "27%" },
  },
  {
    id: 14,
    src: stars1,
    className: "down-up",
    position: { right: "5%", top: "1%" },
  },
  {
    id: 15,
    src: stars2,
    className: "up-down",
    position: { right: "8%", top: "5%" },
  },
];

const Header: React.FC = () => {
  const nav = useNavigate();

  const register = () => {
    nav("/register");
  };
  return (
    <header className="header">
      {iconsState.map((i) => (
        <MovingIcon
          className={i.className}
          src={i.src}
          position={i.position}
          key={i.id}
        />
      ))}

      <span
        style={{
          position: "absolute",
          top: "33%",
          right: "8%",
          fontSize: "25px",
          lineHeight: "31px",
          color: "#FCC947",
          transform: "rotate(-20deg)",
        }}
      >
        0
      </span>
      <span
        style={{
          position: "absolute",
          top: "25%",
          right: "5%",
          transform: "rotate(20deg)",
          fontSize: "25px",
          lineHeight: "31px",
          color: "#E075AD",
        }}
      >
        1
      </span>

      <div className="container">
        <Menu />
        <section className="header__body">
          <span className="header__subtitle">От компании СлонУМ</span>
          <h1 className="header__title">Конкурс Детского рисунка</h1>
          <p className="header__text text">
            Участвуйте в конкурсе и получайте призы в различных номинациях
            детского рисунка для всех возрастов
          </p>
          <div className="header__participate">
            <Button content="Участвовать" submit={register} />
            <Timer />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
