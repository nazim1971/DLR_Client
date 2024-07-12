import { useFieldArray, useForm } from "react-hook-form";
import useAuth from "../components/Hooks/useAuth";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";
import { imageUpload } from "../components/Hooks/imageUpload";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { MdClose, MdDelete } from "react-icons/md";


const ArtistModal = ({refetch}) => {

    const {loader, setLoader,user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit , control} = useForm();

    const { fields, append,remove } = useFieldArray({
      control,
      name: 'socialAccounts'
    });

    const onSubmit = async (data) => {
      const image = data.image[0];
      const { artistName, artistEmail, socialAccounts } = data;
      try {
        setLoader(true)
        // 1. Upload image and get image url
        const image_url = await imageUpload(image);
        setLoader(false)
        const artistInfo = {
          userEmail: user?.userEmail,
          artistName,
          artistEmail,
          photoUrl: image_url,
          socialAccounts 
        };
        await axiosPublic.post("/v1/artist/addArtist", artistInfo).then((res) => {
            console.log(res.data);
          if (res.data.insertId) {
            toast.success("new Label added succesfully");
            document.getElementById("my_modal_1").close();
            refetch();
          }
        });
      } catch (err) {
        setLoader(false);
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
                <label className="block mb-2 text-sm font-medium "> Artist Name </label>
                <input
                  {...register("artistName", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="john deo"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium "> Artist Email </label>
                <input
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
                <input
                  placeholder="Photo Url"
                  {...register("image", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  accept="image/*"
                />
              </div>
              <div className="text-center text-slate-400 text-xl border p-5 mt-4">
              <button type="button" onClick={() => append({ name: '', url: '' })}>
      +  Add Social Account
      </button>
              </div>
<div className="border my-5">
  
{fields.map((item, index) => (
        <div key={item.id} className="flex gap-2 my-5 p-2">
          <input
            type="text"
            className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Social Account Name"
            {...register(`socialAccounts.${index}.name`, { required: true })}
          />
          <input
            type="url"
            className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Social Account URL"
            {...register(`socialAccounts.${index}.url`, { required: true })}
          />
            <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-2 text-xl text-red-500"
                >
                  <MdDelete/>
                </button>
        </div>
      ))}
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