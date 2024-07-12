import AllReleases from "./AllReleases";

const ReleasesMain = () => {
  return (
    <div className="h-full">
            
    {/* box-1 */}
    <div className="border-b h-[10%] ">
      <p className="text-xl font-semibold w-full p-3 ">Releases</p>
    </div>

   <div className=" flex w-full h-[90%] ">

   {/* box-2 */}
   <div className="w-2/3 h-full flex flex-col overflow-y-auto p-3" >
       
       <AllReleases/>
    </div>

    {/* Box -3 */}
    <div className="h-full border-l  w-1/3 p-3">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ullam veniam quis! Repellendus aut at id perferendis modi saepe, suscipit natus, consequatur nostrum incidunt, reprehenderit reiciendis nobis perspiciatis laboriosam dolore.
    </p>
   </div>
   </div>

   {/* <LabelModal  name={"Label"} label={label} title={"Add Label"} refetch={refetch} /> */}
  </div>
  );
};

export default ReleasesMain;

