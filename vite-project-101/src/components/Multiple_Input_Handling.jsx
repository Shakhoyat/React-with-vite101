import { useState } from 'react'
const Multiple_Input_Handling = () => {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
        address: ""
    })
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        console.log(formData);
        setformData({
            name: "",
            email: "",
            password: "",
            age: "",
            phone: "",
            address: ""
        });
        // Here you can handle form submission, like sending data to an API
    }
    return (<>
        <form onSubmit={onSubmitHandler} >
            <div>
                Name : <input type="text" name='name' value={formData.name} onChange={onChangeHandler} placeholder='Enter your name' />
            </div>
            <div>
                Email : <input
                    type="email" name='email' value={formData.email} onChange={onChangeHandler} placeholder='Enter your email' />
            </div>
            <div>
                Password : <input type="password" name='password' value={formData.password} onChange={onChangeHandler} placeholder='Enter your password' />
            </div>
            <div>
                Age : <input type="number" name='age' value={formData.age} onChange={onChangeHandler} placeholder='Enter your age' />
            </div>
            <div>
                Phone : <input type="tel" name='phone' value={formData.phone} onChange={onChangeHandler} placeholder='Enter your phone number' />
            </div>
            <div>
                Address : <textarea name='address' value={formData.address} onChange={onChangeHandler} placeholder='Enter your address'></textarea>
            </div>
            <div>
                <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>Submit</button>
            </div>
        </form>
    </>
    )
}

export default Multiple_Input_Handling