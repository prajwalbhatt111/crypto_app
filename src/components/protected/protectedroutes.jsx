import { useContext } from "react"
import { context2 } from "../../App"
import { Navigate } from "react-router-dom"

export const Protectedroute=({children})=>{
    const{usr,setUsr}=useContext(context2)
    if(usr){
        return children
    }
    else{
        return <Navigate to={'/login'} />
    }
    

}
