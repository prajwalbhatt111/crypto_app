import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import {useState,useContext} from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import {context,context2} from '../../../App'
import { db } from '../../../firebase' 
import {doc,updateDoc,arrayUnion} from 'firebase/firestore'
import Individualcoin from '../../Individualcoin'
import { Link } from 'react-router-dom'
const Coins = ({coin,i}) => {
  console.log(coin)
  const{crypto,setCrypto}=useContext(context)
    const[star,setStar] =useState(false)
    const{usr,setUsr}=useContext(context2)
    // console.log(usr)
    
    const handlestar=async(coins)=>{
      // setCrypto([...crypto,coin])
      console.log(coins)
      if(star==true){
        setStar(false)

      }
      else{
        // setCrypto([...crypto,coins])
        setStar(true)
        const coinpath=doc(db,'users',usr)
        await updateDoc(coinpath,{
          watchlist:arrayUnion({
            id:coins.id,
            name:coins.name,
            image:coins.image,
            rank:coins.market_cap_rank,
            sybmol:coins.symbol

          })
        })

      }
      
      

    }
 
 
    
  return (
    
    <tr className='text-[18px] border-b  shadow-md h-[2.9rem] cursor-pointer hover:bg-slate-100' >
        <td className='w-[3%]'>{star?<AiFillStar onClick={()=>handlestar(coin)}/>:<AiOutlineStar onClick={()=>handlestar(coin)}/>}</td>
        <td className='w-[3%] text-center'>{i+1}</td>
        <Link to={`/coins/${coin.id}`}>
        <td className=' w-[100%] flex justify-around items-center  mt-[9px]'>
            <div className='flex w-[50%] items-center'>
            <img src={coin.image} alt="" className='w-[30%]' />
            <h2 className='ml-[3px]'>{coin.name}</h2>
            </div>
            <h2>{coin.symbol}</h2>
        </td>
        </Link>
        <td className='w-[15%]  text-center'><h2>${coin.current_price}</h2></td>
        <td className='w-[5%]  '>{coin.market_cap_change_percentage_24h
}</td>
        <td className='w-[18%]  text-center'><h2>{coin.total_volume}</h2></td>
        <td className='w-[15%]'><h2>{coin.market_cap
}</h2></td>
        <td className='w-[25%]'>
            {/* <h2>{coin.sparkline_in_7d.price}</h2> */}

        <Sparklines data={coin.sparkline_in_7d.price}>
  <SparklinesLine color="teal" />
</Sparklines>


        </td>
    </tr>
   

  )
}

export default Coins
