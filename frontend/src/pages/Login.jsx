import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from "../context/ContextProvider";

const Login = () => {
  
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const {login} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://note-app-backend-ceae.onrender.com/api/auth/login",{email, password }
      );
      if(response.data.success) {
        login(response.data.user)
        localStorage.setItem("token", response.data.token)

        navigate('/')

      }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex justify-center item-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border"
              placeholder="enter email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border"
              placeholder=""
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2"
            >
              login
            </button>
            <p className="text-center">
              don't have account? <Link to="/register">register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login
