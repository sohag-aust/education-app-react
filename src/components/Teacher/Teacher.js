import React from 'react';

const Teacher = (props) => {
    const {teacher} = props;
    
    return (
        <div className="teacher">
            <img className="teacher-img" src={`/img/teachers/${teacher.id}.jpg`} alt="missing"/>
            <div className="content">
                <div className="title">
                    <h2>{teacher.name}</h2>
                </div>
                <p>{teacher.education}</p>
            </div>
        </div>
    );
};

export default Teacher;