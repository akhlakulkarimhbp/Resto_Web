import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //save user
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="columns">
      <div className="column is-half mt-5 has-centered m-6">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input"   value={name}
                onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="text" className="input"   value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="text" className="input"   value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Add
              </button>
              <Link to='/' className="button is-danger ml-2">Kembali</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
