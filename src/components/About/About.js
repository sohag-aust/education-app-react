import React from 'react';
import img from '../../image/3.jpg';

const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <div className="image">
                    <img src={img} alt="" />
                </div>

                <div className="content">
                    <h3>why choose us?</h3>
                    <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. </p>
                    <div><button className="btn">learn more</button></div>
                </div>
            </section>
        </div>
    );
};

export default About;