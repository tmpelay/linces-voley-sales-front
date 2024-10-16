import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, logoutRequest, verifyTokenRequest } from "../api/auth";

export const AuthContext = createContext({
  signin: () => {},
  user: {},
  isAuthenticated: false,
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signin = async (user) => {
    const res = await loginRequest(user);
    setUser(res.data.user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    const res = await logoutRequest();
    if (res.data) {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const checkLogin = async () => {
    const cookies = Cookies.get();

    if (!cookies.token) {
      setUser(null);
      setIsAuthenticated(false);
      return;
    }

    try {
      const res = await verifyTokenRequest();

      if (!res.data) {
        setUser(null);
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.log(error);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ signin, user, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
