import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import useAuth from "../Hooks/useAuth";

const Test = () => {
    const nagivate = useNavigate();

    const {user, logout}  = useAuth();

    const handleLogout =async ()=>{
    await logout();
    nagivate('/login');
    }


    return (
        <div className="w-1/3 h-full p-3 text-black flex flex-col  ">
          
       <div>
       <p className="h-10 ml-4 mt-4  w-14 bg-red-400 text-center">DLR</p>
           <div className="flex justify-center my-10">
           <button className="btn bg-red-600 text-center w-52 ">Create</button>
           </div>
       </div>
           <div className="flex-1 overflow-y-auto">
           <Sidebar/>
           </div>
           <div className="flex justify-center mt-4">
           {
            user?
            <button onClick={handleLogout} className="btn bg-red-600  text-center w-52 " >
            
            Logout
         </button>
             : <Link to={'/login'} > <button  className="btn bg-red-600  text-center w-52 " >
            
            Login
         </button></Link> 
           }
           
           </div>
        </div>
    );
};

export default Test;