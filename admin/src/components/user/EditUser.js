/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditUser() {
  //edit user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };

  //update user
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div className="columns ">
      <div className="column is-half mt-5 has-centered m-6">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="text" className="input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="text" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success ">
                Update
              </button>
              <Link to="/" className="button is-danger ml-2">Kembali</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
