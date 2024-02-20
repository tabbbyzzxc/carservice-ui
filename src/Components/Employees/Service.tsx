import {Get, Post, Put} from "../../Services/Http/ApiServiceProvider";
import {EditEmployee, NewEmployee} from "./Model";


export async function getEmployeesList(skip: number, take: number, search: string = "") {
    const response = await Get(`employees/employees-list?skip=${skip}&take=${take}&search=${search}`);
    return response.data;
}

export async function getEmployee(id: number){
    const response = await Get(`employees/get-employee?id=${id}`);
    return response.data;
}

export async function postEmployee(employee: NewEmployee){
    const response = await Post('employees/post-employee', employee);
}

export async function editEmployee(id: number, employee: EditEmployee){
    const response = await Put(`employees/edit-employee/${id}`, employee);
}

