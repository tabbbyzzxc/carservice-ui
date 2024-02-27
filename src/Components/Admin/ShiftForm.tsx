import React, { useState } from "react";
import { Day } from "./Model";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface ShiftFormProps {
    shift: Day;
    onSave: (newShift: Day) => void;
}

const ShiftForm: React.FC<ShiftFormProps> = ({shift, onSave}) => {
    const [newShift, setNewShift] = useState<Day>(shift);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewShift(prevState => ({
            ...prevState,
            [name]: parseInt(value, 10)
        }));
    };

    const handleSave = () => {
        onSave(newShift);
    };

    const isInvalidHours = newShift.shiftStartHour >= newShift.shiftEndHour;
    const isInvalidMinutesStart = newShift.shiftStartMinute >= 60 || newShift.shiftStartMinute < 0;
    const isInvalidMinutesEnd = newShift.shiftEndMinute >= 60 || newShift.shiftEndMinute < 0;
    const isInvalidHoursCount = newShift.shiftStartHour > 24 || newShift.shiftEndHour > 24;

    return (
        <div>
            <div className="d-flex">
                <div className="mr-3">
                    <Form.Label>Shift Start Hour</Form.Label>
                    <Form.Control
                        style={{borderColor: isInvalidHours ? 'red' : 'lightgrey'}}
                        type="number"
                        name="shiftStartHour"
                        value={newShift.shiftStartHour}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Form.Label>Shift Start Minute</Form.Label>
                    <Form.Control
                        type="number"
                        name="shiftStartMinute"
                        value={newShift.shiftStartMinute}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mt-3 d-flex">
                <div className="mr-3">
                    <Form.Label>Shift End Hour</Form.Label>
                    <Form.Control
                        style={{borderColor: isInvalidHours ? 'red' : 'lightgrey'}}
                        type="number"
                        name="shiftEndHour"
                        value={newShift.shiftEndHour}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Form.Label>Shift End Minute</Form.Label>
                    <Form.Control
                        type="number"
                        name="shiftEndMinute"
                        value={newShift.shiftEndMinute}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button className="mt-3" onClick={handleSave}
                    disabled={isInvalidHours || isInvalidMinutesStart || isInvalidMinutesEnd}>Save</Button>
            {isInvalidHours &&
                <p className="text-danger">Shift start hour cannot be greater than or equal to shift end hour</p>}
            {/*{isInvalidHoursCount && <p className="text-danger">Shift hours cannot be greater than 24</p>}*/}
            {isInvalidMinutesStart &&
                <p className="text-danger">Shift start minutes cannot be greater than or equal to 60 or less than 0</p>}
            {isInvalidMinutesEnd &&
                <p className="text-danger">Shift end minutes cannot be greater than or equal to 60 or less than 0</p>}

        </div>
    );
}

export default ShiftForm;