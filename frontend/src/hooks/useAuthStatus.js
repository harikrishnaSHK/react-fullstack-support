import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useAuthStatus = ()=>{


const[isLoggedIn,setIsLoggedIn] = useState(false)

const {user} = useSelector((state)=>state.auth)
const auth = useSelector((state)=>state.auth)

console.log("toatal state "+ JSON.stringify(auth))

console.log("user status  "+user)



useEffect(()=>{

if(user){
    console.log("coming here")
    setIsLoggedIn(true)

}
else{
    console.log("coming here not null ")
    setIsLoggedIn(false)
}


},[user])


return {isLoggedIn}


}