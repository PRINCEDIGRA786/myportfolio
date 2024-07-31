import * as React from 'react';
import { useState, useRef } from 'react';
import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';
import { FaChevronCircleRight } from 'react-icons/fa';
import Workexperience from '../components/Workexperience';
import Projects from '../components/Projects';
import Form from '../components/Form';

export default function Home() {

    const resumeLink = `${process.env.PUBLIC_URL}/resume.pdf`;
    const [visibleCards, setVisibleCards] = useState({ leftCards: 0, rightCards: 0 });
    const [displayText, setDisplayText] = useState("");
    const textArray = ["Hi!", "I", "am", "Prince,", "Web", "Developer"];

    const handleMouseEnter = () => {
        setVisibleCards({ leftCards: 0, rightCards: 0 });
        setDisplayText("");
        startTextAnimation();
        startCardAnimation();
    };

    const startTextAnimation = () => {
        let textTimeouts = [];
        textArray.forEach((word, index) => {
            textTimeouts.push(setTimeout(() => {
                setDisplayText(prev => prev + " " + word);
            }, 800 * index));
        });

        return () => textTimeouts.forEach(timeout => clearTimeout(timeout));
    };

    const startCardAnimation = () => {
        let leftCardTimeouts = [];
        let rightCardTimeouts = [];

        leftCardTimeouts.push(setTimeout(() => {
            setVisibleCards(prev => ({ ...prev, leftCards: 1 }));
        }, 1000));

        leftCardTimeouts.push(setTimeout(() => {
            setVisibleCards(prev => ({ ...prev, leftCards: 2 }));
        }, 2000));

        rightCardTimeouts.push(setTimeout(() => {
            setVisibleCards(prev => ({ ...prev, rightCards: 1 }));
        }, 3000));

        rightCardTimeouts.push(setTimeout(() => {
            setVisibleCards(prev => ({ ...prev, rightCards: 2 }));
        }, 4000));

        return () => {
            leftCardTimeouts.forEach(timeout => clearTimeout(timeout));
            rightCardTimeouts.forEach(timeout => clearTimeout(timeout));
        };
    };

    const leftCardsData = [
        { image: require('../assets/vercel.jpeg'), content: "Vercel Profile", link: "https://vercel.com/new/princedigra786" },
        { image: require('../assets/facebook.png'), content: "Facebook Profile", link: "https://www.facebook.com/prince.digra.98/" }
    ];

    const rightCardsData = [
        { image: require('../assets/github.jpeg'), content: "Github Profile", link: "https://github.com/PRINCEDIGRA786/" },
        { image: require('../assets/linkedin.png'), content: "LinkedIn Profile", link: "https://www.linkedin.com/in/prince-368909285/" }
    ];

    // For the skills section
    const skills = [
        { percentage: 95, label: 'HTML5' },
        { percentage: 90, label: 'CSS3' },
        { percentage: 90, label: 'Javascript' },
        { percentage: 80, label: 'MongoDB' },
        { percentage: 80, label: 'Express' },
        { percentage: 80, label: 'Node.js' },
        { percentage: 80, label: 'React.js' },
        { percentage: 75, label: 'C++' },
        { percentage: 85, label: 'Tailwindcss' },
        // Add more skills as needed
    ];

    const visibleCount = 3; // Number of skills to show at a time
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + visibleCount >= skills.length ? 0 : prevIndex + visibleCount)
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - visibleCount < 0 ? skills.length - visibleCount : prevIndex - visibleCount)
        );
    };

    const [tab, setTab] = useState('1');


    const homeref = useRef(null);
    const experienceref = useRef(null)
    const projectref = useRef(null)
    const skillref = useRef(null)
    const formref = useRef(null)
    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className='cursor-pointer group' onMouseEnter={handleMouseEnter}>

                {/* Existing code for background, logo, and navigation */}
                <div>
                    <img src="https://wallpapercave.com/wp/JkkMS9Q.jpg" alt="Loading" className='h-[115vh] brightness-100 contrast-200 w-[100vw]' />
                </div>
                <div className='fixed z-50 bg-black w-[100vw]  top-0 pl-10 md:flex space-x-10 hidden '>
                    <div>
                        <img src={require('../assets/princelogo.jpg')} alt=""
                            className='h-24 w-28 brightness-100 contrast-200' />
                    </div>
                    <ul className='flex space-x-8 text-white font-semibold mt-8 pl-[15vw] lg:pl-[25vw] text-md'>
                        <li onClick={() => scrollToSection(homeref)}>Home</li>
                        <li onClick={() => scrollToSection(experienceref)}>Experience</li>
                        <li onClick={() => scrollToSection(projectref)}>Projects</li>
                        <li onClick={() => scrollToSection(skillref)}>Skills</li>
                    </ul>
                    <ul className='flex mt-4 pl-[3vw] space-x-3  '>
                        <a href="https://www.facebook.com/prince.digra.98/" target='_blank'>
                            <img src={require('../assets/facebook.png')} className='h-10 w-10 rounded-full hover:border-2 hover:h-12 hover:w-12 hover:border-white duration-700 transition-all' />
                        </a>
                        <a href="https://github.com/PRINCEDIGRA786/" target='_blank'>
                            <img src={require('../assets/github.jpeg')} className='h-10 w-10 rounded-full border-2 border-white hover:border-4 hover:h-12 hover:w-12 duration-700 transition-all' />
                        </a>
                        <a href="https://www.linkedin.com/in/prince-368909285/" target='_blank'>
                            <img src={require('../assets/linkedin.png')} className='h-10 w-10 rounded-full hover:border-2 hover:h-12 hover:w-12 hover:border-white duration-700 transition-all' />
                        </a>
                    </ul>
                    <button className='text-white text-md border-2 border-white bg-transparent h-16 ml-2 xl:block hidden
                     hover:bg-slate-400 mt-1 w-40 duration-700 transition-all' onClick={() => scrollToSection(formref)}>Let's Connect</button>
                </div>
                <h1 className='text-white md:text-[30px] text-2xl left-[15%] mx-auto absolute top-3  md:top-24 md:left-[35%] font-extrabold'>WELCOME TO MY PORTFOLIO</h1>
                <div className='absolute lg:top-2 top-6 left-4 md:left-[24%] lg:left-[28%]' ref={homeref}>
                    <img src={require('../Prince-removebg-preview.png')} alt="" className='lg:h-[500px] lg:w-[450px] md:h-[400px] md:w-[300px] sm:h-96 sm:w-96 h-72 w-72 brightness-75  contrast-200' />
                </div>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">

                    <h1 className='text-white text-xl mx-auto flex space-x-4 hover:text-yellow-300  absolute md:bottom-1 top-[520px] left-[48%] font-semibold'>My Resume <span>

                        <FaChevronCircleRight className="h-4 w-4 mt-2 ml-2 cursor-pointer" />
                    </span></h1>
                </a>
                {/* left side content about me */}

                <div className='absolute md:top-32 md:left-6 left-6 top-16 p-4 rounded-lg group-hover:hidden lg:w-60'>
                    <h1 className='lg:text-[50px] text-2xl md:text-[30px] leading-loose  font-extrabold text-white'>
                        {displayText}
                    </h1>
                </div>

                <div className='absolute lg:top-32 top-12 left-0 lg:left-6 space-y-32 lg:space-y-10 hidden group-hover:block transition-opacity duration-700'>
                    {leftCardsData.slice(0, visibleCards.leftCards).map((card, index) => (
                        <Card key={index} image={card.image} content={card.content} link={card.link} />
                    ))}
                </div>

                <div className='absolute lg:top-32 md:top-40 top-96 right-6 p-4 rounded-lg group-hover:hidden md:w-80'>
                    <h1 className='lg:text-xl md:text-lg ml-6 sm:ml-0 text-sm font-extrabold lg:leading-loose text-white'>
                        "Aspiring Full Stack Developer specializing in the MERN stack, dedicated to learning and building dynamic, user-centric web applications that drive innovation and deliver seamless digital experiences."
                    </h1>
                </div>

                <div className='absolute lg:top-32 lg:right-6 top-12 right-0 space-y-32 lg:space-y-10 group-hover:block hidden transition-opacity duration-700 delay-1000'>
                    {rightCardsData.slice(0, visibleCards.rightCards).map((card, index) => (
                        <Card key={index} image={card.image} content={card.content} link={card.link} />
                    ))}
                </div>

            </div>

            {/* Skills section */}
            <div className='relative'>
                <div>
                    <img src="https://www.hdwallpapers.in/download/dark_purple_hd_dark_purple-HD.jpg" className=' h-[200vh] sm:h-[170vh] w-[100vw] brightness-75 contrast-125' alt="" />
                </div>

                <div className='bg-black lg:h-80 h-[600px] w-[80%] lg:w-[800px] space-y-8  lg:space-y-6 rounded-3xl flex-col absolute top-4 text-center p-3 left-5  sm:left-[20%] lg:left-52 overflow-hidden'>
                    <h1 className='text-white lg:text-3xl text-xl font-extrabold'>Skills</h1>

                    <div className="flex flex-col lg:flex-row space-y-0 lg:space-x-10 ml-[20%] lg:ml-28 text-center" ref={skillref}>
                        {skills.slice(currentIndex, currentIndex + visibleCount).map((skill, index) => (
                            <div
                                key={index}
                                className='p-4 h-40 w-40 border-white'
                            >
                                <CircularProgress percentage={skill.percentage} label={skill.label} />
                            </div>
                        ))}
                    </div>

                    <div className='absolute lg:top-32 lg:right-4 bottom-2 right-[50%] text-white'>
                        <FaChevronCircleRight className="h-6 w-6 rotate-90 lg:-rotate-0  cursor-pointer" onClick={handleNext} />
                    </div>
                    <div className='absolute lg:top-32 lg:left-4 top-6 left-[45%] text-white'>
                        <FaChevronCircleRight className="lg:rotate-180 -rotate-90 h-6 w-6 cursor-pointer" onClick={handlePrev} />
                    </div>
                </div>

                <h1 className='text-3xl ml-60 hidden lg:block font-extrabold my-12 top-80 left-64 absolute  text-white'>Work Experience</h1>
                <div className='absolute top-[450px] hidden lg:block space-y-8 left-60 ' ref={experienceref}>
                    <Workexperience company={"Solitaire Infoyses"} position={"Intern"} time={"June-July,2024"} course={"React JS"} />
                    <Workexperience company={"Solitaire Infoyses"} position={"Intern"} time={"June-July,2024"} course={"Node JS"} />
                    <Workexperience company={"SimpliLearn"} position={"Intern"} time={"Nov-Dec,2023"} course={"MERN STACK"} />


                </div>
            </div>


            {/* Third portion:That is portion of the projects */}
            <div className=' bg-black p-8 py-20' >
                <div className='text-center space-y-8'>
                    <h1 className='text-white text-3xl font-extrabold'>Projects</h1>
                    <p className='text-[#858181] text-lg'>Here're some projects of mine</p>
                </div>
                <div className='text-center w-[70%] lg:w-[40%] border-2 p-3 mx-auto my-6 border-white rounded-3xl py-10' ref={projectref}>
                    <ul className='text-white flex  justify-around font-semibold cursor-pointer'>
                        <li className={`${tab === '1' ? 'text-red-600 font-extrabold' : ''}`} onClick={() => setTab('1')}>
                            Tab 1
                        </li>

                        <li className={`${tab === '2' ? 'text-red-600 font-extrabold' : ''}`} onClick={() => setTab('2')}>
                            Tab 2
                        </li>
                        <li className={`${tab === '3' ? 'text-red-600 font-extrabold' : ''}`} onClick={() => setTab('3')}>
                            Tab 3
                        </li>

                    </ul>
                </div>
                <Projects tab={tab} />
            </div>
            <div ref={formref}>
                <Form />
            </div>


            {/* Last part of the page */}

            <div className='bg-black justify-between flex px-20 p-4'>
                <div>
                    <img src={require('../assets/princelogo.jpg')} className='h-60 w-60' />
                </div>
                <div className='flex-col mt-8 space-y-5'>
                    <ul className='flex flex-col sm:flex-row mt-4 sm:pl-12 pl-8 space-y-2 sm:space-x-5 cursor-pointer'>
                        <a href="https://www.facebook.com/prince.digra.98/" target='_blank'>
                            <img src={require('../assets/facebook.png')} className='h-10 w-10 rounded-full hover:border-2 hover:h-12 hover:w-12 hover:border-white duration-700 transition-all' />
                        </a>
                        <a href="https://github.com/PRINCEDIGRA786/" target='_blank'>
                            <img src={require('../assets/github.jpeg')} className='h-10 w-10 rounded-full border-2 border-white hover:border-4 hover:h-12 hover:w-12 duration-700 transition-all' />
                        </a>
                        <a href="https://www.linkedin.com/in/prince-368909285/" target='_blank'>
                            <img src={require('../assets/linkedin.png')} className='h-10 w-10 rounded-full hover:border-2 hover:h-12 hover:w-12 hover:border-white duration-700 transition-all' />
                        </a>

                        {/* <img src={require('../assets/facebook.png')} className='h-10 w-10 rounded-full hover:border-2 hover:h-12 hover:w-12 hover:border-white duration-700 transition-all' />
                        <img src={require('../assets/github.jpeg')} className='h-10 w-10 rounded-full border-2 border-white hover:border-4 hover:h-12 hover:w-12 duration-700 transition-all' />
                        <img src={require('../assets/linkedin.png')} className='h-10 w-10 rounded-full hover:border-2 hover:h-12 hover:w-12 hover:border-white duration-700 transition-all' /> */}
                    </ul>
                    <h1 className='text-[#868383]  text-lg font-medium'>Copyright 2022. All Rights Reserved</h1>
                </div>

            </div>
        </>
    );
}
