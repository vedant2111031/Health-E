import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: "include"
      });

      const result = await res.json();

      if (!res.ok) {
        const error = new Error(result.message);
        error.statusCode = res.status;
        throw error;
      }

      let { token, ...newresult } = result.data;

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: newresult,
          token: token,
          role: newresult.role
        }
      });

      setLoading(false);
      toast.success(result.message);
      navigate('/home');
    } catch (error) {
      if (error.statusCode === 500)
        toast.error("Internal server error");
      else
        toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 py-5 md:px-10 md:py-10 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-5">
        <h3 className="text-headingColor text-2xl font-bold mb-6 text-center">
          Hello <span className="text-primaryColor">Welcome</span> Back
        </h3>
        <h3 className="text-headingColor text-xl font-bold mb-6 text-center">
          Please <span className="text-primaryColor">Sign</span> In
        </h3>

        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-base text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-base text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-base rounded-lg px-4 py-3 flex items-center justify-center"
            >
              {loading ? <HashLoader size={25} color='#fff' /> : 'Login'}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? <Link to='/register' className="text-primaryColor font-medium ml-1">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
