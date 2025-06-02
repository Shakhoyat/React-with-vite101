import React from 'react'
import People from './People'

const Union = ({ money }) => {
    return (
        <>
            <div>This is Union Component</div>
            <People money={money} />
        </>
    )
}

export default Union