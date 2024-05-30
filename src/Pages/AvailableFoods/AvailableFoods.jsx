import { useState, useEffect } from "react";
import AvailableFood from "../availableFood/AvailableFood";
import Api from "../../api/Api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AvailableFoods = () => {
  const [isGridTwoColumns, setIsGridTwoColumns] = useState(false);
  const [foods, setFoods] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [sortByExpireDate] = useState(false);

  const handleSortByExpireDate = () => {
    const sortedFoods = [...foods].sort((a, b) => {
      return new Date(b.expire) - new Date(a.expire);
    });
    setFoods(sortedFoods);
  };

  const toggleLayout = () => {
    setIsGridTwoColumns(!isGridTwoColumns);
  };

  useEffect(() => {
    fetchData();
  }, [searchData, sortByExpireDate]);

  const fetchData = async () => {
    setLoader(true);
    const res = await Api.get(`/food?name=${searchData ? searchData : ""}`);
    let sortedFoods = res?.data;
    if (sortByExpireDate) {
      sortedFoods = [...res.data].sort(
        (a, b) => new Date(a.expire) - new Date(b.expire)
      );
    }
    setFoods(sortedFoods);
    setLoader(false);
  };

  return (
    <div>
      <div className="grid grid-cols-3 mt-8">
        <div>
          <button onClick={toggleLayout} className="btn btn-outline">
            Change Layout
          </button>
        </div>

        <div>
          <details className="dropdown">
            <summary className="m-1 btn">Sort By</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a onClick={handleSortByExpireDate}>Expired Date</a>
              </li>
            </ul>
          </details>
        </div>

        <div>
          <fieldset className="w-full space-y-1 dark:text-gray-800">
            <label className="block text-sm font-medium">Search Here</label>
            <div className="flex">
              <input
                onChange={(e) => setSearchData(e.target.value)}
                type="text"
                placeholder="Search by food name"
                className="flex flex-1 w-full p-3 border sm:text-sm rounded-lg focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
              />
            </div>
          </fieldset>
        </div>
      </div>
      {loader ? (
        <Skeleton count={5}></Skeleton>
      ) : (
        <div
          className={`grid ${
            isGridTwoColumns ? "grid-cols-2" : "lg:grid-cols-3"
          } gap-5 mt-10`}
        >
          {foods.length > 0 ? (
            foods?.map((food) => (
              <AvailableFood key={food._id} food={food}></AvailableFood>
            ))
          ) : (
            <div className="text-center p-4 my-5 text-3xl font-semibold">
              No Data Found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
