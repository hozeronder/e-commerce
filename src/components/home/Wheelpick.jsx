import React from "react";
import WheelPicker from "react-simple-wheel-picker";

const data = [
    {
        id: "1",
        value: "0",
    },
    {
        id: "2",
        value: "1",
    },
    {
        id: "3",
        value: "2",
    },
    {
        id: "4",
        value: "3",
    },
    {
        id: "5",
        value: "4",
    },
    {
        id: "6",
        value: "5",
    },
    {
        id: "7",
        value: "6",
    },
    {
        id: "8",
        value: "7",
    },
    {
        id: "9",
        value: "8",
    },
    {
        id: "10",
        value: "9",
    },
    {
        id: "11",
        value: "10",
    },
];
const Wheelpick = ({selectedValue, setSelectedValue}) => {
    const handleOnChange = (target) => {
        setSelectedValue(target.value);
    };

    return (
        <div className="wheelpicker">
            <WheelPicker
                data={data}
                onChange={handleOnChange}
                height={100}
                width={50}
                titleText="Enter value same as aria-label"
                itemHeight={30}
                selectedID={data.find((item) => item.value === selectedValue).id}
                color="rgba(255,255,255,0.2)"
                activeColor="rgba(255,255,255)"
                backgroundColor="transparent"
                shadowColor="transparent"
                aria-activedescendant="wheel-picker-option-1"
            />
        </div>
    );
};

export default Wheelpick;
