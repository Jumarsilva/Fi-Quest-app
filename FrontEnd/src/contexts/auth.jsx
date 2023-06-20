import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext({
  authenticated: false,
  loading: true,
  setAuthenticated: () => {},
});


export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const token = localStorage.getItem("authToken");
    if (token){
      setAuthenticated(true);
    } else{
      setAuthenticated(false)
      setLoading(false);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

