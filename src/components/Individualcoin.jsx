import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import DOMPurify from 'dompurify'
import {ThreeDots} from 'react-loader-spinner'
const Individualcoin = () => {
    const[isloading,setLoading]=useState(true)
    const[coins,setCoins]=useState()
    const param=useParams()
//    const name=param
//    console.log(name.coinid)
const api=`https://api.coingecko.com/api/v3/coins/${param.coinid}?localization=false&sparkline=true`
useEffect(()=>{
    // fetch(api)
    // .then((data)=>data.json())
    // .then((resp)=>setCoins(resp))
const getapi=async()=>{
    try{
    const d=await fetch(api)
    const resp=await d.json()
    setCoins(resp);
    setLoading(false)
}
catch(error){
    console.log(error)
}
}


getapi()
   
},[api])
  console.log(coins)

if(isloading){
    return(<>
    <div className='w-full h-[60vh] flex justify-center items-center'>
    <ThreeDots />
    </div>
    </>)
}


else{
  return (
    <>
    <div className='w-[100%] md:w-[60%] m-auto shadow-md pl-2 pt-2 md:mt-5  rounded-xl flex flex-col justify-between'>

<div className=' w-[30%] flex justify-between'>
    <img src={coins.image.small} alt="" className='w-[30%] h-[30%]' />
    <div>
        <h2 className='font-bold text-lg'>{coins.name} price</h2>
        <h2 className='font-light text-sm'>{coins.symbol}/USD
      
        </h2>
    </div>
</div>


<div className='w-[100%] flex justify-between'>
<div className='w-[45%]  pt-3 flex flex-col justify-between md:h-[320px]'>
   <h2 className='font-bold text-[40px] '>${coins.market_data.current_price['usd']}</h2> 
   <Sparklines data={coins.market_data.sparkline_7d.price}>
  <SparklinesLine color="green" />
</Sparklines>
<div className='flex justify-between'>
    <div>
        <h2>Market Cap</h2>
        <h2>${coins.market_data.market_cap
.usd.toLocaleString()}</h2>
    </div>
    <div>
        <h2>Volume(2h)</h2>
        <h2>${coins.market_data.total_volume.usd.toLocaleString()}</h2>
    </div>
    
</div>

<div className='flex justify-between'>
    <div>
        <h2>24h HIGH</h2>
        <h2>${coins.market_data.high_24h.usd.toLocaleString()}</h2>
    </div>
    <div>
        <h2>24h LOW</h2>
        <h2>${coins.market_data.low_24h.usd.toLocaleString()}</h2>
    </div>
    
</div>

</div>












<div className='w-[50%]  pt-3 flex justify-between flex-col md:h-[320px]  text-[18px]'>
   <h2 className='font-bold text-[40px] '>Market Stats</h2> 
  
<div className='flex justify-between'>
    <div>
        <h2 className='font-light text-[16px]'>Market Rank</h2>
        <h2 className='font-semibold'>{coins.market_data.market_cap_rank}</h2>
    </div>

<div>
<h2 className='font-light text-[16px]'>Hashing Algo</h2>
        <h2 className='font-semibold'>SHA-256</h2>

</div>


    <div>
        <h2 className='font-light text-[16px]'>Trust Score</h2>
        <h2 className='font-semibold'>{coins.sentiment_votes_up_percentage
}</h2>
    </div>
    
</div>



<div className='flex justify-between '>
    <div>
        <h2 className='font-light text-[16px]'>Price Change(24h)</h2>
        <h2 className='font-semibold'>{coins.market_data.price_change_24h}%</h2>
    </div>

<div>
<h2 className='font-light text-[16px]'>Price Change(7d)</h2>
        <h2 className='font-semibold'>{coins.market_data.price_change_percentage_7d}%</h2>

</div>


    <div>
        <h2 className='font-light text-[16px]'>Price Change(14d)</h2>
        <h2 className='font-semibold'>{coins.market_data.price_change_percentage_14d}%</h2>
    </div>
    
</div>






<div className='flex justify-between'>
    <div>
        <h2 className='font-light text-[16px]'>Price Change(30d)</h2>
        <h2 className='font-semibold'>{coins.market_data.price_change_percentage_30d}%</h2>
    </div>
    <div>
        <h2 className='font-light text-[16px]'>Price Change(60d)</h2>
        <h2 className='font-semibold'>{coins.market_data.price_change_percentage_60d}%</h2>
    </div>
    <div>
        <h2 className='font-light text-[16px]'>Price Change(1y)</h2>
        <h2 className='font-semibold'>{coins.market_data.price_change_percentage_1y}%</h2>
    </div>
   
    
</div>

</div>

</div>




<div className='mt-6 px-2 pb-7'>
    <h2 className='font-bold text-lg'>About {coins.name}</h2>
    <div>
        {/* <p className='font-light'>dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(coins.description.en)}}</p> */}
        <p className='font-light text-sm ' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(coins.description.en)}}></p>
        {/* {DOMPurify.sanitize(`<p className='font-light'>${coins.description.en}</p>`)} */}
    </div>
</div>
</div>



    
    </>
  )
}




}
export default Individualcoin

