import React from "react";

const Students = ({label, onMove}) => {
    const [inputValue, setInputValue] = React.useState("");
    const [items, setItems] = React.useState([]);

    const handleClickAdd = () =>{
        setItems((prev) => [...prev, inputValue]);
        setInputValue("");
    }

    const handleClickMove = () =>{
        if (onMove){
            onMove(items);
            setItems([]);
        }
    }

    return (
        <div className="input-block">
            <p>{label}</p>
            {items.map((str, index) => <li key={index}>{str}</li>)}
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Введите что-нибудь"  />
            <button onClick={handleClickAdd}>Добавить</button>
            <div>
                <button onClick={handleClickMove}>Переместить</button>
            </div>
        <br/>
        </div>
    )
}

export default Students;