import React from 'react'

const Person3 = ({ name, age, pancard }) => {
    return (
        <div>
            <h2>Nam = {name}</h2>
            <p>Age = {age}</p>
            <p>
                {(age >= 18) ? <h3>eligible for driving license</h3> : <h3>Not eligible for driving license</h3>}
            </p>
            <p>
                {pancard ? <h3>You can open  a bank A/c now !!!</h3> : " "}
            </p>
            <p>
                {(pancard == true) && <p>You can have an Account bro </p>}
            </p>
        </div>
    )
}

export default Person3