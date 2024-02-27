export interface Specialization{
    id: number;
    name: string;
    hours: number;
    price: number;
}

export interface NewSpecialization{
    name: string;
    hours: number;
    price: number;
}

export interface EditSpecialization{
    name: string;
    hours: number;
    price: number;
}