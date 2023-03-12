import React, { createContext, useState } from 'react';


export const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
});


export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

