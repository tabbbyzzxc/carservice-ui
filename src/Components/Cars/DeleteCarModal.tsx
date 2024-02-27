import React, {Dispatch, FormEvent, SetStateAction, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan} from "@fortawesome/free-solid-svg-icons";
import {Car} from "../Clients/Model";
const DeleteClientModal: React.FC<{ car: Car, onDeleteCar: (carId: number) => Promise<void>, onClose: Dispatch<SetStateAction<boolean>>; }> = ({ car, onDeleteCar, onClose }) => {

    const {id, make, model} = car;

    return (
            <Modal
                show={true}
                onHide={() => onClose(false)}
                backdrop={"static"}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faBan}/> Delete car</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete client <b>{make} {model}</b>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onClose(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => onDeleteCar(id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}

export default DeleteClientModal;