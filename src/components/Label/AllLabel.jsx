import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AllLabel = () => {
        const axiosPublic = useAxiosPublic();
    //get all label
    const {data: label=[]} = useQuery({
   queryKey: ['allLabel'],
   queryFn: async()=>{
    const {data} = await axiosPublic('/v1/label/allLabel')
    return data;
    
   }
    })

    return (
        <div className="my-8">
        <div className="grid grid-cols-1 gap-4">
            {
                label.map(i=> 
                    <div key={i.id} className="flex justify-between">
            <div className="flex gap-4">
            <p className="h-14 w-14 bg-slate-300 rounded-xl"></p>
            <div>
                <p> {i.labelName} </p>
                <p className="text-slate-400">ID {i.id} </p>
            </div>
            </div>
            <div className="flex gap-4 items-center">
            <p>o</p>
            <MdDeleteForever className="text-red-500" />
            </div>
        </div>
                )
            }
        </div>
    </div>
    );
};

export default AllLabel;