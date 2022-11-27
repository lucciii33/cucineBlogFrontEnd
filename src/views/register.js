import React, { useState, useEffect, useContext } from "react";
import "../styles/register.css";

export const Register = () => {
  return (
    <div className="conta">
      <h1>register</h1>
      <div>
        <div>
          <label>Full Name</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <button>send</button>
      </div>
    </div>
  );
};
