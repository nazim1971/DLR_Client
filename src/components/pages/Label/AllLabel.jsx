import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UpdateLabelModal from "../../../Modal/UpdateLabelModal";


const AllLabel = ({label, refetch}) => {
    const axiosPublic = useAxiosPublic();
    const [id, setId] = useState({});

    const handleShowModal = (id) => {
        document.getElementById('my_modal_2').showModal();
        setId(id)
      };
      const handleDelete = (id)=>{
        try {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
              if (result.isConfirmed) {
                 await axiosPublic.delete(`/v1/label/deleteLabel/${id}`);
                
      
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
              refetch();
            });
          } catch (error) {
            console.error("There was an error deleting the item!", error);
          }
      }

    return (
        <div className="my-8">
        <div className="grid grid-cols-1 gap-4">
            {
                label.map(i=> 
                    <div key={i.id} className="flex justify-between">
            <div className="flex gap-4">
            {
                i.photoUrl && <img className="h-14 w-14" src={i.photoUrl} alt="" />
            }
            <div>
                <p> {i.labelName} </p>
                <p className="text-slate-400">ID {i.id} </p>
            </div>
            </div>
            <div className="flex gap-4 items-center">
            <MdUpdate onClick={() => handleShowModal(i)} />
            <MdDeleteForever onClick={()=>handleDelete(i.id)} className="text-red-500" />
            </div>
        </div>
                )
            }
        </div>
        <UpdateLabelModal id={id} name={'Label'} title={'Add Label'} refetch={refetch} />
    </div>
    );
};

export default AllLabel;