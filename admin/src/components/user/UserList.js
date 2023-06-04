/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


const UserList = () => {
  //getuser
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  //delete user
  const deleteuser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

  return (
    <div className="columns">
      <div className="column is-half mt-5 has-centered m-6">
        <h2 style={{ fontSize: 40 }}>User</h2>
        <br />
        <Link to="/add" className="button is-success">
          Add New
        </Link>
        <table className="table is-bordered is-striped is-narrow mt-5">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Password</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} style={{ textAlign: "center" }}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td style={{ width: "23%", textAlign: "center" }}>
                  <Link to={`edit/${user._id}`} className="button is-info is-small">Edit</Link>
                  <button
                    onClick={() => deleteuser(user._id)}
                    className="button is-danger is-small ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
