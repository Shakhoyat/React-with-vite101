import React from 'react'

const Forms = () => {
    return (
        <div>
            <form action="">
                <div>
                    Name : <input type="text" placeholder='Enter your name' />
                </div>
                <div>
                    Email : <input type="email" placeholder='Enter your email' />
                </div>
                <div>
                    Password : <input type="password" placeholder='Enter your password' />
                </div>
                <div>
                    <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Forms