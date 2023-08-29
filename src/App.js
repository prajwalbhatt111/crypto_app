
import './App.css';
import Nav from './components/Nav'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Sign from './components/pages/Sign/Sign'
import Home from './components/Home'
import { useState,useEffect,createContext } from 'react';
import Account from './components/pages/account/Account';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from 'firebase/auth';
import { auth } from './firebase';
import { Protectedroute } from './components/protected/protectedroutes';
import Individualcoin from './components/Individualcoin';

export const context=createContext();
export const context2=createContext();
function App() {
  const[coin,setCoin]=useState([])
  const[crypto,setCrypto]=useState([])
  const[usr,setUsr]=useState(null)

  useEffect(()=>{
fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en`)
.then((data)=>data.json())
.then((resp)=>setCoin(resp))
.catch((error)=>console.log(error))



// 
  },[])
 

  return (
   <> 
   <context.Provider value={{crypto,setCrypto}}>
    <context2.Provider value={{usr,setUsr}}>
  <Router>
   <div className='max-w-[1640px] py-2'>
    <div className='lg:max-w-[60%] lg:px-2 rounded-xl w-[100%] px-2  m-auto shadow-md'>
   <Nav />
   </div>
   <Routes>
    
    <Route path='/' element={<Home coin={coin}/>} />
 
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Sign />} />
    <Route path='/coins/:coinid' element={<Individualcoin />}   />

    <Route path='/account' element={
<Protectedroute>
<Account/>
</Protectedroute>

    } />
   </Routes>
   
   </div>
   </Router>
   </context2.Provider>
   </context.Provider>
   </>
  );
}

export default App;
