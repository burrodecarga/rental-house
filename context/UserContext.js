import React, {useState} from 'react'
import { parseCookies } from 'nookies'

import { useEffect } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  
  const [jwt, setJWT] = useState(null)

 
  return <Context.Provider value={{
    jwt,
    setJWT
  }}>
    {children}
  </Context.Provider>
}

export default Context