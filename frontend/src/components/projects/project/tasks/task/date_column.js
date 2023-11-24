import React, {useEffect, useRef, useState} from "react";
import '@taak/react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from "@taak/react-modern-calendar-datepicker";
import axios_config from "../../../../../utils/axios_config";

const DateColumn = ({ startDate, endDate, id }) => {

    const [openPicker, setOpenPicker] = useState(false);
    const pickerRef = useRef(null);
    const [newStartDate, setNewStartDate] = useState(null);
    const [newEndDate, setNewEndDate] = useState(null);

    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();

    const [defaultFrom, setDefaultFrom] = useState({
        year: startDate.getFullYear(),
        month: startMonth + 1,
        day: startDate.getDate(),
    });

    const [defaultTo, setDefaultTo] = useState({
        year: endDate.getFullYear(),
        month: endMonth + 1,
        day: endDate.getDate(),
    });

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [startMonthName, setStartMonthName] = useState(months[defaultFrom.month - 1]);
    const [endMonthName, setEndMonthName] = useState(months[defaultTo.month - 1]);


    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

    const change_date = async () => {
        try {
            await axios_config.put(`/project/tasks/value/date/${id}`, { fromDate: newStartDate, toDate: newEndDate });
            setDefaultFrom(selectedDayRange.from);
            setDefaultTo(selectedDayRange.to);
            setStartMonthName(months[selectedDayRange.from.month - 1]);
            setEndMonthName(months[selectedDayRange.to.month - 1]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        if (selectedDayRange) {
            const from = `${selectedDayRange.to?.year}-${selectedDayRange.to?.month.toString().length === 1 ? '0' + selectedDayRange.to?.month : selectedDayRange.to?.month}-${selectedDayRange.to?.day.toString().length === 1 ? '0' + selectedDayRange.from?.day : selectedDayRange.from?.day}`;
            const to = `${selectedDayRange.to?.year}-${selectedDayRange.to?.month.toString().length === 1 ? '0' + selectedDayRange.to?.month : selectedDayRange.to?.month}-${selectedDayRange.to?.day.toString().length === 1 ? '0' + selectedDayRange.to?.day : selectedDayRange.to?.day}`;

            if (!from.includes("undefined") && !to.includes("undefined")) {
                setNewStartDate(from);
                setNewEndDate(to);
            }
        }
    }, [selectedDayRange]);

    useEffect(() => {
        if (newStartDate && newEndDate) change_date();
    }, [newStartDate, newEndDate])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setOpenPicker(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);


    return (
        <div className="relative" ref={pickerRef}>
            <div className="value cursor-pointer" onClick={() => setOpenPicker(true)} ref={pickerRef}>
                <p className="text-value">{startMonthName.substr(0, 3)} {defaultFrom.day} - {startMonthName !== endMonthName ? endMonthName.substr(0, 3) : ''} {defaultTo.day}</p>
                {openPicker && (
                    <div className="absolute top-10 left-0">
                        <Calendar value={selectedDayRange} onChange={setSelectedDayRange} calendarClassName="task-calender" onDisabledDayError={(error) => console.log(error)} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default DateColumn;