import { FaRegUserCircle } from "react-icons/fa";


const Home = () => {
   
    return (
        <div className="h-full">
          {/* box-1 */}
          <div className="border-b h-[10%] ">
            <p className="text-xl font-semibold w-full p-3 ">Home</p>
          </div>

         <div className=" flex w-full h-[90%] ">

         {/* box-2 */}
         <div className="w-2/3 h-full flex flex-col overflow-y-auto p-3" >

           <div className=" flex  items-end border-2 w-full rounded-xl bg-blue-500">
          <div className="h-72 flex  items-end">
          <div className="text-white p-5">
              <h1>Uploader</h1>
              <p>Create and manage releases</p>
              <div className="flex gap-5 mt-2">
                <button className="btn rounded-3xl">Create</button>
                <button className="btn rounded-3xl">My Releases</button>
              </div>
            </div>
          </div>
           </div>
           {/* Artist */}

           <div className="flex gap-2 p-2 items-center text-black">
           <FaRegUserCircle className="text-slate-400" />
           <p>Artists</p>
           </div>

          {/* Artist Image */}
          <div>
            <p className="h-14 flex justify-center items-center text-2xl rounded-full border-dotted w-14 border-2 ">+</p>
          </div>

          {/* all album or img */}
          <div className="my-10 grid md:grid-cols-3 gap-3 xl:grid-cols-3">

          <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  
</div>

<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
</div>
<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  
</div>

<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
</div>
<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  
</div>

<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
</div>
<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
</div>
<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
</div>


          </div>

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

export default Home;