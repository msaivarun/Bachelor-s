// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Conditionally set the initial state based on some condition
  const initialAuthState = false; // Your condition here;
  
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
