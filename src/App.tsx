
import './App.css'
import {  Outlet as RouterOutlet } from 'react-router-dom';


import { createContext, useCallback,  useMemo,  } from "react";
import { useNavigate } from "react-router-dom";
import useUserToken from './shared/UseUserToken';

export type User = {
   exp: number
   iat: number
   id: number
   sub: string
 }
 type Auth = {
   user: User
   login: (token: string) => void
   logout: () => void
 }

 export type AppContextData = {
   auth: Auth
  
 }
 

 export const AppContext = createContext<AppContextData>({} as AppContextData)
function App() {
   const navigate = useNavigate();
   const [user, setUser] = useUserToken()



  
  const login = useCallback(
   (token: string) => {
     setUser(token)
    //  navigate('/')
   },
   [ setUser]
 )
 const logout = useCallback(() => {
   setUser('')
   navigate('/signin')
 }, [navigate, setUser])


 
 const auth = useMemo(
   () => ({
     user,
     login,
     logout,
   }),
   [user, login, logout]
 )
 
   return (
   <>

<AppContext.Provider value={{ auth ,login,logout} as AppContextData}>
<RouterOutlet/>
 </AppContext.Provider>

  
    
     
    </>
   )
}
export default App




