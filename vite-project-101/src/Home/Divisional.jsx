import React from 'react'
import District from './District'

const Divisional = ({ money }) => {
    return (
        <div>
            <h1>this is Divisional component</h1>
            <District money={money} />
        </div>
    )
}

export default Divisional