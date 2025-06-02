import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'

const People = () => {
    // const { money } = useContext(MoneyContext); // <-- extract money from context
    // console.log(useContext(MoneyContext));
    const data = useContext(MoneyContext);
    return (
        <>
            <h3>This is People Component and we have {data.money} Tk ... </h3>
            <h3>Dollar: {data.dollar} </h3>
            <h3>Euro: {data.euro} </h3>
            <h3>Counter: {data.cnter} </h3>
            <button onClick={() => data.setcnter(data.cnter + 1)}>Increase Counter</button>
        </>
    )
}

export default People