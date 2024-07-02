import AllLabel from "./AllLabel";

const Labels = () => {
    return (
        <div className="h-full">
            
        {/* box-1 */}
        <div className="border-b h-[10%] ">
          <p className="text-xl font-semibold w-full p-3 ">Labels</p>
        </div>

       <div className=" flex w-full h-[90%] ">

       {/* box-2 */}
       <div className="w-2/3 h-full flex flex-col overflow-y-auto p-3" >
            <div className="flex justify-between my-7">
              <input type="text" placeholder="Type & Enter toSearch" className="input input-primary" name="" id="" />
              <button className="btn bg-black text-white rounded-3xl">Create</button>
            </div>
            <div className="bg-stone-300 flex justify-between p-3 rounded-3xl font-semibold">
              <p>Profile</p>
              <p>Releases</p>
            </div>
             <AllLabel/>

        </div>

        {/* Box -3 */}
        <div className="h-full border-l  w-1/3 p-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ullam veniam quis! Repellendus aut at id perferendis modi saepe, suscipit natus, consequatur nostrum incidunt, reprehenderit reiciendis nobis perspiciatis laboriosam dolore.
        </p>
       </div>
       </div>

       
      </div>
    );
};

export default Labels;