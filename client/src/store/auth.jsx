import { createContext, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
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
    setToken(null);
    localStorage.removeItem("token");
  };

  // authentication context provider -to get the currently logged-in  user data 
  const userAuthentication = async () => {
    try {
      const response =await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`,{
        method:"Get",
        headers:{
          // "Content-type":"application/json",
          "Authorization": `Bearer ${(token)}`,

        }
      })

      if(response.ok){
        const data = await response.json();
        console.log("User data:", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error during user authentication:", error);
      
    }
  }
    
  
  useEffect(()=>{
    userAuthentication();
  },[]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser,user }}>
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
