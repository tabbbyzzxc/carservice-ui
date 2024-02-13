import {Get} from "../../Services/Http/ApiServiceProvider";

export async function getMaterialsList(skip: number, take: number, search: string = "") {
    const response = await Get(`materials/materials-list?skip=${skip}&take=${take}&search=${search}`);
    return response.data;
}