import axios from "axios"


export class RestFulService {
    //HHTP GET METHOD
    // async get(url) {
    //     debugger
    //     return axios.get(url)
    // }

    async get(url){
        debugger
        return axios.get(url);
    }

    //HTTP POST METHOD
    async post(url, data) {
        return axios.post(url, data)
    }
}