import {Delete, Get, Post, Put} from "../../Services/Http/ApiServiceProvider";
import {EditSpecialization, NewSpecialization} from "./Model";


export async function getSpecsList(skip: number, take: number, search: string = "") {
    const response = await Get(`specializations/specs-list?skip=${skip}&take=${take}&search=${search}`);
    return response.data;
}

export async function getSpec(id: number){
    const response = await Get(`specializations/get-spec/${id}`);
    return response.data;
}

export async function postSpec(spec: NewSpecialization){
    const response = await Post('specializations/post-spec', spec);
}

export async function editSpec(id: number, spec: EditSpecialization){
    const response = await Put(`specializations/edit-spec/${id}`, spec);
}

export async function deleteSpec(id: number){
    const response = await Delete(`specializations/delete-spec/${id}`);
}

