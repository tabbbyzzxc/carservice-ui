import {Get, Put} from "../../Services/Http/ApiServiceProvider";
import {ServiceOptions} from "./Model";

export async function getOptions(){
    const response = await Get(`options/get-options`);
    return response.data.data;
}

export async function editOptions(options: ServiceOptions){
    const response = await Put(`options/edit-options`, options);
}