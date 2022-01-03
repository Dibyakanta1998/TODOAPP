import { useState } from 'react';

const Conversion = () => {

    const [value, setValue] = useState(0);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);


    const calculate = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        setValue(value)
        let x = value
        let y = value * 2
        setFirst(x)
        setSecond(y)
    }

    const calculate2 = (event) => {
     const   value = event.target.value;
        setValue(value)
        let x = value / 2
        let y = value
        setFirst(x)
        setSecond(y)

    }

    return (
        <>
            <input type="number" onChange={calculate} value={first} /><br /><br /><br />
            <input type="number" onChange={calculate2} value={second} />
        </>
    );
}

export default Conversion;