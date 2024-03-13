import axios from "axios";
import {AppOptions} from "../../AppOptions";
import { Slide, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

const headers = {
    'Content-Type': 'application/json',
/*    'Authorization': 'Bearer yourAccessToken', // Add any additional headers as needed*/
};



axios.interceptors.request.use(
    (response) => {
        console.log("config");
        console.log(response);
        return response;
    },
    (error) => {

        const expectedError =
            error.response &&
            error.response >= 400 &&
            error.response <= 500;

        if(!expectedError){
            toast.error(`${error.response.statusText}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response =>{
        if(response.config.method === 'post' || response.config.method === 'put' || response.config.method === 'delete')
        toast.success(`${response.data.message}`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });
        console.log("response");
        console.log(response);
        return response;

    },
     error =>{
    const expectedError =
        error.response &&
        error.response >= 400 &&
        error.response <= 500;

    if(!expectedError){
        toast.error(`${error.response.statusText}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });
    }

    return Promise.reject(error);
})


export const Get = (url: string) => {
    return axios.get(`${AppOptions.baseURL}/${url}`);
}

export const Post = async (url: string, data: any) => {
    return axios.post(`${AppOptions.baseURL}/${url}`, data, {headers});
}

export const Put = async (url: string, data: any) => {
    return axios.put(`${AppOptions.baseURL}/${url}`, data, {headers});
}

export const Delete = async(url: string) => {
    return axios.delete(`${AppOptions.baseURL}/${url}`, {headers})
}