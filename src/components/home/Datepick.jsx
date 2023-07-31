import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";


const App = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }


    function getCurrentDate(separator = '-') {

        let newDate = new Date()
        let date = newDate.getDate() - 1;
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }

    let dateCurrent;
    dateCurrent = getCurrentDate();

    return (
        <Datepicker
            disabledDates={[
                {
                    startDate: "1990-02-02",
                    endDate: dateCurrent,
                }]}
            startWeekOn="mon"
            value={value}
            onChange={handleValueChange}
            primaryColor={"teal"}
            containerClassName="datepicker"
        />
    );
};
export default App;