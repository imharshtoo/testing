import React from "react";

const ChildContainer = ({ name, number }) => {
    return (
        <div className={`child ${name}`}>
        <h1>Box {number}</h1>
        <h2>Hello this is harsh kashyap (2020434) from IIITD</h2>
        <p>
        React JS
        </p>
        </div>
    );
};

export default ChildContainer;