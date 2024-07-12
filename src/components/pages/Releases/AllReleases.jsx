import { Link } from "react-router-dom";


const AllReleases = () => {
    return (
        <div>
            <div className="flex justify-between my-7">
              <input type="text" placeholder="Type & Enter toSearch" className="input input-primary" name="" id="" />
              {/* onClick={() => handleShowModal()} */}
              <Link to={'/addReleases'}><button className="btn bg-black text-white rounded-3xl">Create</button></Link>
            </div>
            <div className="bg-stone-300 flex justify-between p-3 rounded-3xl font-semibold">
              <p>Profile</p>
              <p>Releases</p>
            </div>
             {/* <AllLabel label={label} refetch={refetch} /> */}
        </div>
    );
};

export default AllReleases;