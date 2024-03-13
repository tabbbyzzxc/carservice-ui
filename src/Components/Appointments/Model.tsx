import { Employee } from "../Employees/Model";
import { Client } from "../Clients/Model";

export interface Service {
    id: number;
    name: string;
    hours: number;
    price: number;
}

export interface Appointment{
    id: number
    clientId: number;
    employeeId: number;
    serviceId: number;
    apptDate: Date;
    status: number;
}

export interface NewAppointment{
    clientId: number;
    employeeId: number;
    serviceId: number;
    apptRawDate: {year: number, month: number, day: number, hours: number, minutes: number};
    status: number;
}