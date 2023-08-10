import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1f483c1aa4734af392199a3bf17c8a56",
  },
});
