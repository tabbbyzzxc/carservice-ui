import React, {FormEvent, useEffect, useState} from "react";
import {Car, Client, EditCar, EditClient, NewCar} from "./Model";
import {editClient, getClient, postClient} from "./Service";
import {deleteCar, editCar, postCar} from "../Cars/Service"
import {useParams} from "react-router-dom";
import {AppOptions} from "../../AppOptions";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';
import NewCarModal from "../Cars/NewCarModal";
import CarCard from "../Cars/CarCard";

const EditClientModal: React.FC<{ clientId: number }> = ({ clientId }) => {
    //const { clientId } = useParams();

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+38');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const [cars, setCars] = useState<Car[]>([]);

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);
    }

    useEffect(() => {
        if (show) {
            loadClient(clientId)
        }
    }, [show]);

    const loadClient = async (id: number) => {
        const fetchDataFromApi = async () => {
            try {
                const result = await getClient(clientId);
                setEmail(result.email);
                setPhoneNumber(result.phoneNumber);
                setFirstName(result.firstName);
                setLastName(result.lastName);
                setAddress(result.address);
                setCity(result.city);
                setCars(result.cars);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataFromApi();
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const client = {email, phoneNumber, firstName, lastName, address, city};
        await editClient(clientId, client as EditClient);
        handleClose();
    }

    const handleCarSubmit = async (make: string, model: string, year: number, vin: string) =>{
        const car = {make, model, year, vin, clientId};
        const carList = (await postCar(car as NewCar)).cars;
        setCars(carList);
    }

    const handleCarEdit = async(id: number, editedCar: EditCar) => {
        const resp = await editCar(id, editedCar);
        setCars(resp.data);
    }

    const handleCarDelete = async(id:number) =>{
        const resp = await deleteCar(id);
        setCars(resp.data);
    }

    return(
        <>
        <Button variant="link" onClick={handleShow}>
            <FontAwesomeIcon icon={faUserPen} />
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit client</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div>
                            <NewCarModal handleCarSubmit={handleCarSubmit}/>
                        </div>
                        <div>
                            {cars.map((item, index) => (
                                <li key={index} style={{listStyle: 'none'}}>
                                    <CarCard
                                        car={item}
                                        onEditCar={handleCarEdit}
                                        onDeleteCar={handleCarDelete}
                                    />
                                </li>
                            ))}
                        </div>
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


export default EditClientModal;