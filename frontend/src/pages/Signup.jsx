import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://note-app-backend-ceae.onrender.com/api/auth/register",
        { name, email, password }
      );
      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center item-center min-h-screen bg-grey-100">
      <div className="flex justify-center item-center min-h-screen bg-grey-100">
        <h2 className="text-2x1 font-bold mb-4">signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gret-700" >
              name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border"
              placeholder="enter username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gret-700" htmlFor="email">
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
            <label className="block text-gret-700" htmlFor="password">
              password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2"
            >
              signup
            </button>
            <p className="text-center">
              already have account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
