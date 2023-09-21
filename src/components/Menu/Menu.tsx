import logo from "../../media/icons/logo.svg";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="menu__logo">
          <img src={logo} alt="" />
          <div>
            Слон<span>УМ</span>
          </div>
        </li>
        
      </ul>
    </nav>
  );
};

export default Menu;
