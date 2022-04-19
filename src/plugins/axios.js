import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

console.log("BASE URL => " + process.env.VUE_APP_API_BASE_URL);

export default axios;
