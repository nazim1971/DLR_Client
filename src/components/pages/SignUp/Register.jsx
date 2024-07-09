import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";


const Register = () => {

  const {user} = useAuth();
    const axiosPublic = useAxiosPublic()
  // show password
      const [pass, setPass] = useState(false);
      const navigate = useNavigate();
 
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      setError, reset
    } = useForm()
    const onSubmit =async (data) => {
      const {email,password,name} = data
  
      console.log(data);
      // password validation
      if (password.length < 6) {
        setError("password", {
          type: "manual",
          message: "Password must be at least 6 characters long."
      })
      return
    }
      if (!/(?=.*[a-z])/.test(password)) {
        setError("password", {
          type: "manual",
          message: "Password must have at least one lowercase letter."
      })
    return
    }
      
      if (!/(?=.*[A-Z])/.test(password)) {
        setError("password", {
          type: "manual",
          message:"Password must have at least one uppercase letter."
      })
      return
    }
    
        try {
          const userInfo = {
            userName : name,
            userEmail : email,
            password : password
          }
          //2. User Registration
          await axiosPublic.post("/v1/user/addUser", userInfo).then((res) => {
            console.log("Registerd Data",res.data);
          if (res.data.insertId) {
            reset();
            toast.success('Signup Successful')
            navigate( "/login");
          }
        })
        } catch (err) {
          console.log(err)
          toast.error(err.response
            .data)
        }
  
    }
   
    if(user) navigate('/')

    return (
        <div className="my-10">
        
             <div className="flex h-full   overflow-y-auto w-full border mx-auto   rounded-lg shadow-lg  lg:max-w-4xl p-10">
            
        
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 border rounded-xl">
                <div className="flex justify-center mx-auto">
                <h4 className='font-semibold bg-red-400 p-2 rounded-2xl text-white'>DLR</h4>
                </div>
        
                <p className="mt-3 text-xl text-center ">
                Register to Get Started
                </p>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium " >Name</label>
                    <input
                    {...register("name",{required: true})}
                     className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium " >Email Address</label>
                    <input
                    {...register("email",{required: true})}
                     className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                </div>
               
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block mb-2 text-sm font-medium " >Password</label>
                        <a href="#" className="text-xs  hover:underline">Forget Password?</a>
                    </div>
        
                    <div >
                   <div className="flex items-center gap-5">
                   <input 
                     {...register("password",{required: true})}
                     className=" w-full px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                    type={pass ? "text" : "password"} />
                    
                     <a onClick={() => setPass(!pass)} >
                      {pass ? <FaRegEye className="" /> : <FaRegEyeSlash />}
                    </a>
                   </div>
                   {errors.password && (
                    <span className="text-red-600 text-center font-semibold p-1">
                      {errors.password.message}{" "}
                    </span>
                  )}
                    </div>
                </div>
        
                <div className="mt-6">
                    <button type="submit" className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Continue
                    </button>
                </div>
                </form>
        
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b  md:w-1/4"></span>
        
                    <Link to='/login' className="text-xs  uppercase  hover:underline text-rose-500">or sign in</Link>
        
                    <span className="w-1/5 border-b md:w-1/4"></span>
                </div>
            </div>
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: 'url(https://i.ibb.co/F4SRb4t/sign-up.jpg)'}} ></div>
        </div>
      </div>
    );
};

export default Register;