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