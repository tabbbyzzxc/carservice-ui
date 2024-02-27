export interface Main{
    carCapacity: number;
}

export interface Contacts{
    city:string;
    country: string;
    state: string;
    zipcode: string;
    street: string;
    phoneNumber: string;
    email: string;
}

export interface WeekDays {
    monday: Day;
    tuesday: Day;
    wednesday: Day;
    thursday: Day;
    friday: Day;
    saturday: Day;
    sunday: Day;
}

export interface Day{
    shiftStartHour: number;
    shiftStartMinute: number;
    shiftEndHour: number;
    shiftEndMinute: number;
}

export interface ServiceOptions{
    main: Main;
    contacts: Contacts;
    weekDays: WeekDays;
}