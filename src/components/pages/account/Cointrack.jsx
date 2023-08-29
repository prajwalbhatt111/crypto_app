import React from 'react'
import { useState } from 'react'
import {doc,setDoc,arrayRemove, updateDoc} from 'firebase/firestore'
import { db } from '../../../firebase'

const Cointrack = ({track,usr}) => {
    const handleremove=async(v)=>{
        console.log(v)
       const dbref=doc(db,'users',usr)
       await updateDoc(dbref,{
        watchlist:arrayRemove(v)
       })
    }
    // console.log(track)
   
    // setIndex(()=>index+1)
    track.map((v,i)=>console.log(v))
   
  return (
<>
<div className=''>
    <table className=' w-full'>
        <thead>

    <tr className='text-md font-semibold w-full border-b '>
        <th>Rank #</th>
        <th>Coin</th>
        <th>Remove</th>
    </tr>
    </thead>
<tbody>

{
     track.map((v)=>(<tr className=' w-full border-b '>
     <th>{v.rank}</th>
     <th className='w-[38%] m-auto flex items-center justify-around'><img src={v.image} alt="" className='w-[40px] h-[40px]' />
 <div>
         <h2 className='font-medium'>{v.name}</h2>
         <h2 className='font-light'>{v.sybmol}</h2>
         </div>
     
     </th>
     <th onClick={()=>handleremove(v)} className='cursor-pointer'>x</th>
 
 </tr>

     )
     
 )

}


</tbody>





{/* <tr className=' w-full border-b '>
    <th>{track[0][0].rank}</th>
    <th className='w-[38%] m-auto flex items-center justify-around'><img src={track[0][0].image} alt="" className='w-[40px] h-[40px]' />
<div>
        <h2 className='font-medium'>{track[0][0].name}</h2>
        <h2 className='font-light'>{track[0][0].sybmol}</h2>
        </div>
    
    </th>
    <th>x</th>

</tr> */}



    </table>

</div>

</>
   
   
  )
}

export default Cointrack
