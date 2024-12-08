import React from "react";
import '../styles/index.css';

const today = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export const Header = () => {
    return <header>
        <h1>React Cinema</h1>
        <p>{today()}</p>
    </header>
};