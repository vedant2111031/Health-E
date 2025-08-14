import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  // Ensure dataLayer is available
  window.dataLayer = window.dataLayer || [];

  // Trigger form load and initiate when component mounts
  useEffect(() => {
    const formMeta = {
      name: "login form",
      formType: "authentication",
    };

    window.dataLayer.push({
      event: "login.form.load",
      web: {
        webPageDetails: {
          form: formMeta,
        },
      },
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Trigger form submit event (NO personal data included)
    window.dataLayer.push({
      event: "login.form.submit",
      web: {
        webPageDetails: {
          form: {
            name: "login form",
            formType: "authentication",
          },
        },
      },
    });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) {
        const error = new Error(result.message);
        error.statusCode = res.status;
        throw error;
      }

      let { token, ...newresult } = result.data;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: newresult,
          token: token,
          role: newresult.role,
        },
      });

      // Trigger form complete event (NO personal data included)
      window.dataLayer.push({
        event: "login.form.complete",
        web: {
          webPageDetails: {
            form: {
              name: "login form",
              formType: "authentication",
              status: "login success"
            },
          },
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      if (error.statusCode === 500)
        toast.error("Internal server error");
      else toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0 pt-5">
      <div className="w-full max-w-[600px] mx-auto rounded-lg shadow-md md:p-10 bg-white">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center">
          Hello <span className="text-primaryColor">Welcome</span> Back{" "}
        </h3>
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center">
          Please <span className="text-primaryColor">Login</span>
        </h3>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[16px] leading-[30px] rounded-lg px-4 py-3 flex justify-center items-center"
            >
              {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
