import React, {Dispatch, SetStateAction, useState} from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import {Car, EditCar} from "../Clients/Model";


const EditCarModal: React.FC<{ car: Car, onAddCar: (car: EditCar) => Promise<void>, onClose: Dispatch<SetStateAction<boolean>>; }> = ({ car, onAddCar, onClose }) => {
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [year, setYear] = useState(car.year);
    const [vin, setVin] = useState(car.vin);

    return (
        <>
            <Modal
                show={true}
                onHide={() => onClose(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faPen} /> Edit car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Make</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mercedes"
                                    value={make}
                                    onChange={(e) => setMake(e.target.value)}
                                    required/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="S600"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    required/>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Year</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="2020"
                                    value={year}
                                    onChange={(e) => setYear(parseInt(e.target.value))}
                                    required/>
                            </div>
                            <div className="col-12">
                                <label className="form-label">VIN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="2GNALBEK4F6103009"
                                    value={vin}
                                    onChange={(e) => setVin(e.target.value)}
                                    required/>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onClose(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => onAddCar({make, model, year, vin})}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditCarModal;


