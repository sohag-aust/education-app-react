import React from 'react';
import DisplayCourse from '../DisplayCourse/DisplayCourse';

const Home = () => {
    return (
        <div>
            <section className="home" id="home">

                <h1>education from home</h1>
                <p>Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.</p>
                <div><button className="btn">get started</button></div>

                <div className="shape"></div>

            </section>
            
            <DisplayCourse />
        </div>
        
    );
};

export default Home;