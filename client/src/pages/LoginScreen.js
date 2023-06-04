import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import { Link } from "react-router-dom";
import Error from '../components/Error'
import Success from "../components/Success";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //alert 
  const loginstate = useSelector(state=>state.loginUserReducer)
  const { error, success} = loginstate

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = '/';
    }
  }, []);

  function login (){
    const user={email, password}
    dispatch(loginUser(user))
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: 30 }} className="text-center m-2">
            LOGIN
          </h2>
          {
            error && (<Error error='Invalid Credentials'/>)
          }
           {
            success && (<Success success='Login Successfully'/>)
          }
          <div>
            <input
             onChange={(e) => setEmail(e.target.value)}
             value={email}           
             required 
            type="text" placeholder="Email" className="form-control" />
            <br />
            <input
             onChange={(e) => setPassword(e.target.value)}
             value={password}           
             required
              type="text"
              placeholder="Password"
              className="form-control"
            />
            <button onClick={login} className="btn mt-5">
              Login
            </button>
            <p className="mt-3">
              Already have account?{" "}
              <Link style={{ color: "red" }} to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
