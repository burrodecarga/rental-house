import React,{useEffect} from 'react'
import useUser from '../../hooks/useUser'


export default function Logout() {

  const {logout} = useUser()

  useEffect(()=>{
    logout()
    },[])
  
  return null
}
