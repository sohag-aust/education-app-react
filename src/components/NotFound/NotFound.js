import React from 'react';

const NotFound = () => {

    const myStyle = {
        fontSize:'30px'
    }

    return (
        <section className="not-found" id="home">

               <h1 style={myStyle}> <span style={{fontSize: '50px'}}> 404 </span> Not Found</h1> 

        </section>
    );
};

export default NotFound;