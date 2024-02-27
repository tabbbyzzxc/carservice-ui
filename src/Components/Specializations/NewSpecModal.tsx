import React, {FormEvent, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {NewSpecialization} from "./Model";

const NewSpecModal: React.FC<{onSpecAdd: (newSpec: NewSpecialization) => Promise<void>}> = ({onSpecAdd}) => {
    //const { clientId } = useParams();

    const [name, setName] = useState('');
    const [hours, setHours] = useState(0);
    const [price, setPrice] = useState(0);

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);
    }

    const addSpec = async (e: FormEvent) => {
        e.preventDefault();
        await onSpecAdd({name, hours, price})
        handleClose();
    }

    return(
        <>
        <Button variant="link" onClick={handleShow}>
            <FontAwesomeIcon icon={faUserPlus} />
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Create a new specialization</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Hours</label>
                            <input
                                type="number"
                                className="form-control"
                                value={hours}
                                onChange={(e) => setHours(parseInt(e.target.value))}
                                required/>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(parseInt(e.target.value))}
                                required/>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={(e: FormEvent) => addSpec(e)}>Create</Button>
            </Modal.Footer>
        </Modal>
    </>

    );
}


export default NewSpecModal;