import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";
import toast from "react-hot-toast";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null)

  
  

    const login = async (input) => {
        try {
            setLoader(true);
            const res = await axiosPublic.post("/v1/user/login", input, { withCredentials: true });
            if (res?.data?.Status === "Success") {
                setUser(res?.data?.User);
                localStorage.setItem("user", JSON.stringify(res?.data?.User));
                toast.success("Login Successfully");
            } else {
                toast.error(res?.data?.Status || "Login failed");
            }
            return res?.data;
        } catch (err) {
            console.error(err);
            toast.error(err.message || "Failed to login");
            return { Status: "Error", message: err.message || "Failed to login" };
        } finally {
            setLoader(false);
        }
    };

    //logout user
const logout = async () => {
    try {
        setLoader(true);
        const res = await axiosPublic.post("/v1/user/logout", null, { withCredentials: true });
        if (res?.data?.Status === "Success") {
            localStorage.removeItem("user"); // Clear user data from localStorage
            toast.success("Logged out successfully");
        } else {
            toast.error(res?.data?.Status || "Logout failed");
        }
    } catch (err) {
        console.error(err);
        toast.error(err.message || "Failed to logout");
    } finally {
        setLoader(false);
    }
};

  
    useEffect(()=>{
      const storedUser = localStorage.getItem("user");
      if(storedUser){
        setUser(JSON.parse(storedUser));
      }
      setLoader(false)
    },[])

    const allValue = {
        loader, setLoader, login, user, logout
    }
    
    return (
        <AuthContext.Provider value={allValue} >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;