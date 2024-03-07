import "./App.css";
import { Outlet as RouterOutlet } from "react-router-dom";

import { createContext, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserToken from "./shared/UseUserToken";

export type User = {
  exp: number;
  iat: number;
  id: number;
  sub: string;
};
type Auth = {
  user: User;
  login: (token: string) => void;
  logout: () => void;
  getout: () => void; 
};

export type AppContextData = {
  auth: Auth;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useUserToken();
  const [open, SetOpen] = useState(false);

  const login = useCallback(
    (token: string) => {
      setUser(token);
      //  navigate('/')
    },
    [setUser]
  );
  const logout = useCallback(() => {
    setUser("");
    navigate("/signin");
  }, [navigate, setUser]);

  const getout  = useCallback(() => {
    SetOpen(open => !open)
  },[open,SetOpen])

  const auth = useMemo(
    () => ({
      user,
      login,
      logout,
      getout
    }),
    [user, login, logout]
  );
 

  return (
    <>
      <AppContext.Provider value={{ auth, login, logout ,getout} as AppContextData}>
        <RouterOutlet />
      </AppContext.Provider>
    </>
  );
}
export default App;
