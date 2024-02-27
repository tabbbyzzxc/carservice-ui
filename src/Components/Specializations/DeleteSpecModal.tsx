import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserSlash} from "@fortawesome/free-solid-svg-icons";
import {Specialization} from "./Model";

const DeleteClientModal: React.FC<{ spec: Specialization, handleDeleteSpec: (specId: number) => Promise<void> }> = ({ spec, handleDeleteSpec }) => {

    const {id, name} = spec;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onClientDelete = async() => {
        await handleDeleteSpec(id);
        handleClose();
    }

    return (
        <>
            <Button onClick={handleShow}>
                <FontAwesomeIcon icon={faUserSlash}/>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faUserSlash}/> Delete specialization</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete specialization <b>{name}</b>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={onClientDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteClientModal;