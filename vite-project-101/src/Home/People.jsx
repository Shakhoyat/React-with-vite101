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
        </>
    )
}

export default People