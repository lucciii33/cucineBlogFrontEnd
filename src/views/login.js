import React, { useState, useEffect, useContext } from "react";
import "../styles/login.css";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [singIn, setSingIn] = useState({ password: "", email: "", });
  const handleChange = e => {
    setSingIn({ ...singIn, [e.target.name]: e.target.value });
  };
  console.log(store)
  return (
    <div className="conta">
      <h1>Login</h1>
      <div>
          <label>Email</label>
          <input onChange={handleChange} name="email" value={singIn.email}/>
        </div>
        <div>
          <label>Password</label>
          <input onChange={handleChange} name="password" value={singIn.password}
          />
        </div>
        <button onClick={()=>actions.loginToken(singIn.email,singIn.password )}>send</button>
      </div>
  );
};
