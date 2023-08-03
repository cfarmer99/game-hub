import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c88cdd34b8b74649a08d727f41f268be",
  },
});
