import React from 'react'

const Events = () => {
    const handleClick = () => {
        alert('Button clicked!');
    }
    const additionalFunction = (a) => {
        alert('Additional function executed with argument: ' + a);
    }
    return (
        <div>
            <div>We are learning Events</div>
            <button onMouseOver={handleClick}>Click the btn</button>
            <button onClick={() => additionalFunction('Hello')}>Button2</button>
            {/* ()=> is the callback function...means it will execute only when the button2 is clicked otherwise it will always get executed without any click */}
        </div>

    )
}

export default Events