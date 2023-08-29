import React from 'react'
import { useState,useEffect } from 'react'

const Trendingcoins = () => {
    const[trend,setTrend]=useState([])
   
    useEffect(()=>{
    
        fetch(`https://api.coingecko.com/api/v3/search/trending`)
        .then((data)=>data.json())
        .then((resp)=>setTrend(resp.coins))
        .catch((error)=>console.log(error))

    },[])
   
    {
        // trend.map((v,i)=>console.log(v.item))
    }
  return (
    <>
      <div><h2 className='font-bold'>Trending Coins</h2></div>
      <div className=' flex flex-row justify-around flex-wrap  lg:flex lg:flex-wrap lg:justify-between  lg:max-w-[100%] max-w-[100%]  '>

{
    trend.map((v)=>
    
    <div className='lg:w-[30%] w-[50%] flex justify-between pt-1 pb-1 px-1 items-center shadow-lg rounded-lg mt-2 cursor-pointer hover:bg-slate-200'>
    <div className='flex  lg:w-[55%] w-[60%] '>
        <img src={v.item.small} className='rounded-full'    alt="" />
        <div className='ml-2'>
        <h2 className='font-bold lg:text-[15px] text-[12px]'>{v.item.name}</h2>
        <h2>{v.item.symbol}</h2>
        </div>
</div>
    <div>
       <h2 className='lg:text-[20px]  text-[15px] font-semibold'>{v.item.price_btc.toFixed(5)}</h2>
    </div>

</div>
    )
}



     {/* <div className='w-[30%] flex justify-between pt-1 pb-1 px-1 items-center shadow-lg rounded-lg'>
         <div className='flex  w-[55%] justify-between'>
             <img src={trend[0].item.small} className='rounded-full'    alt="" />
             <div>
             <h2 className='font-bold'>{trend[0].item.name}</h2>
             <h2>{trend[0].item.symbol}</h2>
             </div>
     </div>
         <div>
            <h2>{trend[0].item.price_btc.toFixed(5)}</h2>
         </div>
    
     </div> */}
     </div>

   


    






    
    </>
  )
}

export default Trendingcoins
