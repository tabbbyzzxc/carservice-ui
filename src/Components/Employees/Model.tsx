export interface Employee{
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phoneNumber: string;
}

export interface NewEmployee{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phoneNumber: string;
}

export interface EditEmployee{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phoneNumber: string;
}

export interface Specialization{
    name: string;
    hours: number;
    price: number;
}