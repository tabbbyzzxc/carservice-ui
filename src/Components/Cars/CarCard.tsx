import {Car, EditCar} from "../Clients/Model";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import EditCarModal from "./EditCarModal";

const CarCard: React.FC<{ car: Car, onEditCar: (id: number, editedCar: EditCar) => Promise<void> }> = ({ car, onEditCar }) => {
    const {make, model, year} = car;
    const [show, setShow] = useState(false)

    const addCar = async(editedCar: EditCar) => {
        await onEditCar(car.id, editedCar);
        setShow(false);
    }

    return (
        <>
        <div onClick={() => setShow(true)}>
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
        </>
    );
}

export default CarCard;