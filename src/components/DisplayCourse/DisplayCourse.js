import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const DisplayCourse = (props) => {
    const [displayCourseData, setDisplayCourseData] = useState([]);
    useEffect( () => {
        fetch('./data.json')
            .then(res=>res.json())
            .then(data=>{
                setDisplayCourseData(data.slice(0, data.length/2));
                console.log('=== display data: ', displayCourseData);
            });
    }, []);

    return (
        <section className="course" id="course">

            <h1 className="heading">our popular courses</h1>    

            <div className="box-container">
                {
                    displayCourseData.map((course) => <Course key={course.id} course={course}/>)
                }
            </div>

        </section>
    );
};

export default DisplayCourse;