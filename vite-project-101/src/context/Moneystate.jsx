import React, { useState } from 'react'
import MoneyContext from './MoneyContext'

const Moneystate = (props) => {
    const money = 1000;
    const dollar = 100;
    const euro = 200;
    const [cnter, setcnter] = useState(0);
    return (
        <MoneyContext.Provider value={{ money, cnter, setcnter, dollar, euro }}>
            {props.children}
        </MoneyContext.Provider>
    );
};

export default Moneystate