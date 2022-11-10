import axios from "axios";

const axiosCLient = axios.create({
    baseURL: "http://localhost:3011",
    headers : { 
        'Content-type' : "application/json",
    },
})

export default axiosCLient