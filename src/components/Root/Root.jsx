import { Outlet } from "react-router-dom";
import Test from "../Navber/Test";

const Root = () => {
    return (
        <div className="flex h-screen  p-4 bg-black "  >
            
           
            <Test/>
            <div className="bg-white  rounded-3xl border w-full  ">
            <Outlet/>
            </div>
        </div>
    );
};

export default Root;