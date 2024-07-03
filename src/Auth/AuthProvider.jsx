import { createContext, useState } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loader, setLoader] = useState(false);

    const allValue = {
        loader, setLoader
    }
    return (
        <AuthContext.Provider value={allValue} >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;