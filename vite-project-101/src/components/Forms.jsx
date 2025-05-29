import React from 'react'
import { useState } from 'react'
const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}, Password: ${password} has been submitted successfully!`);
        setName(''); // Reset the name field
        setEmail(''); // Reset the email field
        setPassword(''); // Reset the password field
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                </div>
                <div>
                    Email : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                </div>
                <div>
                    Password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                </div>
                <div>
                    <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Forms