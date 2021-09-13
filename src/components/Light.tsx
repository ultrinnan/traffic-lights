import React from "react";

/*
How to apply active prop to produce changes to the  opacity
*/

const Light = ({ color, active }) => {
    const opacity = active ? '1' : '0.5';
    return (
        <div className="light" style={{ backgroundColor: color, opacity: opacity }} />
    )};

export default Light;
