import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { context2 } from '../App'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const{usr,setUsr}=useContext(context2)
  // console.log(usr)
  const navigate=useNavigate()
    const[toggle,setToggle]=useState(false)
    const handlesignout=async()=>{
     const s= await signOut(auth)
     navigate('/')
     setUsr(null)

    }
  return (
    <div className='flex justify-between  py-3 items-center relative'>
     <div><h2 className='font-bold text-[100%]'>CryptoBase</h2></div>
     <AiOutlineMenu  size={30} className='block lg:hidden cursor-pointer'
     onClick={()=>setToggle(!toggle)}
     
     />

     <div className={(toggle)?'block lg:hidden right-0  absolute top-[60px] w-[100%] h-[89vh] py-5 ease-out duration-300 z-10 bg-white':'hidden ease-out duration-300'}>
    
        <div className='flex justify-between flex-col h-[100%] '>

{
  (usr)?<div className=' h-[30%] flex flex-col justify-around pl-3'>

          
  <h2 className='border-b border-black py-2 font-bold'><Link to={'/'}>Home</Link></h2>
  <h2 className='border-b border-black py-2 font-bold'><Link to={'/'}>Account</Link></h2>
</div>:<div className=' h-[30%] flex flex-col justify-around pl-3'>

          
<h2 className='border-b border-black py-2 font-bold'><Link to={'/'}>Home</Link></h2>
<h2 className='border-b border-black py-2 font-bold'><Link to={'/'}>Account</Link></h2>
</div>
}



       
        <div className=' flex flex-col pl-3 justify-around'>
        <button className='hover:text-[#406FAC]  rounded-xl py-1
    
        shadow-md
        '><Link to={'/login'}>Sign In</Link></button>
        <button className='py-1 rounded-xl bg-[#406FAC] text-white text-center text-[20px] font-sans hover:bg-[#295288] mt-4 shadow-md'>
            
            <Link to={'/signup'}>Sign Up</Link></button> 
        </div>
        </div>

     </div>

{
  (usr)?
  <div className='w-[22%]  justify-between hidden lg:flex'>
  
     <button className='hover:text-[#406FAC]'><Link to={'/account'}>Account</Link></button>
     <button className='w-[60%] py-1 rounded-xl bg-[#406FAC] text-white text-center text-[20px] font-sans hover:bg-[#295288]'
     onClick={handlesignout}
     
     >Sign Out</button>
  </div>:
     <div className='w-[22%]  justify-between hidden lg:flex'>
     
        <button className='hover:text-[#406FAC]'><Link to={'/login'}>Sign In</Link></button>
        <button className='w-[60%] py-1 rounded-xl bg-[#406FAC] text-white text-center text-[20px] font-sans hover:bg-[#295288]'><Link to={'/signup'}>Sign Up</Link></button>
     </div>
}




     
    </div>
  )
}

export default Nav
