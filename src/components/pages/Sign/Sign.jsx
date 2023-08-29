import React from 'react'
import {BsEnvelope} from 'react-icons/bs'
import {AiOutlineLock,AiOutlineUser} from 'react-icons/ai'
import {auth,db} from '../../../firebase'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {doc,setDoc} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'


const Sign = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[pass,setpass]=useState('')
  const navigate=useNavigate()
  const handlesignin=async()=>{
    try{
    const user=await createUserWithEmailAndPassword(auth,email,pass)
    const data=user.user
   
    
    await updateProfile(data,{
      displayName:name
    })
    const content={
      name,
      email,
      pass
    }
    setName('')
    setpass('')
    setEmail('')
    const d1=doc(db,'usersdetails',data.uid)
    await setDoc(d1,content)





    const d=doc(db,'users',email)
    await setDoc((d),{
      watchlist:[],
    })
    navigate('/login')
    }
    catch(error){
      console.log(error)
    }



  }
  return (
    <div className=' w-[60%] m-auto mt-4 '>
      <h2 className='font-bold text-[30px]'>Sign up</h2>
     <div className="card px-2 flex flex-col justify-between">
     <div className='relative'>
        <h2>Name</h2>
        <input type="text" className=' mt-1 border w-[100%] py-1 rounded-lg outline-none pl-3 lg:w-[50%] shadow-lg' value={name}
        onChange={(e)=>setName(e.target.value)}
        
        />
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
        onClick={handlesignin}
        
        >Sign up</button>
      </div>

     </div>
    </div>
  )
}

export default Sign
