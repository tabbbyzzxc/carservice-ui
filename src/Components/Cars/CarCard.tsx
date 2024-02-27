import {Car, EditCar} from "../Clients/Model";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import EditCarModal from "./EditCarModal";
import DeleteCarModal from "./DeleteCarModal";

const CarCard: React.FC<{ car: Car, onEditCar: (id: number, editedCar: EditCar) => Promise<void>, onDeleteCar: (id: number) => Promise<void>; }> = ({ car, onEditCar, onDeleteCar }) => {
    const {make, model, year} = car;
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const addCar = async(editedCar: EditCar) => {
        await onEditCar(car.id, editedCar);
        setShow(false);
    }

    const deleteCar = async(id: number) =>{
        await onDeleteCar(id);
        setShowDelete(false);
    }


    return (
        <>
        <div onClick={() => setShow(true)} onMouseDown={(event) => {
            if (event.button === 1) {
                setShowDelete(true); // Trigger the event only if middle mouse button is clicked
            }
        }}>
                <Card
                    style={{ width: '18rem', height: '5rem', }}
                    bg={"light"}
                >
                    <Card.Body>
                        <Card.Title>{make}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{model + " " + year}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            {show && <EditCarModal car={car} onAddCar={addCar} onClose={setShow} />}
            {showDelete && <DeleteCarModal car={car} onDeleteCar={deleteCar} onClose={setShowDelete}/>}
        </>
    );
}

export default CarCard;