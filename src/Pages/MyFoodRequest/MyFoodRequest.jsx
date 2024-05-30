import { Helmet } from "react-helmet-async";
import Api from "../../api/Api";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const myfoodFn = async () => {
    const res = await Api.get(`/myFood/${user.email}`);
    return res?.data;
  };
  const {
    data: myFood,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["myFoods"],
    queryFn: myfoodFn,
  });

  if (isLoading || isPending) {
    return <Skeleton count={10}></Skeleton>;
  }

  return (
    <div>
      <Helmet>
        <title>My Food Request | Food Unity</title>
      </Helmet>

      <div className="grid gap-6 grid-cols-3">
        {myFood?.map((food) => (
          <div
            key={food?._id}
            className="  max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 bg-base-200"
          >
            <div className="flex space-x-4">
              <img
                alt=""
                src={food?.donatorImage}
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  Donator Name: {food?.donatorName}
                </a>
              </div>
            </div>
            <div>
              <img
                src={food?.foodImage}
                alt=""
                className="object-cover w-full mb-4 h-60 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">
                Food Name: {food?.foodName}
              </h2>
              <p className="text-xl">Status: {food?.foodStatus}</p>
              <p className="text-xl">Quantity: {food?.foodQuantity}</p>
              <p className="text-xl">Expire Date: {food?.expire}</p>
              <p className="text-xl">Request Date: {food?.currentDate}</p>
              <p className=" font-medium dark:text-gray-600">
                Additional Notes: {food?.notes}
              </p>
            </div>
            <div className="">
              {/* <div className="space-x-2">
               <Link to={`/details/${_id}`}>
                 <button className="btn btn-outline w-full">View Details</button>
               </Link>
             </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
