import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-a32d5.cloudfunctions.net/api"
  
// The API endpoint cloud fucntion URL
//http://localhost:5001/clone-a32d5/us-central1/api

});
//in cloud functions we only deploy the backend //
export default instance;