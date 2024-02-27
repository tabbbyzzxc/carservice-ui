import React, {FormEvent, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {getSpec} from "./Service";
import {EditSpecialization} from "./Model";

const EditSpecModal: React.FC<{ specId: number, onSpecEdit: (specId: number, editedSpec: EditSpecialization) => Promise<void> }> = ({ specId, onSpecEdit }) => {
    //const { clientId } = useParams();

    const [name, setName] = useState('');
    const [hours, setHours] = useState(0);
    const [price, setPrice] = useState(0);

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);
    }

    useEffect(() => {
        if (show) {
            loadSpec(specId)
        }
    }, [show]);

    const loadSpec = async (id: number) => {
        const fetchDataFromApi = async () => {
            try {
                const result = await getSpec(specId);
                setName(result.name);
                setHours(result.hours);
                setPrice(result.price);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataFromApi();
    }

    const editSpec = async (e: FormEvent) => {
        e.preventDefault();
        await onSpecEdit(specId, {name, hours, price})
        handleClose();
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
                <Modal.Title>Edit specialization</Modal.Title>
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
                <Button variant="primary" onClick={(e: FormEvent) => editSpec(e)}>Update</Button>
            </Modal.Footer>
        </Modal>
    </>

    );
}


export default EditSpecModal;