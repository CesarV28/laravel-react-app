import { createContext, useContext, useState } from "react";

const StartContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setUserToken: () => {}
});

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: 'Cesar'
    });
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setUserToken = ( token ) => {
        setToken(token);

        (token) 
            ? localStorage.setItem('ACCESS_TOKEN', token)
            : localStorage.removeItem('ACCESS_TOKEN');
    }

  return (
    <StartContext.Provider value={{
        user,
        token,
        setUser,
        setUserToken
    }}>
        { children } 
    </StartContext.Provider>
  )
}

export const useSateContext = () => useContext(StartContext);
