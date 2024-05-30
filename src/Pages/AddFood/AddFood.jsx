import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Api from "../../api/Api";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = async (event) => {
    event.preventDefault();
    const form = event.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = parseInt(form.foodQuantity.value);
    const pickupLocation = form.pickupLocation.value;
    const expire = form.expire.value;
    const notes = form.notes.value;
    const email = user?.email;
    const donatorName = user?.displayName;
    const donatorImage = user?.photoURL;
    const foodStatus = "Available";

    const newFood = {
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
    };

    console.log(typeof newFood.foodQuantity);

    // fetch('https://food-unity-server-2.vercel.app/food', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newFood),
    // })
    const res = await Api.post("/food", newFood);
    if (res?.data?.acknowledged) {
      Swal.fire({
        title: "Success",
        text: "Added to database successfully",
        icon: "success",
        confirmButtonText: "Done",
      }).then(() => {
        // Reload the page after navigating
        location.reload();
      });
    }
    console.log(res?.data?.acknowledged);

    // if (data.insertedId) {
    //   Swal.fire({
    //     title: "Success",
    //     text: "Added to database successfully",
    //     icon: "success",
    //     confirmButtonText: "Done",
    //   }).then(() => {

    //     // Reload the page after navigating
    //     location.reload();
    //   });
    // }
  };
  return (
    <div>
      <Helmet>
        <title>Add Food | Food Unity</title>
      </Helmet>

      <div className=" bg-orange-300 mt-10 p-7 md:p-10 lg:p-24 rounded-xl">
        <h2 className="text-3xl font-extrabold">Add Food</h2>
        <form onSubmit={handleAddFood}>
          <div className=" grid  lg:grid-cols-2 gap-5">
            <div className="mb-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <label className="input-group">
                  <input
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
            value="Add"
            className="btn btn-block bg-slate-300"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddFood;
