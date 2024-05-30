import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AvailableFood = ({ food }) => {
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
  } = food;

  return (
    <div>
      <Helmet>
        <title> Available Food | Food Unity</title>
      </Helmet>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 bg-base-200">
        <div className="flex space-x-4">
          <img
            alt=""
            src={donatorImage}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              Donator Name: {donatorName}
            </a>
          </div>
        </div>
        <div>
          <img
            src={foodImage}
            alt=""
            className="object-cover w-full mb-4 h-60 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">Food Name: {foodName}</h2>
          <p className="text-xl">Status: {foodStatus}</p>
          <p className="text-xl">Quantity: {foodQuantity}</p>
          <p className="text-xl">Expire Date: {expire}</p>
          <p className=" font-medium dark:text-gray-600">
            Additional Notes: {notes}
          </p>
        </div>
        <div className="">
          <div className="space-x-2">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-outline w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
