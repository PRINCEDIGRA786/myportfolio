import React from 'react';

const CircularProgress = ({ percentage, label }) => {
    const circleRadius = 50;
    const circleDiameter = circleRadius * 2;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const progress = (percentage / 100) * circleCircumference;

    return (
        <div className="flex flex-col items-center group">
            <svg
                width={circleDiameter}
                height={circleDiameter}
                viewBox={`0 0 ${circleDiameter} ${circleDiameter}`}
                className="relative rounded-full"
            >
                <circle
                    cx={circleRadius}
                    cy={circleRadius}
                    r={circleRadius}
                    fill="transparent"
                    // stroke="#e2e8f0"
                    className=' stroke-white'
                    strokeWidth="16"
                />
                <circle
                    cx={circleRadius}
                    cy={circleRadius}
                    r={circleRadius}
                    fill="transparent"
                    // stroke="#7c3aed"
                    className=' stroke-purple-900 group-hover:stroke-purple-800 text-gradient-to-br from-[rgb(9,9,121)] via-[rgb(144,6,161)] to-[rgb(0,212,255)] '
                    strokeWidth="16"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={circleCircumference - progress}
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
            </svg>
            <div className="absolute text-xl mt-8 ml-2 font-semibold text-white group-hover:animate-fadeIn" 
                // style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
                {percentage}%
            </div>
            <div className="lg:mt-4 mt-1 group-hover:animate-fadeIn text-white font-extrabold">{label}</div>
        </div>
    );
};

export default CircularProgress;




