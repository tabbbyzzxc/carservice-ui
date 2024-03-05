import React, { Suspense, useEffect, useState } from "react";
import { Appointment, NewAppointment } from "./Model";
import { getApptsList, getApptsOptions, postAppt } from "./Service";
import { AppOptions } from "../../AppOptions";
import NewApointmentModal from "./NewAppoinmentModal";
import { Client } from "../Clients/Model";
import { Employee } from "../Employees/Model";
import { Service } from "./Model"


const AppointmentsList: React.FC = () => {
    const [ apptList, setApptList] = useState<Appointment[]>([]);
    const [ currentIndex, setCurrentIndex] = useState(0);
    const [ clients, setClients] = useState<Client[]>([]);
    const [ employees, setEmployees] = useState<Employee[]>([]);
    const [ services, setServices] = useState<Service[]>([]);
    useEffect(() => {
        loadPage(0);
    }, []); // The empty dependency array ensures that this effect runs once on mount


    const loadPage = (index: number, search: string = "") => {
        setCurrentIndex(index);
        const fetchDataFromApi = async () => {
            try {
                const list = await getApptsList(index * AppOptions.tableRowsCount, 15, search);
                const options = await getApptsOptions();
                setClients(options.clients);
                setEmployees(options.employees);
                setServices(options.services);
                setApptList(list.appointments);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataFromApi();
    }

    const handleApptSubmit = async(appt: NewAppointment) =>{
        await postAppt(appt);
        loadPage(currentIndex);
    }
    return(
        <div className={"container"}>
            <NewApointmentModal clients={clients} employees={employees} services={services} onApptAdd={handleApptSubmit}/>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Client</th>
                    <th>Employee</th>
                    <th>Service</th>
                </tr>
                </thead>
                <tbody>
                {apptList.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.clientId}</td>
                        <td>
                            {item.employeeId}
                        </td>
                        <td>
                            {item.serviceId}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Suspense>

            </Suspense>
        </div>
    )

}
export default AppointmentsList;