import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyManageFood from "./MyManageFood";
import Api from "../../api/Api";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);

  const funF = async () => {
    const fetchData = await Api.get(`/food/${user?.email}`);
    console.log(fetchData);
    return fetchData?.data;
  };

  const {
    data: food,
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["jl;wwwwwwww"],
    queryFn: funF,
  });

  if (isLoading || isPending) {
    return <Skeleton count={7}></Skeleton>;
  }

  // useEffect(() => {

  //     fetch(`https://food-unity-server-sand.vercel.app/food/${user?.email}`)

  //         .then(res => res.json())
  //         .then(data => {
  //           setFood(data);

  //         })
  //         .catch(error => {
  //             console.error("Error fetching foodss:", error);
  //         });
  // }, [user]);

  return (
    <div>
      <div className="">
        {food?.map((item) => (
          <MyManageFood refetch={refetch} key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ManageMyFoods;
