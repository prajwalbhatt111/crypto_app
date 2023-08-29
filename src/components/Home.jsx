import React from 'react'
import Coins from './pages/Home/Coins'
import Trendingcoins from './Trendingcoins'
import { useState } from 'react'
const Home = ({coin}) => {
    const[search,setSearch]=useState('')

  return (
    <>
    <div className=' lg:max-w-[60%] lg:px-2 rounded-xl w-[100%] px-2 pt-2 pb-2  m-auto shadow-md mt-4'>
        <div className='flex justify-between px-2 items-center'>
            <h2>Search Crypto</h2>
            <form>
                 <input type="text" placeholder='search a coin' className='py-[5px]  pl-2 rounded-lg shadow-md outline-none'value={search} 
                 onChange={(e)=>setSearch(e.target.value)}
                 /></form>
        </div>
        <div className=' w-full'>

            <table className=' w-full '>
                <thead className=''>
                    <tr className='text-[18px]'>
                        <th className='w-[3%]'></th>
                        <th className='w-[3%]'>#</th>
                        <th className=' w-[30%] '>Coin</th>
                        <th className='w-[5%]'>Price</th>
                        <th className='w-[4%]'>24h</th>
                        <th className='w-[18%]'>24h volume</th>
                        <th className='w-[15%]'>Mkt</th>
                        <th className='w-[20%]'>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                   
               {
                (search==='')?coin.map((value,index)=><Coins coin={value} i={index} key={index} />):
                coin.filter((value,index)=>value.name.includes(search)).map((value,index)=><Coins coin={value} i={index} key={index}/>)
               }
             
                </tbody>
              
            </table>
        </div>
   
    </div>
   
    <div className='lg:max-w-[60%] max-w-[100%] lg:m-auto mt-4'>
<Trendingcoins />
    </div>
    </>
  )
}

export default Home
