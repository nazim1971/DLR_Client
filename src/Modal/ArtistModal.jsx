import { useForm } from "react-hook-form";
import useAuth from "../components/Hooks/useAuth";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";
import { imageUpload } from "../components/Hooks/imageUpload";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { MdClose } from "react-icons/md";


const ArtistModal = ({refetch}) => {

    const {loader, setLoader,user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      const image = data.image[0];
      const { labelName } = data;
      try {
        setLoader(true)
        // 1. Upload image and get image url
        const image_url = await imageUpload(image);
        setLoader(false)
        const labelInfo = {
          userEmail: user?.email,
          labelName,
          photoUrl: image_url
        };
        await axiosPublic.post("/v1/label/addLabel", labelInfo).then((res) => {
            console.log(res.data);
          if (res.data.insertId) {
            toast.success("new Label added succesfully");
            document.getElementById("my_modal_1").close();
            refetch();
          }
        });
      } catch (err) {
        toast.error(err.message);
      }
    };


    return (
        <>
        
        <dialog id="my_modal_1" className="modal">
          
          <div className="modal-box">

          <div className="flex justify-between items-center border-b pb-2">
          <div className="text-xl font-semibold text-center">
               Create Artist
              </div>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error text-white text-xl btn-circle"> <MdClose/> </button>
              </form>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">{name} </label>
                <input
                  {...register("artistName", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">{name} </label>
                <input
                  {...register("artistEmail", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
  
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Select Image
                </label>
                <input
                  placeholder="Photo Url"
                  {...register("image", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  accept="image/*"
                />
              </div>
  
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                 {
                        loader ? <TbFidgetSpinner className="animate-spin m-auto" />
                        :
                        'Continue'
                      }
                </button>
              </div>
            </form>
            
          </div>
        </dialog>
      </>
    );
};

export default ArtistModal;