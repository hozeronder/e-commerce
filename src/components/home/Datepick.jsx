import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Datepick = ({ setSelectedDate }) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const onChange = (dates) => {
        setDateRange(dates);
        setIsDatePickerOpen(false);
        setSelectedDate(dates); // Seçilen tarihi ana bileşene aktar
    };

    return (
        <div className="font-normal flex items-center p-0">
            <div
                className="relative"
                onClick={() => setIsDatePickerOpen((prevState) => !prevState)}
            >
                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={onChange}
                    withPortal
                    calendarStartDay="1"
                    placeholderText="Dates"
                    allowSameDay={true}
                    minDate={new Date()}
                    dateFormat='dd/MM/yyyy'
                />
                {!isDatePickerOpen && (
                    <ChevronDownIcon
                        className="h-5 w-5 mt-1 absolute top-0 right-0 pointer-events-none"
                        aria-hidden="false"
                    />
                )}
            </div>
        </div>
    );
};

export default Datepick;
