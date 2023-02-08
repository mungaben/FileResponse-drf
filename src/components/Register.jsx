

import React from 'react'

import { useForm} from 'react-hook-form'

const Register = () => {
  return (
    <div className=' m-2 space-x-2'>
       <div className=' flex'>
        <form action="" method="post" className=' w-full m-2'>
            <input type="email" name="email" id="email1" placeholder='email'  className=' bg-slate-200 m-2 border p-0.5 text'/>
            <input type="password" name="password" id="pawd" placeholder='password' className=' p-0.5 bg-slate-300 m-2' />
            
        </form>
       
       
       </div>
    </div>
  )
}

export default Register
