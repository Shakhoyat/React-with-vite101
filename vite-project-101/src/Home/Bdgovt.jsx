import React from 'react'
import Divisional from './Divisional'

const Bdgovt = ({ money }) => {

    return (
        <div>
            <h1>This is Bd Govt. Component</h1>
            <Divisional money={money} />
        </div>
    )
}

export default Bdgovt