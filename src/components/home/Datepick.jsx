import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {tr} from "date-fns/locale";


const App = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const onChange = (dates) => {
        setDateRange(dates);
        setIsDatePickerOpen(false);
    };
    return (
        <div className="flex items-center">
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
                    placeholderText="DATES"
                    allowSameDay={true}
                    minDate={new Date()}
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

export default App;
