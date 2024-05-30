import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/Api";
import Swal from "sweetalert2";

const MyManageFood = ({ refetch, item }) => {
  console.log(item);
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expire,
    notes,
    email,
    donatorName,
    donatorImage,
    foodStatus,
  } = item;

  const handleDelete = async () => {
    // const res=await Api.delete(`/deleteFood/${_id}`)
    // console.log(res)
    // if(res?.data?.acknowledged){

    // }

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
        const res = await Api.delete(`/deleteFood/${_id}`);
        console.log(res);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your Food has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div>
      <div>
        <table className="table">
          <tr>
            <th>Food Image</th>
            <th>Food Name</th>
            <th>Donator Name</th>
            <th>Food Quantity</th>
            <th>Pickup Location</th>
            <th>Expire</th>
            <th>Notes</th>
            <th>Food Status</th>
            <th>Actions</th>
          </tr>

          {/* row */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={foodImage} alt="" />
                  </div>
                </div>
              </div>
            </td>
            <td>{foodName}</td>
            <td>{donatorName}</td>
            <td>{foodQuantity} person</td>
            <td>{pickupLocation}</td>
            <td>{expire}</td>
            <td>{notes}</td>
            <td>{foodStatus}</td>
            <td>
              <div className="join join-vertical ">
                <Link to={`/update/${_id}`}>
                  {" "}
                  <button className="btn join-item">Update</button>{" "}
                </Link>
                <button onClick={handleDelete} className="btn join-item mb-2">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyManageFood;
