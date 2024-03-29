import WheelPicker from "react-simple-wheel-picker";
import React from "react";

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

const Wheelpick2 = ({ selectedValue2, setSelectedValue2 }) => {
    const handleOnChange = (target) => {
            setSelectedValue2(target.value);
    };

    return (
        <div className="wheelpicker">
            <WheelPicker
                data={data}
                onChange={(target) => handleOnChange(target)}
                height={100}
                width={50}
                titleText="Enter value same as aria-label"
                itemHeight={30}
                selectedID={data.find((item) => item.value === selectedValue2).id}
                color="rgba(255,255,255,0.2)"
                activeColor="rgba(255,255,255)"
                backgroundColor="transparent"
                shadowColor="transparent"
                aria-activedescendant="wheel-picker-option-1"
            />
        </div>
    );
};

export default Wheelpick2;
