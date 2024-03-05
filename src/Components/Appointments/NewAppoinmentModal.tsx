import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import NewClientModal from "../Clients/NewClientModal";
import { Client } from "../Clients/Model";
import { Employee } from "../Employees/Model";
import { NewAppointment, Service } from "./Model";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Simulate } from "react-dom/test-utils";
import paste = Simulate.paste;

interface ApptModalProps{
    clients: Client[];
    employees: Employee[];
    services: Service[];
    onApptAdd: (appt: NewAppointment) => Promise<void>;
}

const NewApointmentModal: React.FC<ApptModalProps> = ({clients, employees, services, onApptAdd}) =>{
    const [show, setShow] = useState(false);

    const [selectedClientId, setSelectedClientId] = useState(0);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(0);

    const [selectedServiceId, setSelectedServiceId] = useState(0);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClientDropdownChange = (client: number) => {
        setSelectedClientId(client);
    };

    const handleEmployeeDropdownChange = (employee: number) =>{
        setSelectedEmployeeId(employee);
    };

    const handleServiceDropdownChange = (service: number) =>{
        setSelectedServiceId(service);
    };

    const handleSubmit = () => {
        if(selectedDate != null){
            onApptAdd({clientId: selectedClientId, employeeId: selectedEmployeeId, serviceId: selectedServiceId, apptDate: selectedDate, status: 1});
        }

        setShow(false);
    }
    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                New Appointment
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a new client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Form>
                            <Form.Group>
                                <Form.Label>Client</Form.Label>
                                <Form.Select
                                    onChange={(e) => handleClientDropdownChange(parseInt(e.target.value))}
                                >
                                    {clients.map((item) => (
                                        <option key={item.id}
                                                value={item.id}
                                        >
                                            {item.firstName + " " + item.lastName}
                                        </option>
                                    ))}
                                </Form.Select>
                                <NewClientModal/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Service</Form.Label>
                                <Form.Select
                                    onChange={(e) => handleServiceDropdownChange(parseInt(e.target.value))}
                                >
                                    {services.map((item) => (
                                        <option key={item.id}
                                                value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Employee</Form.Label>
                                <Form.Select
                                    onChange={(e) => handleEmployeeDropdownChange(parseInt(e.target.value))}
                                >
                                    {employees.map((item) => (
                                        <option key={item.id}
                                                value={item.id}
                                        >
                                            {item.firstName + " " + item.lastName}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Select a date"
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Create</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewApointmentModal;