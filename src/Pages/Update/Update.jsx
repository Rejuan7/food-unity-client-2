import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Api from "../../api/Api";

const Update = () => {
  const { user } = useContext(AuthContext);
  const updateFood = useLoaderData();
  console.log(updateFood);
  const { _id } = useParams();
  console.log(_id);
  const food = updateFood.find((item) => item._id === _id);
  const { foodName, foodImage, foodQuantity, pickupLocation, expire, notes } =
    food;

  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = parseInt(form.foodQuantity.value);
    const pickupLocation = form.pickupLocation.value;
    const expire = form.expire.value;
    const notes = form.notes.value;

    const updateFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expire,
      notes,
    };

    console.log(updateFood);

    fetch(`https://food-unity-server-2.vercel.app/editFood/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Food Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div className=" bg-orange-300 mt-10 p-7 md:p-10 lg:p-24 rounded-xl">
        <h2 className="text-3xl font-extrabold">Add Food</h2>
        <form onSubmit={handleUpdateFood}>
          <div className=" grid  lg:grid-cols-2 gap-5">
            <div className="mb-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={foodName}
                    required
                    type="text"
                    name="foodName"
                    placeholder="Food Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="mb-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Image </span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={foodImage}
                    required
                    type="text"
                    name="foodImage"
                    placeholder="Food Image"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="mb-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Quantity </span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={foodQuantity}
                    required
                    type="number"
                    name="foodQuantity"
                    placeholder="Food Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className=" mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={pickupLocation}
                    required
                    type="text"
                    name="pickupLocation"
                    placeholder="Pickup Location"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Expire Date</span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={expire}
                    required
                    className="input input-bordered w-full"
                    type="date"
                    name="expire"
                    placeholder="Expire Date"
                  />
                </label>
              </div>
            </div>

            <div className=" mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={notes}
                    required
                    type="text"
                    name="notes"
                    placeholder="Additional Notes"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Update"
            className="btn btn-block bg-slate-300"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Update;
