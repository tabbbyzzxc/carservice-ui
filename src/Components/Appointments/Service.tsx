import { Get, Post } from "../../Services/Http/ApiServiceProvider";
import { NewAppointment } from "./Model";

export async function getApptsList(skip: number, take: number, search: string = "") {
    const response = await Get(`appointments/get-appointments-list?skip=${skip}&take=${take}&search=${search}`);
    return response.data.data;
}
export async function getApptsOptions() {
    const response = await Get(`appointments/get-appointment-options`);
    return response.data.data;
}
export async function postAppt(appt: NewAppointment){
    const response = await Post('appointments/post-appointment', appt);
}