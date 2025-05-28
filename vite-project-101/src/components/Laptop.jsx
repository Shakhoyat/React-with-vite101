import React from 'react'

const Laptop = ({ brandname, model, price }) => {
    const obj = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
        textAlign: 'center'
    }
    return (
        // <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px', margin: '10px' }}>
        // <h3 style={{ fontWeight: 'bold', fontSize: '2rem', color: '#1a237e', textShadow: '1px 1px 4px #fff' }}>
        <div style={obj}>
            <h3>
                Brand: {brandname} <br />
                Model: {model} <br />
                Price: ${price}
            </h3>
        </div>
    )
}

export default Laptop