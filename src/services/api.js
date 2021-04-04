import axios from "axios";


const api = axios.create({
  baseURL: `https://94504e623a37.ngrok.io`
});

export { api };