import { useForm } from "react-hook-form";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";
import { imageUpload } from "../components/Hooks/imageUpload";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { useState } from "react";


const UpdateArtistModal = ({id, refetch}) => {
    const [loader,setLoader] = useState(false)
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
      const image = data.image[0];
       // Initialize image_url as an empty string
      const { artistName, artistEmail } = data;
      try {
        let image_url = id?.photoUrl || "";
       if(image !== image_url) {
        setLoader(false)
       }
        // 1. Upload image and get image url
       if(image){
        setLoader(true)
        image_url = await imageUpload(image);
        setLoader(false)
       }
        
        const artistInfo = {
          artistName,
           artistEmail,
          photoUrl: image_url
        };
        await axiosPublic.put(`/v1/artist/updateArtist/${id?.id}`, artistInfo).then((res) => {
            console.log(res.data);
          if (res.data.affectedRows > 0) {
            toast.success("update the label succesfully");
            document.getElementById("my_modal_2").close();
            refetch();
            
            reset()
          }
        });
      } catch (err) {
        toast.error('Update error', err.message);
      }
    };
    return (
        <>
        
        <dialog id="my_modal_2" className="modal">
          
          <div className="modal-box">

          <div className="flex justify-between items-center border-b pb-2">
          <div className="text-xl font-semibold text-center">
               Update Artist
              </div>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error text-white text-xl btn-circle"> <MdClose/> </button>
              </form>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium "> Artist Name </label>
                <input
                defaultValue={id?.artistName}
                  {...register("artistName", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="john deo"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium "> Artist Email </label>
                <input
                 defaultValue={id?.artistEmail}
                  {...register("artistEmail", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="johnDeo@gmail.com"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Select Image
                </label>
                <div className="grid grid-cols-2 justify-items-center">
                <input 
                  placeholder="Photo Url"
                  {...register("image")}
                  className=" w-full text-center pt-5 pl-4 border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  accept="image/*"
                />
                {
                    id?.photoUrl && <img className="h-20 w-20" src={id.photoUrl} alt="" />
                }
                </div>
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

export default UpdateArtistModal;