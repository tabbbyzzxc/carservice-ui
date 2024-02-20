export interface Client{
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phoneNumber: string;
}

export interface NewClient{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phoneNumber: string;
}

export interface EditClient{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phoneNumber: string;
}

export interface Car{
    id: number
    make: string;
    model: string;
    year: number;
    vin: string;
    clientId: number;
}

export interface NewCar{
    make: string;
    model: string;
    year: number;
    vin: string;
    clientId: number;
}

export interface EditCar{
    make: string;
    model: string;
    year: number;
    vin: string;
}

