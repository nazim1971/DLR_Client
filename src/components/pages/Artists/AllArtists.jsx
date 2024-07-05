import { MdDeleteForever } from "react-icons/md";

const AllArtists = () => {
    return (
        <div className="my-8">
            <div className="flex justify-between">
                <div className="flex gap-4">
                <p className="h-14 w-14 bg-slate-300 rounded-xl"></p>
                <div>
                    <p>Alex</p>
                    <p className="text-slate-400">ID 1011</p>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                <p>o</p>
                <MdDeleteForever className="text-red-500" />
                </div>
            </div>
        </div>
    );
};

export default AllArtists;