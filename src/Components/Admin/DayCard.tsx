import React, { useState } from "react";
import { Day } from "./Model";
import Card from "react-bootstrap/Card";
import ShiftForm from "./ShiftForm";

interface DayCardProps {
    day: string;
    shift: Day;
    onShiftChange: (newShift: Day) => void;
}

const DayCard: React.FC<DayCardProps> = ({day, shift, onShiftChange}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleSave = (newShift: Day) => {
        setIsHovered(false);
        setIsEditing(false);
        onShiftChange(newShift);
    };

    return (
        <div>
            <Card
                border={isEditing ? "primary" : (isHovered ? "info" : "secondary")}
                style={{width: '18rem', marginRight: '10px', marginBottom: '10px', userSelect: 'none'}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card.Body onDoubleClick={handleDoubleClick}>
                    <Card.Title>{day}</Card.Title>
                    {isEditing ? (
                        <ShiftForm shift={shift} onSave={handleSave}/>
                    ) : (
                        <Card.Text>
                            {`${shift.shiftStartHour}:${shift.shiftStartMinute} - ${shift.shiftEndHour}:${shift.shiftEndMinute}`}
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default DayCard;