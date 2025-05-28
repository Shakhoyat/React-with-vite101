import React from 'react'

const Events = () => {
    const handleClick = () => {
        alert('Button clicked!');
    }
    return (
        <div>
            <div>We are learning Events</div>
            <button onMouseOver={handleClick}>Click the btn</button>
        </div>

    )
}

export default Events