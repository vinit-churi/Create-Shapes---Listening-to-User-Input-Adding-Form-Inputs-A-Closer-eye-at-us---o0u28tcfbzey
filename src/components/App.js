import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
    const [currentValue, setCurrentValue] = useState("square"); // stores the select value;
    const [shapes, setShape] = useState([]); // ["square", "circle"]
    const handleChange = (e) => {
        setCurrentValue(e.target.value);
    };
    const handleClick = () => {
        setShape((shapes) => [...shapes, currentValue]); // shapes.push(select.value)
    };
    // select => circle || square
    // ShapeButton => onClick => create the selected shape inside the output div
    return (
        <div id="main">
            <div id="shape-creator">
                <select onChange={handleChange}>
                    <option defaultValue value="square">
                        Square
                    </option>
                    <option value="circle">Circle</option>
                </select>
                <button onClick={handleClick}>Add shape</button>
            </div>
            <div id="shapes-holder">
                {shapes.map((shape, index) => (
                    <div key={index} className={shape}>
                        {index}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
