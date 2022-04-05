import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-a32d5/us-central1/api" // The API endpoint cloud fucntion URL
});
//in cloud functions we only deploy the backend //
export default instance;