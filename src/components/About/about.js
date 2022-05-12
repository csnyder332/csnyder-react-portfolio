import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg'

function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Chris Snyder.
              <br className="hidden lg:inline-block" />My Bio will go here.
              
            </h1>
           </div>
        </div>
      </section>
    );
  }

export default About;