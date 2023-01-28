import axios from "axios";
// import queryString from "query-string";
import queryString from "query-string";

const authToken = {
    headers: {
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9uYW1lIjoiY2MiLCJjdXN0b21lcl9lbWFpbCI6ImNjQGdtYWlsLmNvbSIsImN1c3RvbWVyX3Bhc3N3b3JkIjoiJDJiJDEwJGw0OFd1NVRKbjFOcHVjcUEyWC5hd084L0lTdzFKL1Jod2x4RWY5UVBIa1p1WXhVemhscEVlIiwiaWF0IjoxNjc0ODU0NjQ0LCJleHAiOjE2NzQ4NTgyNDR9.2iuWNrh7jf8IuOmjEN5dUBHv5-J3v3dkATMFausfm6Y"
    }
}

export class RestFulService {
    //SET HEADER
    async getHeader(option) {
        debugger
        let headers = {};

        if (option & option.headers) {
            let { headers: customHeader } = option;
            headers = customHeader;
            return headers;
        }

        const token = localStorage.getItem("token");
        if (token && typeof (token) === 'string') {
            headers.authorization = `bearer ${token.replace(/['"]+/g, "")}`
        }
        headers['content-type'] = "application/json";
        headers = { ...headers };
        return headers;
    }

    //HTTP GET METHOD
    // async get(url, queryParams = null, option = null) {
    //     const header = await this.getHeader(option);

    //     return axios.get(url, {
    //         headers: header,

    //         params: queryParams,
    //         paramsSerializer: queryString.stringify(params)
    //     });
    // }

    async get(url, queryParameter = null, option = null) {
        const header = await this.getHeader(option);
        return axios.get(url, { headers: header, params: queryParameter, paramsSerializer: queryString.stringify(queryParameter) })
    }

    //HTTP POST METHOD
    async post(url, data, option = null) {
        debugger
        if (option === null) {
            option = authToken;
        }
        const header = await this.getHeader(option);

        return axios.post(url, data, { header })
    }

    //HTTP PUT METHOD
    // async put(url, data, queryParams = null, option = null) {
    //     const header = await this.getHeader(option);
    // }

    //HTTP PATCH METHOD
    // async patch(url, data, option = null) {
    //     const header = await this.getHeader(option);
    // }

    //HTTP DELETE METHOD
    // async delete(url, option = null) {
    //     const header = await this.getHeader(option);
    // }
}