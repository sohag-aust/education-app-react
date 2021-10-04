import React from 'react';

const Course = (props) => {

    const {course} = props;
    
    return (
        <div className="box">
            <img src={`/img/courses/${course.id}.jpg`} alt="missing"/>
            <h3 className="price">${course.price}</h3>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                </div>
            <div className="title">learn {course.title} development</div>
                <p>{course.description.substring(0,100)}</p>
                <div className="info">
                    <h3> <i className="far fa-clock"></i> {course.hour_duration} hours </h3>
                    <h3> <i className="far fa-calendar-alt"></i> {course.month_duration} months </h3>
                    <h3> <i className="fas fa-book"></i> 12 modules </h3>
                </div>
            </div>
        </div>
    );
};

export default Course;