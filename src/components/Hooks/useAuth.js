import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const useAuth = () => {
    const useAuth = useContext(AuthContext);
    return useAuth 
};

export default useAuth;