import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  const {login , user} = useAuth();
    // show password
    const [pass, setPass] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit
  } = useForm()
  const onSubmit = async(data) => {
    const {email,password} = data
    try {
      
        const userInfo = {
          userEmail : email,
          password : password,
        }
        //2. User Registration
        const res = await login(userInfo);
        if (res?.Status === "Success") {
            navigate( "/");
          }
         
      } catch (err) {
        console.log(err)
        toast.error(err.message || "Failed to login");
      }
  }
  if(user) {
    navigate('/')
  }

    return (
        <div className="my-10">
      <div className="flex w-full border max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl p-10">
          <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: 'url(https://i.ibb.co/MfYyWhP/login.jpg)'}} ></div>
      
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 border ">
              <div className="flex justify-center mx-auto">
                  <h4 className='font-semibold bg-red-400 p-2 rounded-2xl text-white'>DLR</h4>
              </div>
      
              <p className="mt-3 text-xl text-center ">
                  Welcome back!
              </p>
      
             
      
            
      
              <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Email Address</label>
                  <input
                  {...register("email",{required: true})}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email" />
              </div>
      
              <div className="mt-4">
                  <div className="flex justify-between">
                      <label className="block mb-2 text-sm font-medium " >Password</label>
                      <a href="#" className="text-xs  hover:underline">Forget Password?</a>
                  </div>
      
                  <div className="flex items-center gap-5">
                  <input 
                   {...register("password",{required: true})}
                  id="loggingPassword" className="block w-full px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                  type={pass ? "text" : "password"} />
                  
                   <a onClick={() => setPass(!pass)} >
                    {pass ? <FaRegEye className="" /> : <FaRegEyeSlash />}
                  </a>
                  </div>
              </div>
      
              <div className="mt-6">
                  <button type="submit" className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                      Sign In
                  </button>
              </div>
              </form>
      
              <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  md:w-1/4"></span>
      
                  <Link to='/register' className="text-xs  uppercase  hover:underline text-rose-500">or sign up</Link>
      
                  <span className="w-1/5 border-b md:w-1/4"></span>
              </div>
          </div>
      </div> 
  </div>
    );
};

export default Login;