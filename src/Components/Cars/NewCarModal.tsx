import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faPlus} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import {Car} from "../Clients/Model";
import Card from "react-bootstrap/Card";

type CarProps = {
    handleCarSubmit: (
        make: string,
        model: string,
        year: number,
        vin: string
    ) => void;
};

const NewCarModal: React.FC<CarProps> = ({handleCarSubmit}) =>{
    const [show, setShow] = useState(false);

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState(0);
    const [vin, setVin] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onAddCar = () => {
        handleCarSubmit(make, model, year, vin);
        handleClose();
    }

    return (
        <>
            <Button onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus}/> Add car
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faCar}/> Add car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <form className="row g-3" onSubmit={() => handleCarSubmit}>
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onAddCar}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewCarModal;


