import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/competition" element={<Content />} />
        <Route
          path="/register"
          element={
            <div className="container">
              <Form />
            </div>
          }
        />
      </Routes>
      {/*<Content />*/}
      <Footer />
    </div>
  );
};

export default App;
