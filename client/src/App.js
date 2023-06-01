import "./App.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Productscreen from "./pages/Productscreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/Register";
import Cartscreen from "./pages/CartScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact Component={Productscreen} />
          <Route path="/cart" exact Component={Cartscreen} />
          <Route path="/login" exact Component={LoginScreen}/>
          <Route path="/register" exact Component={RegisterScreen}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
