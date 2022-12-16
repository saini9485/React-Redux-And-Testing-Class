import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {allUsers }from "../../database/allUsers";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    let result = allUsers.filter((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });

    if (result[0]) {
      let information_or_action = {
        type: "SET_LOGIN_DATA",
        payload: {
          ...result[0],
        },
      };

      dispatch(information_or_action);
    } else {
      alert("please inter valid credential");
    }
  };

  return (
    <div
      style={{
        border: "2px solid black",
        margin: "auto",
        width: "50%",
        textAlign: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login Page</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) =>
            setLoginData({ ...loginData, email: event.target.value })
          }
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) =>
            setLoginData({ ...loginData, password: event.target.value })
          }
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};
