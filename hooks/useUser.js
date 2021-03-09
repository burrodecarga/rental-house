import {useCallback, useState} from 'react'
import loginService from '../services/login'

export default function useUser () {
  const [jwt, setJWT] = useState(null)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({username, password}) => {
    setState({loading: true, error: false })
    loginService({username, password})
      .then(jwt => {      
        window.sessionStorage.setItem('jwt', jwt)
        setState({loading: false, error: false })
        console.log('desde servicio state',state, 'jwt',jwt)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({loading: false, error: true })
        console.log('desde error',state)
        console.error(err)
      })
  }, [setJWT])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  console.log('desde servicio state 3',state, 'jwt 3',jwt)
  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    jwt
  }
} 