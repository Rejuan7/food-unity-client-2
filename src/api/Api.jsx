import axios from "axios";

const Api = axios.create({
  baseURL: "https://food-unity-server-2.vercel.app",
});

export default Api;
