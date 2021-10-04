import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';


const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect( () => {
        fetch('./teacher.json')
            .then(res=>res.json())
            .then(data=>{
                setTeachers(data);
            });
    }, []);

    return (
        <div className="course">
            {
                teachers.map((teacher)=><Teacher key={teacher.id} teacher={teacher} />)
            }
        </div>
    );
};

export default Teachers;