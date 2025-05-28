import React from 'react'

const Person3 = ({ name, age }) => {
    return (
        <div>
            <h2>Nam = {name}</h2>
            <p>Age = {age}</p>
            <p> {(age >= 18) ? <h3>eligible for driving license</h3> : <h3>Not eligible for driving license</h3>}
            </p>
        </div>
    )
}

export default Person3