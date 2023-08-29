// import React, { createContext, useContext } from 'react'
import {BsEnvelope} from 'react-icons/bs'
import {AiOutlineLock,AiOutlineUser} from 'react-icons/ai'
import {auth,db} from '../../../firebase'
import {signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {doc,setDoc} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import Account from '../account/Account'
import { context2 } from '../../../App'


const Login = () => {

  // const{usr,setUsr}=createContext(context)
 const{usr,setUsr}=useContext(context2)

 


 
  const[email,setEmail]=useState('')
  const[pass,setpass]=useState('')
  const navigate=useNavigate()
  const handlelogin=async()=>{
    try{
    const user=await signInWithEmailAndPassword(auth,email,pass)
    const data=user.user['email']
// console.log(user.user)
   setUsr(data)
  // console.log(data)
  // setUsr([data])
  
    
   
   

    setpass('')
    setEmail('')
   
  
   





    
    navigate('/account')
    }
    catch(error){
      console.log(error)
    }



  }
  return (
    <div className=' w-[60%] m-auto mt-4 '>
      <h2 className='font-bold text-[30px]'>Log In</h2>
     <div className="card px-2 flex flex-col justify-between">
     <div className='relative'>
       
        <AiOutlineUser className='absolute lg:top-9 lg:left-[21rem] top-9 left-[16.5rem]' />
      </div>
      <div className='relative'>
        <h2>Email</h2>
        <input type="text" className=' mt-1 border w-[100%] py-1 rounded-lg outline-none pl-3 lg:w-[50%] shadow-lg' value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        <BsEnvelope className='absolute lg:top-9 lg:left-[21rem] top-9 left-[16.5rem]' />
      </div>
      <div className='relative'>
       <h2> Password</h2>
        <input type="text" className='mt-1 border w-[100%] py-1 rounded-lg outline-none pl-3 lg:w-[50%] shadow-lg' value={pass}
        onChange={(e)=>setpass(e.target.value)}
        />
        <AiOutlineLock className='absolute lg:top-9 lg:left-[21rem] top-9 left-[16.5rem]' />
      </div>
      <div>
        <button className=' w-[100%] lg:w-[50%] pt-2 pb-2 rounded-lg mt-3 text-center bg-[#3C6CAB] text-white hover:bg-[#223e62]'
        onClick={handlelogin}
        
        >Sign up</button>
      </div>

     </div>
    </div>
  )
}

export default Login
