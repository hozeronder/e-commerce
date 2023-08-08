import WheelPicker from 'react-simple-wheel-picker';

const data = [
    {
        id: '1',
        value: '1'
    },
    {
        id: '2',
        value: '2'
    },
    {
        id: '3',
        value: '3'
    },
    {
        id: '4',
        value: '4'
    },
    {
        id: '5',
        value: '5'
    },
    {
        id: '6',
        value: '6'
    },
    {
        id: '7',
        value: '7'
    },
    {
        id: '8',
        value: '8'
    },
    {
        id: '9',
        value: '9'
    },
    {
        id: '10',
        value: '10'
    }
];

const Wheelpick = () => {
    const handleOnChange = target => {
        console.log(target);
    };
    return (
        <WheelPicker
            data={data}
            onChange={handleOnChange}
            height={100}
            width={50}
            titleText="Enter value same as aria-label"
            itemHeight={30}
            selectedID={data[0].id}
            color="rgba(255,255,255,0.2"
            activeColor="rgba(255,255,255)"
            backgroundColor="transparent"
            shadowColor="transparent"
        />
    );
};

export default Wheelpick;