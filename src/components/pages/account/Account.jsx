import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { context,context2 } from '../../../App'
import {Link} from 'react-router-dom'
import {onSnapshot,doc,collection,getDocs} from 'firebase/firestore'
import { db } from '../../../firebase'
import Cointrack from './Cointrack'
// import { Link } from 'react-router-dom'

const Account = () => {
    const[lists,setLists]=useState([])
    const{crypto,setCrypto}=useContext(context)
    const{usr,setUsr}=useContext(context2)
    // console.log(crypto)
//    useEffect(()=>{
//     const getdata=async()=>{
//         const d=collection(db,'users')
//         const d1=await getDocs(d)
//     setLists(d1.docs.map((doc)=>
//     {
//         return({
//             ...doc.data().watchlist
//         }
            
           
//             )
//     }))
    
//     }
// getdata()
//    },[])
// lists.map((v)=>console.log(v))

   useEffect(()=>{
    onSnapshot(doc(db,'users',usr),(doc)=>{
        setLists(doc.data().watchlist)
    })

   },[])
    
  return (
   
    <>
    <div className='mt-6 w-[100%]'>
    <div className='w-[100%] lg:w-[60%] lg:m-auto flex justify-between pt-2 rounded-xl shadow-md px-2 pb-4 items-center '>
       <div>
        <h2 className='font-bold'>Account</h2>
        <p className='font-light text-[18px]'>Welcome,{usr}</p>
       </div>
       <div className='w-[12%] py-1 flex justify-center items-center rounded-xl shadow-md'>
        <button className='font-medium text-[18px]'><Link to={'/'}>Home</Link></button>
       </div>

    </div>
    <div className='w-[60%] m-auto shadow-md rounded-xl pl-2 min-h-[250px] lg:pt-8'>
        <div>
            <h2 className='font-bold text-xl'>Watch List</h2>
        </div>
        {
            lists.length===0?<div>
            <h4 className='font-light text-[17px]'>You dont have any coins saved.Please save a coin to add to your watch list.<Link to={'/'}>Click here to search coins</Link></h4>
        </div> :<Cointrack track={lists} usr={usr} />
        
        }
        {/* <Cointrack track={lists}/> */}
     
        

    </div>
    </div>
    </>
  )
}

export default Account
