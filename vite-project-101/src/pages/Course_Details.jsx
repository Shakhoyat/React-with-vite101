import React, { use } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Course_Details = () => {
    const course_detail_array = [
        { id: 'React101', name: 'React Basics', price: 100, duration: '3 weeks' },
        { id: 'React201', name: 'Advanced React', price: 150, duration: '4 weeks' },
        { id: 'ReactHooks', name: 'React Hooks', price: 120, duration: '2 weeks' },
        { id: 'NodeFundamentals', name: 'Node.js Fundamentals', price: 110, duration: '3 weeks' },
        { id: 'ExpressDeepDive', name: 'Express.js Deep Dive', price: 130, duration: '3 weeks' },
        { id: 'TypeScriptEssentials', name: 'TypeScript Essentials', price: 140, duration: '2 weeks' },
        { id: 'FullstackMERN', name: 'Fullstack MERN', price: 200, duration: '6 weeks' },
        { id: 'FrontendJest', name: 'Frontend Testing with Jest', price: 90, duration: '2 weeks' }
    ];
    // console.log(useParams());
    // console.log(useLocation());
    const { id } = useParams();
    const courseDetail = course_detail_array.find(course => course.id === id);
    console.log(courseDetail);
    const location = useLocation();
    return (
        <>
            <div>
                <h1>Course Details</h1>
                <h2>Course ID: {id}</h2>
                {courseDetail ? (
                    <div>
                        <h3>Course Name: {courseDetail.name}</h3>
                        {
                            location.pathname !== `/courses/ExpressDeepDive` && (
                                <>
                                    <p> Price: ${courseDetail.price}</p>
                                    <p>Duration: {courseDetail.duration}</p>
                                </>
                            )
                        }
                    </div>
                ) : (
                    <p>No course found with the ID: {id}</p>
                )}
                {/* You can fetch and display more details about the course using the id */}
            </div>
            <button>
                <Link to={"/courses"} style={{ textDecoration: "none", color: "-moz-initial" }}>All courses</Link>
            </button>

        </>
    )
}

export default Course_Details
