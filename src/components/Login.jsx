import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const email = watch("email");
  const password = watch("password");

  const navigate = useNavigate();
  const go_register = () => {
    navigate("/");
  };

  const login_user = () => {
    const login = axios
      .post("http://127.0.0.1:8000/api/token/", {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res.data)
        localStorage.setItem("access", JSON.stringify(res.data.access));
        localStorage.setItem("refresh", JSON.stringify(res.data.refresh));
        navigate("/homepage");
        
      })
      .catch((errors) => {
        console.log("errors", errors);
        // navigate("/Login")
      });
  };
  const get_data = (data) => {
    // console.log(data)
    login_user();
  };

  return (
    <div className="  bg-slate-300 flex justify-center items-center h-screen  ">
      <div className=" font-semibold rounded-md bg-slate-400  shadow-lg w-1/2 hover:border-white  hover:border-2  md:mt-16 md:mb-8 sm:p-1 lg:p-5 items-center justify-center    ">
        <span className=" flex items-center justify-center  text-center lg:text-2xl lg:m-16  md:m-10 m-4 p-0.5 rounded-md hover:underline">
          
          Login
        </span>
        <form
          onSubmit={handleSubmit(get_data)}
          className=" flex flex-col  p-2  m-2  "
        >
          <input
            {...register("email", { required: "email is required" })}
            type="email"
            name="email"
            id="email1"
            placeholder="email"
            className="  border rounded-md text outline-none   md:m-4 p-2 m-2"
          />
          {errors && <p> {errors.email?.message}</p>}
          <input
            {...register("password", { required: "password is required" })}
            type="password"
            name="password"
            id="pawd"
            placeholder="password"
            className="   hover:bg-slate-200 rounded-md hover:text-lg outline-none  md:m-4 p-2 m-2"
          />
          {errors && <p> {errors.password?.message}</p>}

          <button
            type="submit"
            className=" flex items-center justify-center text-center text-xl rounded-lg  md:m-8 m-4 hover:bg-slate-200"
          >
            
            submit
          </button>
        </form>

        <div
          onClick={go_register}
          className=" flex justify-center items-center  font-light md:m-8 m-4 rounded-md bg-slate-400 hover:shadow-lg p-1 text-center hover:text-slate-50 hover:text-lg"
        >
          
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
