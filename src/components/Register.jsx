import React, { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const email = watch("email");
  const password = watch("password");
  const name = watch("name");
  const navigate=useNavigate()
  const go_login=()=>{
    navigate("/Login")
  }

  const Register_user = async () => {
    const data = axios
      .post("http://localhost:8000/downloads/user/register/", {
        email: email,
        password: password,
        name: name,
      })
      .then((res) => {
        console.log("res data", res.status);
        userdata && setuserdata();

        if (res.status == 400) {
          console.log("alredy registed");
        } else res.status == 200;
        {
          console.log("user created");
        }
      })
      .catch((errors) => {
        console.log("errors", errors);
        if (errors.response.status == 400) {
          console.log("useralredy exists");
        }
      });
  };

  const get_data = (data) => {
    console.log("datas", data);

    Register_user();
  };

  return (
    <div className="  bg-slate-300 flex justify-center items-center h-screen  ">
      <div className=" font-semibold rounded-md bg-slate-400  shadow-lg w-1/2 hover:border-white  hover:border-2  md:mt-16 md:mb-8 sm:p-1 lg:p-5 items-center justify-center    ">
        <span className=" flex items-center justify-center  text-center lg:text-2xl lg:m-16  md:m-10 m-4 p-0.5 rounded-md hover:underline">
          {" "}
          Register Here
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
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            name="name"
            id="namee"
            placeholder="name"
            className="   hover:bg-slate-200 rounded-md hover:text-lg outline-none  md:m-4 p-2 m-2"
          />
          {errors && <p> {errors.name?.message}</p>}
          <button
            type="submit"
            className=" flex items-center justify-center text-center text-xl rounded-lg  md:m-8 m-4 hover:bg-slate-200"
          >
            
            Register
          </button>
        </form>
        <div onClick={go_login} className=" flex justify-center items-center  font-light md:m-8 m-4 rounded-md bg-slate-400 hover:shadow-lg p-1 text-center hover:text-slate-50 hover:text-lg" > <button >  Login</button> </div>
      </div>
    </div>
  );
};

export default Register;
