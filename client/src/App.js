import "./App.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes
} from "react-router-dom";
import 'bootstrap'
import Navbar from "./components/Navbar";
import Productscreen from "./pages/Productscreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/Register";
import Cartscreen from "./pages/CartScreen";
import Orders from "./pages/Orders";
import Profil from './pages/Profile'


function App() {
  return (
    <div className="App">
      <Navbar />
 
        <Routes>
          
          <Route path="/" exact Component={Productscreen} />
          <Route path="/login" exact Component={LoginScreen}/>
          <Route path="/register" exact Component={RegisterScreen}/>
          <Route path="/cart" exact Component={Cartscreen} />
          <Route path='profil/:id' exact Component={Profil}/>
        
          <Route path='/orders' exact Component={Orders}/>
          <Route path="*" Component={()=> {
            return <div>HALAMAN NOT FOUND</div>
          }}  />

        </Routes>

    </div>
  );
}

export default App;
