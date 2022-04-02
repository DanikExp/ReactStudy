import React from "react";
import '../App.css';

function Arr1() {
    const Tag = ({name}) => {
        return <span>#{name}</span>
    }

    const tags = ['первый', 'второй', 'третий'];
    return tags.map(str => <Tag name={str}/>);
}

export default Arr1;