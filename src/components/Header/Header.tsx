import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import Timer from "../Timer/Timer";
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Menu />
        <section className="header__body">
          <span className="header__subtitle">От компании СлонУМ</span>
          <h1 className="header__title">
            Всероссийский конкурс Детского рисунка
          </h1>
          <p className="header__text text">
            Участвуйте в конкурсе и получайте призы в различных номинациях
            детского рисунка для всех возрастов
          </p>
          <div className="header__participate">
            <Button content="Участвовать" />
            <Timer />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
