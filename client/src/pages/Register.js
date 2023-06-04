import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from "../actions/userAction";
import Success from "../components/Success";
import Error from '../components/Error'


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");

  //alert 
  const registerstate = useSelector(state => state.registerUserReducer)
  const {error, success} = registerstate


  const dispatch = useDispatch()
  function register(){
    if(password!== cpassword){
      alert('password not matched')
    }
    else{
      const user={
        name,
        email,
        password
      }
      console.log(user)
      dispatch(registerUser(user))
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          
            {success && (<Success success='User Register Successfully'/>)}
            {error && (<Error error='Email already registered'/>)}
          

          <h2 style={{ fontSize: 30 }} className="text-center m-2">
            Register
          </h2>

          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
              type="text"
              placeholder="Name"
              className="form-control"
            />
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="text"
              placeholder="Email"
              className="form-control"
            />
            <br />
            
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              required
              placeholder="Password"
              className="form-control"
              value={password}
            /><br/>
            <input
              onChange={(e) => setcPassword(e.target.value)}
              value={cpassword}
              required
              type="text"
              placeholder="Confirm Password"
              className="form-control"
            />
            <br />
            <button onClick={register} className="btn mt-3 mb-3">Register</button>
            <p className="mt-3">
              Click Here To Login?{" "}
              <Link style={{ color: "red" }} to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
