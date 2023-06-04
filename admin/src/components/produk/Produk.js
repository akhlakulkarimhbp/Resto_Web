/* eslint-disable no-restricted-globals */
import React from "react";
import { Link } from 'react-router-dom'


const UserList = () => {

  return (
    <div className="columns">
      <div className="column is-half mt-5 has-centered m-6">
        <h2 style={{ fontSize: 40 }}>User</h2>
        <br />
        <Link to="" className="button is-success">
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
          
              <tr  style={{ textAlign: "center" }}>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td style={{ width: "23%", textAlign: "center" }}>
                  <Link to='' className="button is-info is-small">Edit</Link>
                  <button
                   
                    className="button is-danger is-small ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
    
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
