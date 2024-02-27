import React, {FormEvent, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserSlash} from "@fortawesome/free-solid-svg-icons";
import {Client} from "./Model";
const DeleteClientModal: React.FC<{ client: Client, handleDeleteClient: (clientId: number) => Promise<void> }> = ({ client, handleDeleteClient }) => {

    const {id, firstName, lastName} = client;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onClientDelete = async() => {
        await handleDeleteClient(id);
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
                    <Modal.Title><FontAwesomeIcon icon={faUserSlash}/> Delete client</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete client <b>{firstName} {lastName}</b>?</Modal.Body>
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