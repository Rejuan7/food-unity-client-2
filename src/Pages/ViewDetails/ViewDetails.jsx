import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Api from "../../api/Api";
import toast from "react-hot-toast";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const { _id } = useParams();
  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
    }
  }, [user]);

  const [currentDate, setCurrentDate] = useState("");
  const handleChange = async () => {
    const requestBody = {
      myEmail: user?.email,
    };

    try {
      const res = await Api.put(`/myFood/${_id}`, requestBody);
      if (res?.data?.modifiedCount > 0) {
        navigate("/myFood");
        toast.success("Successfully Add");
      }
    } catch (error) {
      console.error("Error updating food details:", error);
      toast.error("Error updating food details. Please try again.");
    }
  };

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    };

    setCurrentDate(getCurrentDate());
  }, []);

  const foodDetails = useLoaderData();

  const food = foodDetails.find((food) => food._id === _id);
  console.log(_id);
  if (!food) {
    return <div>No item found</div>;
  }

  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expire,
    notes,
    email,
    donatorName,
    donatorImage,
  } = food;

  return (
    <div className=" flex justify-center">
      <div className="hero w-[1000px] mt-8 mb-2 bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={foodImage} className="w-full h-96 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{foodName}</h1>
            <p>Donar Name: {donatorName}</p>
            <p>Pickup Location: {pickupLocation}</p>
            <p className="py-6">Quantity: {foodQuantity}</p>
            <p>Expire Date: {expire}</p>
            <div className="flex justify-center mt-5">
              {/* Request Button */}
              <button
                className="btn w-3/4 text-xl btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Request
              </button>

              {/* Modal */}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Request Form</h3>
                  <div className="py-4">
                    <form>
                      <div className=" grid  lg:grid-cols-2 gap-5">
                        <div className="mb-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                type="text"
                                name="foodName"
                                defaultValue={foodName}
                                placeholder="Food Name"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Food Image </span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                defaultValue={foodImage}
                                type="text"
                                name="foodImage"
                                placeholder="Food Image"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>

                        <div className="mb-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Food Quantity</span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                defaultValue={foodQuantity}
                                type="text"
                                name="foodQuantity"
                                placeholder="Food Quantity"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>
                        <div className=" mb-2">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">
                                Pickup Location
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                defaultValue={pickupLocation}
                                type="text"
                                name="pickupLocation"
                                placeholder="Pickup Location"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>
                        <div className=" mb-2">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Food Id</span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                defaultValue={_id}
                                type="text"
                                name="_id"
                                placeholder="Food id"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>
                        <div className=" mb-2">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Donator Email</span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                defaultValue={email}
                                type="text"
                                name="email"
                                placeholder="Donor Email"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>
                        <div className=" mb-2">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Donator Name</span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                defaultValue={donatorName}
                                type="text"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                defaultValue={userEmail}
                                type="text"
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
                                disabled
                                required
                                defaultValue={expire}
                                className="input input-bordered w-full"
                                type="date"
                                name="expire"
                                placeholder="Expire Date"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Request Date</span>
                            </label>
                            <label className="input-group">
                              <input
                                disabled
                                value={currentDate}
                                className="input input-bordered w-full"
                                type="date"
                                name="expire"
                                placeholder="Expire Date"
                                id=""
                              />
                            </label>
                          </div>
                        </div>
                        <div className=" mb-2">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">
                                Additional Notes
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                defaultValue={notes}
                                type="text"
                                name="notes"
                                placeholder="Additional Notes"
                                className="input input-bordered w-full"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-action">
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_1").close()
                      }
                    >
                      Close
                    </button>
                    <button onClick={handleChange} className="btn btn-primary">
                      Confirm Request
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
