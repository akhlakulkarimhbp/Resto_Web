import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
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
    <div>
      <div className="justify-content-center mt-5 row">
        <div className="col-md-4 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: 30 }} className="text-center m-2">
            User Profil
          </h2>

          <div onSubmit={updateUser}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="form-control"
            />
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="form-control"
            />
            <br />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
              className="form-control"
            />
            <br />

            <button type="submit" className="btn mt-3 mb-3">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
