import axios from "axios"

const instance = axios.create({
    baseURL:"https://portfolio-backend-awcx.onrender.com/api/v1/",
    withCredentials:true
})

export default instance