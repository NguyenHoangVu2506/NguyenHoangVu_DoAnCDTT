import axios from "axios";


const httpapi = axios.create({
    baseURL: 'http://localhost/nguyenhoanvu/public/api',
    timeout: 7000,
    headers: { 'X-Custom-Header': 'foobar' }
});
export default httpapi;