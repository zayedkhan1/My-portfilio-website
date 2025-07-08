import React from 'react';
// import Typewriter from 'typewriter-effect/dist/core';
// import Typewriter from 'typewriter-effect';
// import Typed from "react-typed";
// import { Typed } from "react-typed";
import { Typewriter } from 'react-simple-typewriter';



import Tilt from 'react-parallax-tilt';
import MainLogo from '../../assets/company_logo/Profile.jpeg'
import { TypewriterClass } from 'typewriter-effect';

const About = () => {
    return (
        <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Zayed Khan
          </h2>
          {/* Skills Heading with Typing Effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
             <span className="text-white">I am a </span>
      <span className="text-[#8245ec] ">
        <Typewriter
          words={[
            "Fullstack Developer",
            "App Developer",
            "UI/UX Designer",
            "Coder",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
          
        />
      </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a jounior full-stack Developer Looking for oppurtunities to take my skills at next level . Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Resume NOt available
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={MainLogo}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
    );
};

export default About;