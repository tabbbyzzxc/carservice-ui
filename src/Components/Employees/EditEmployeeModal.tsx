import React, {FormEvent, useEffect, useState} from "react";
import {EditEmployee, Specialization} from "./Model";
import {useParams} from "react-router-dom";
import {AppOptions} from "../../AppOptions";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faPenSquare, faPlus} from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';
import NewCarModal from "../Cars/NewCarModal";
import CarCard from "../Cars/CarCard";
import {editEmployee, getEmployee} from "./Service";

const EmployeeEditModal: React.FC<{ employeeId: number }> = ({ employeeId }) => {
    //const { clientId } = useParams();

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+38');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const [specs, setSpecs] = useState<Specialization[]>([]);

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);
    }

    useEffect(() => {
        if (show) {
            loadClient(employeeId)
        }
    }, [show]);

    const loadClient = async (id: number) => {
        const fetchDataFromApi = async () => {
            try {
                const result = await getEmployee(employeeId);
                setEmail(result.email);
                setPhoneNumber(result.phoneNumber);
                setFirstName(result.firstName);
                setLastName(result.lastName);
                setAddress(result.address);
                setCity(result.city);
                setSpecs(result.specializations);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataFromApi();
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const employee = {email, phoneNumber, firstName, lastName, address, city};
        await editEmployee(employeeId, employee as EditEmployee);
        handleClose();
    }


    return(
        <>
        <Button variant="link" onClick={handleShow}>
            <FontAwesomeIcon icon={faPenSquare} />
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                   value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputPhoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputFirstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputFirstName"
                                placeholder="Maksym"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputLastName"
                                placeholder="Mahaz"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required/>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>Update</Button>
            </Modal.Footer>
        </Modal>
    </>

    );
}


export default EmployeeEditModal;