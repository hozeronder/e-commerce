import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
    const today = new Date();
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const onChange = (dates) => {
        setDateRange(dates);
    };

    const filterPassedDates = (date) => {
        return date.getTime() >= today.getTime() || date.toDateString() === today.toDateString();
    };

    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            withPortal
            filterDate={filterPassedDates}
            calendarStartDay="1"
            placeholderText="DATES"
        />
    );
};

export default App;
