import Navbar from './components/Navbar'
import UserList from './components/user/UserList'
// eslint-disable-next-line no-unused-vars
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produk from './components/produk/Produk';
import AddUser from './components/user/AddUser'
import EditUser from './components/user/EditUser'
import LoginAdmin from './pages/LoginAdmin';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path='/produk' element={<Produk/>}/>
          <Route path="/add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="/login-admin" exact Component={LoginAdmin}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
