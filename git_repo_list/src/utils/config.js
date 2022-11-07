import axios from "axios";

//BASED URL
export default axios.create({
   baseURL: "https://api.github.com/",
});
