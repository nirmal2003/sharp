import React, {useEffect, useRef, useState} from "react";
import {Calendar} from "@taak/react-modern-calendar-datepicker";

const Task = ({data}) => {
    const [openPicker, setOpenPicker] = useState(false);
    const pickerRef = useRef(null);
    const [name, setName] = useState(data?.task.name);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // const defaultFrom = {
    //     year: 2019,
    //     month: 3,
    //     day: 4,
    // };
    //
    // const defaultTo = {
    //     year: 2019,
    //     month: 3,
    //     day: 7,
    // };


    // const defaultRange = {
    //     from: defaultFrom,
    //     to: defaultTo,
    // };

    const [defaultFrom, setDefaultFrom] = useState();

    const [defaultTo, setDefaultTo] = useState();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [startMonthName, setStartMonthName] = useState();
    const [endMonthName, setEndMonthName] = useState();
    const [defaultRange, setDefaultRange] = useState({
        from: defaultFrom,
        to: defaultTo,
    });

    const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

    useEffect(() => {
        if (startDate && endDate) {
            const startMonth = startDate.getMonth();
            const endMonth = endDate.getMonth();

            setDefaultFrom({
                year: startDate.getFullYear(),
                month: startMonth + 1,
                day: startDate.getDate(),
            });
            setDefaultTo({
                year: endDate.getFullYear(),
                month: endMonth + 1,
                day: endDate.getDate(),
            });
        }
    }, [startDate, endDate]);

    useEffect(() => {
        setSelectedDayRange(defaultRange);
    }, [defaultRange]);

    useEffect(() => {
        if (defaultFrom && defaultTo) {
            setDefaultRange({from: defaultFrom, to: defaultTo});
        }
        if (defaultFrom) {
            setStartMonthName(months[defaultFrom.month - 1]);
        }
        if (defaultTo) {
            setEndMonthName(months[defaultTo.month - 1]);
        }
    }, [defaultFrom, defaultTo]);

    useEffect(() => {
    }, []);

    useEffect(() => {
        for (const value of data.taskValueList) {
            if (value.type === 2) {
                setStartDate(new Date(value.dateTimeStartValue));
                setEndDate(new Date(value.dateTimeEndValue));
            }
        }
    }, [data]);

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
        <div className="w-72 bg-light-board-transparent rounded-lg mt-3 mb-2 shadow border border-border-color pb-4"
             style={{minHeight: '10rem'}} draggable>
            <div className="relative">
                <img src="/images/icons/delete.svg" alt="delete"
                     className="absolute right-0 m-0.5 cursor-pointer p-1 hover:bg-light-transparent rounded-full w-7"/>
            </div>
            <input placeholder="task 01" value={name} onChange={(event) => setName(event.target.value)}
                   className="w-64 bg-transparent text-gray text-sm outline-0 border rounded border-transparent focus:border-gray p-1 ml-3 mt-5 resize-none h-fit"/>
            <p className="text-gray text-sm ml-4 mr-1 my-5"></p>
            {/*<ul className="flex flex-wrap mb-5">*/}
            {/*    <li style={{fontSize: '0.8rem'}}*/}
            {/*        className="text-gray bg-purple py-1 px-2 rounded-full font-semibold m-1 ml-3">Option 01*/}
            {/*    </li>*/}
            {/*    <li style={{fontSize: '0.8rem'}}*/}
            {/*        className="text-gray bg-purple py-1 px-2 rounded-full font-semibold m-1 ml-3">Option 01*/}
            {/*    </li>*/}
            {/*    <li style={{fontSize: '0.8rem'}}*/}
            {/*        className="text-gray bg-purple py-1 px-2 rounded-full font-semibold m-1 ml-3">Option 01*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <div></div>
            <span ref={pickerRef}>
                    <p onClick={() => setOpenPicker(!openPicker)}
                       className="w-fit text-gray text-sm ml-3 py-1 px-2 hover:bg-light-transparent rounded cursor-pointer">
                        {startMonthName?.substr(0, 3)} {defaultFrom?.day} - {startMonthName !== endMonthName ? endMonthName?.substr(0, 3) : ''} {defaultTo?.day}
                    </p>
                {openPicker && (
                    <div className="absolute mt-3">
                        <Calendar value={selectedDayRange} onChange={setSelectedDayRange}
                                  calendarClassName="task-calender" onDisabledDayError={(error) => console.log(error)}/>
                    </div>
                )}
            </span>
        </div>
    )
}

export default Task;