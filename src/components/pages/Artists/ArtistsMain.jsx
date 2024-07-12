import { useQuery } from "@tanstack/react-query";
import ArtistModal from "../../../Modal/ArtistModal";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllArtists from "./AllArtists";
import useAuth from "../../Hooks/useAuth";




const ArtistsMain = () => {


  const axiosPublic = useAxiosPublic();
  const {user} = useAuth()
  //get all label
  const {data: artist=[], refetch} = useQuery({
 queryKey: ['allArtist'],
 queryFn: async()=>{
  const {data} = await axiosPublic(`/v1/artist/allArtist/${user?.userEmail}`)
  console.log(data);
  return data;
  
 }
  })

  const handleShowModal = () => {
    document.getElementById('my_modal_1').showModal();
  };

    return (
        <div className="h-full">
            
          {/* box-1 */}
          <div className="border-b h-[10%] ">
            <p className="text-xl font-semibold w-full p-3 ">Artist</p>
          </div>

         <div className=" flex w-full h-[90%] ">

         {/* box-2 */}
         <div className="w-2/3 h-full flex flex-col overflow-y-auto p-3" >
              <div className="flex justify-between my-7">
                <input type="text" placeholder="Type & Enter toSearch" className="input input-primary" name="" id="" />
                <button onClick={() => handleShowModal()} className="btn bg-black text-white rounded-3xl">Create</button>
              </div>
              <div className="bg-stone-300 flex justify-between p-3 rounded-3xl font-semibold">
                <p>Profile</p>
                <p>Releases</p>
              </div>
               <AllArtists artist={artist} refetch={refetch} />

          </div>

          {/* Box -3 */}
          <div className="h-full border-l  w-1/3 p-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ullam veniam quis! Repellendus aut at id perferendis modi saepe, suscipit natus, consequatur nostrum incidunt, reprehenderit reiciendis nobis perspiciatis laboriosam dolore.
          </p>
         </div>
         </div>
   <ArtistModal refetch={refetch} />
        </div>
    );
};

export default ArtistsMain;