import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'https://invoice-backend-a0o7.onrender.com',
    timeout:5000
})
export default axiosInstance