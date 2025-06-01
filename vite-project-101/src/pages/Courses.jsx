import React from 'react'
import { Link } from 'react-router-dom'
const Courses = () => {
    const courses = [
        { id: 'React101', name: 'React Basics', price: 100, duration: '3 weeks' },
        { id: 'React201', name: 'Advanced React', price: 150, duration: '4 weeks' },
        { id: 'ReactHooks', name: 'React Hooks', price: 120, duration: '2 weeks' },
        { id: 'NodeFundamentals', name: 'Node.js Fundamentals', price: 110, duration: '3 weeks' },
        { id: 'ExpressDeepDive', name: 'Express.js Deep Dive', price: 130, duration: '3 weeks' },
        { id: 'TypeScriptEssentials', name: 'TypeScript Essentials', price: 140, duration: '2 weeks' },
        { id: 'FullstackMERN', name: 'Fullstack MERN', price: 200, duration: '6 weeks' },
        { id: 'FrontendJest', name: 'Frontend Testing with Jest', price: 90, duration: '2 weeks' }
    ];
    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <h2><Link to={`/courses/${course.id}`}>{course.name}</Link>{" "} </h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses