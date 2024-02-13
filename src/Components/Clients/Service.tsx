import {Client, EditClient, NewClient} from "./Model";
import {Get, Post, Put} from "../../Services/Http/ApiServiceProvider";


export async function getClientsList(skip: number, take: number, search: string = "") {
    const response = await Get(`clients/clients-list?skip=${skip}&take=${take}&search=${search}`);
    return response.data;
}

export async function getClient(id: number){
    const response = await Get(`clients/get-client?id=${id}`);
    return response.data;
}

export async function postClient(client: NewClient){
        const response = await Post('clients/post-client', client);
}

export async function editClient(id: number, client: EditClient){
    const response = await Put(`clients/edit-client/${id}`, client);
}

