import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'

const People = () => {
    const { money } = useContext(MoneyContext); // <-- extract money from context
    console.log(useContext(MoneyContext));
    return (
        <>
            <h3>This is People Component and we have {money} money now.</h3>
        </>
    )
}

export default People