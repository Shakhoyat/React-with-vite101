import React from 'react'
import Upazila from './Upazila'

const District = ({ money }) => {
    return (
        <div>
            <h1>This is District Component</h1>
            <Upazila money={money} />
        </div>)
}

export default District