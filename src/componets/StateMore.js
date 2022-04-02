import React from "react";
import '../App.css';

function StateMore() {
    const [query, setQuery] = React.useState(0);

    const onChangeInput = (event) => {
        setQuery(event.target.value);
    };

    const onChangeInputName = (event) => {
        setName(event.target.value);
    }

    const onClickClear = () => {
        setQuery("");
    };

    const onClickClearName = () => {
        setName("");
    };

    const [name, setName] = React.useState("Даник");

    return (
        <div>
            <input value={query} onChange={onChangeInput} placeholder="Поиск..."/>
            <button onClick={onClickClear}>Очистить поле</button>
            <h2>Ищем по запросу "{query}"</h2>
            <input value={name} onChange={onChangeInputName}/>
            <button onClick={onClickClearName}>Очистить имя</button>
            <h1>Выводит имя: {name}</h1>
        </div>
    )
}

export default StateMore;