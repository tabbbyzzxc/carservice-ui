import {EditCar, NewCar} from "../Clients/Model";
import {Get, Post, Put} from "../../Services/Http/ApiServiceProvider";


export async function getCar(id: number){
    const response = await Get(`cars/get-car?id=${id}`)
    return response.data;
}

export async function postCar(car: NewCar){
    const response = await Post(`cars/post-car`, car);
    return response.data;
}

export async function editCar(id: number, car: EditCar){
    const response = await Put(`cars/edit-car/${id}`, car);
    return response.data;
}
