import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/ContextProvider";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${BASE_URL}/api/auth/login`, {
  //       email, password
  //     });
  //     if (response.data.success) {
  //       login(response.data.user);
  //       localStorage.setItem("token", response.data.token);
  //       navigate('/');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        { email, password }
      );

      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border" required />
          </div>
          <button type="submit" className="w-full bg-teal-600 text-white py-2">Login</button>
          <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;