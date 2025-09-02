import { createContext, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import {toast} from 'react-hot-toast';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user ,setUser] =useState("");
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

    // logout function to clear the token
  // and remove it from localStorage
  const LogoutUser = () => {

    const tokenExisted = localStorage.getItem("token");

    if(tokenExisted){
      setToken(null);
      localStorage.removeItem("token");
      toast.success("Logout successful");
    }
    
    
  };

  // authentication context provider -to get the currently logged-in  user data 
  const userAuthentication = async (customToken) => {
    try {
      const response =await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`,{
        method:"Get",
        headers:{
          // "Content-type":"application/json",
          "Authorization": `Bearer ${(customToken||token)}`,

        }
      })
      
      if(response.ok){
        const data = await response.json();
        console.log("User data:", data.userData);
        setUser(data.userData);
      }else if(response.status === 401){
        setToken(null);
        setUser("");
        localStorage.removeItem("token");
        toast.error("session expired.login again")
        navigate("/login");

      }
    } catch (error) {
      console.error("Error during user authentication:", error);
      toast.error("network error, try again!!")
      
    }
  }
    
  
  useEffect(()=>{
    userAuthentication();
  },[]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser,user,userAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
