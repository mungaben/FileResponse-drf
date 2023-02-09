

import React from 'react'
import axios from 'axios'

import { useForm} from 'react-hook-form'

const Register = () => {
 const{register,handleSubmit,formState:{errors}}=useForm()
 const Register_user=()=>{
  const data=axios.post()
 }
 const get_data=(data)=>{
  console.log("datas",data)
 }

  return (
    <div className='  bg-slate-300 flex justify-center items-center h-screen  '>
       <div className=" font-semibold rounded-md bg-slate-400  shadow-lg w-1/2 hover:border-white  hover:border-2  md:mt-16 md:mb-8 sm:p-1 lg:p-5 items-center justify-center    ">
        <span className=' flex items-center justify-center  text-center lg:text-2xl lg:m-16  md:m-10 m-4 p-0.5 rounded-md hover:underline' > Register Here</span>
        <form onSubmit={handleSubmit(get_data)} className=' flex flex-col  p-2  m-2  '>
            
            <input {...register("email",{ required:true})} type="email" name="email" id="email1" placeholder='email'  className='  border rounded-md text outline-none   md:m-4 p-2 m-2'/>
            { errors && <p> { errors.email?.message}</p> }
            <input {...register("password",{required:true})}type="password" name="password" id="pawd" placeholder='password' className='   hover:bg-slate-200 rounded-md hover:text-lg outline-none  md:m-4 p-2 m-2' />
             { errors && <p> { errors.password?.message}</p> }
            <button type="submit" className=' flex items-center justify-center text-center text-xl rounded-lg  md:m-8 m-4 hover:bg-slate-200'> submit</button>
        </form>
       
       
       </div>
    </div>
  )
}

export default Register
