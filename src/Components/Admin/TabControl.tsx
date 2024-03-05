import React, {useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainTab from "./Main";
import ContactTab from "./Contact";
import {editOptions, getOptions} from "./Service";
import {Contacts, Main, WeekDays} from "./Model";
import Button from "react-bootstrap/Button";
import WeekDaysTab from "./WeekDaysTab";
import AppointmentsList from "../Appointments/AppointmentsList";


const AdminControlledTab: React.FC = () => {
    const [key, setKey] = useState('home');
    const [main, setMain] = useState<Main>({ carCapacity: 0 });
    const [contacts, setContacts] = useState<Contacts>({
        city: '',
        country: '',
        state: '',
        zipcode: '',
        street: '',
        phoneNumber: '',
        email: '',
    });
    const initialWeekDays: WeekDays = {
        monday: {
            shiftStartHour: 0,
            shiftStartMinute: 0,
            shiftEndHour: 0,
            shiftEndMinute: 0,
        },
        tuesday: {
            shiftStartHour: 0,
            shiftStartMinute: 0,
            shiftEndHour: 0,
            shiftEndMinute: 0,
        },
        wednesday: {
            shiftStartHour: 0,
            shiftStartMinute: 0,
            shiftEndHour: 0,
            shiftEndMinute: 0,
        },
        thursday: {
            shiftStartHour: 0,
            shiftStartMinute: 0,
            shiftEndHour: 0,
            shiftEndMinute: 0,
        },
        friday: {
            shiftStartHour: 0,
            shiftStartMinute: 0,
            shiftEndHour: 0,
            shiftEndMinute: 0,
        },
        saturday: {
            shiftStartHour: 0,
            shiftStartMinute: 0,
            shiftEndHour: 0,
            shiftEndMinute: 0,
        },
        sunday: {
            shiftStartHour: 0,
            shiftStartMinute: 0,
            shiftEndHour: 0,
            shiftEndMinute: 0,
        },
    };

    const [weekDays, setWeekDays] = useState<WeekDays>(initialWeekDays);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const result = await getOptions();
                setMain(result.main);
                setContacts(result.contacts);
                setWeekDays(result.weekdays);
            }
            catch (error) {
                console.error('Error:', error);
            }
        };
        fetchDataFromApi();
    }, []);

    const handleGlobalEdit = async() => {
        await editOptions({main, contacts, weekDays})
    }

    return (
        <div className={"container mt-2"}>
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k!)}
                className="mb-3"
                justify
                variant={"underline"}
            >
                <Tab eventKey="home" title="Main">
                    <MainTab main={main} onChanged={(e: Main) => setMain(e)}/>
                </Tab>
                <Tab eventKey="profile" title="Contacts">
                    <ContactTab contacts={contacts} onChanged={(e: Contacts) => setContacts(e)}/>
                </Tab>
                <Tab eventKey="contact" title="Work days and hours">
                    <WeekDaysTab weekdays={weekDays} onWeekDayChange={(weekDays: WeekDays) => setWeekDays(weekDays)}/>
                </Tab>
            </Tabs>
            <Button className={"mt-3"} type="button" onClick={handleGlobalEdit}>Save</Button>
        </div>
    );
}

export default AdminControlledTab;