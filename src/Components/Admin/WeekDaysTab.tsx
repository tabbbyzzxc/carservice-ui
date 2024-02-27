import React, { useEffect, useState } from 'react';
import { Day, WeekDays } from "./Model";
import DayCard from "./DayCard";


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];



const WeekDaysTab: React.FC<{ weekdays: WeekDays, onWeekDayChange: (weekDays: WeekDays) => void; }> = ({ weekdays, onWeekDayChange }) => {
    const [days, setDays] = useState<WeekDays>({
        monday: { shiftStartHour: 0, shiftStartMinute: 0, shiftEndHour: 0, shiftEndMinute: 0 },
        tuesday: { shiftStartHour: 0, shiftStartMinute: 0, shiftEndHour: 0, shiftEndMinute: 0 },
        wednesday: { shiftStartHour: 0, shiftStartMinute: 0, shiftEndHour: 0, shiftEndMinute: 0 },
        thursday: { shiftStartHour: 0, shiftStartMinute: 0, shiftEndHour: 0, shiftEndMinute: 0 },
        friday: { shiftStartHour: 0, shiftStartMinute: 0, shiftEndHour: 0, shiftEndMinute: 0 },
        saturday: { shiftStartHour: 0, shiftStartMinute: 0, shiftEndHour: 0, shiftEndMinute: 0 },
        sunday: { shiftStartHour: 0, shiftStartMinute: 0, shiftEndHour: 0, shiftEndMinute: 0 }
    });

    useEffect(() => {
        setDays(weekdays);
    }, [weekdays]);

    const handleDayChange = (day: string, newShift: Day) => {
        setDays(prevDays => ({ ...prevDays, [day.toLowerCase()]: newShift }));
        onWeekDayChange({...days, [day.toLowerCase()]: newShift});
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {daysOfWeek.map(day => (
                <DayCard
                    key={day}
                    day={day}
                    shift={days[day.toLowerCase() as keyof WeekDays]}
                    onShiftChange={(newShift: Day) => handleDayChange(day as keyof WeekDays, newShift)}

                />
            ))}
        </div>
    );
}

export default WeekDaysTab;


