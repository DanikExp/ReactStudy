import './App.css';
import React from "react";
import Students from "./componets/StateUP";
import RandomPhrase from "./componets/RandomPhrase";


function App() {
    /*const [mainList, setMainList] = React.useState([]);

    const onMoveStudents = (subList) =>{
        setMainList([...mainList, ...subList]);
    }*/
    const [phrases, setPhrases] = React.useState([]);

    const handleClickRemove = () =>{
        setPhrases([]);
    }

    return (
        <div>
            <RandomPhrase/>
            {/*<Students label="Поток 1" onMove={onMoveStudents}/>
            <Students label="Поток 2" onMove={onMoveStudents}/>
            <Students label="Поток 3" onMove={onMoveStudents}/>
            <br/>
            {mainList.map((str) => <li key={str}>{str}</li>)}*/}
        </div>
    )

}

export default App;
