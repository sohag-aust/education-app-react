import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courseData, setCourseData] = useState([]);
    useEffect( () => {
        fetch('./data.json')
            .then(res=>res.json())
            .then(data=>{
                console.log('== data, ', data);
                setCourseData(data);
            });
    }, []);

    return (
        <section className="course" id="course">

            <h1 className="heading">our popular courses</h1>    

            <div className="box-container">
                {
                    courseData.map((course) => <Course key={course.id} course={course}/>)
                }
            </div>

        </section>
    );
};

export default Courses;