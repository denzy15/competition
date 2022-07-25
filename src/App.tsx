import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './styles/App.scss';

const App:React.FC = () => {
  return (
    <div className="wrapper">
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
