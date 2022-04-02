import React from "react";
import '../App.css';

function Counter({value = 10}) {
    const [count, setCount] = React.useState(value);
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Счётчик: {count}</h1>
            <button onClick={plus}>Плюс</button>
            <button onClick={minus}>Минус</button>
        </div>
    )
}

export default Counter;