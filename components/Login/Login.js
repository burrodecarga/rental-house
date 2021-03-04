import React, { useState } from "react";
import useUser from '../../hooks/useUser'
import { useEffect } from "react";
import Router from 'next/router'


export default function Login({onLogin}) {
  const [username, setUsername] = useState("user1@gmail.com");
  const [password, setPassword] = useState("12345678");
  const {isLoginLoading, hasLoginError, login, isLogged} = useUser()

  useEffect(() => {
    if (isLogged) {
      Router.push('/')  
      onLogin && onLogin()
    }
  }, [isLogged, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            username
            <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          </label>

          <label>
            password
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  );
}
