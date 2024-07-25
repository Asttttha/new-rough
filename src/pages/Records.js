import React from 'react';

const Records = () => {
    return (
        <div
            className="bg-white flex flex-col items-center justify-center p-10 gap-10 md:flex-row"
            aria-labelledby="records-title"
        >
            <h2 id="records-title" className="sr-only">School Records</h2>

            <div 
                className="w-40 h-40 bg-blue-500 rounded-full flex flex-col items-center justify-center text-white p-4 shadow-lg"
                role="figure"
                aria-label="Over 1000 Students"
            >
                <p className="text-4xl text-black font-semibold" aria-hidden="true">1000+</p>
                <p className="text-lg text-black font-semibold">Students</p>
            </div>

            <div 
                className="w-40 h-40 bg-green-500 rounded-full flex flex-col items-center justify-center text-white p-4 shadow-lg"
                role="figure"
                aria-label="Over 500 Staff Members"
            >
                <p className="text-4xl text-black font-semibold" aria-hidden="true">500+</p>
                <p className="text-lg text-black font-semibold">Staff Members</p>
            </div>

            <div 
                className="w-40 h-40 bg-red-500 rounded-full flex flex-col items-center justify-center text-white p-4 shadow-lg"
                role="figure"
                aria-label="50 acres of land"
            >
                <p className="text-4xl text-black font-semibold" aria-hidden="true">50 ac.</p>
                <p className="text-lg text-black font-semibold">of land</p>
            </div>
        </div>
    );
}

export default Records;
