import React from 'react';
import { FaBrain, FaChalkboardTeacher, FaNetworkWired } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi2";
import { GiBookshelf, GiDiscussion, GiTeacher } from 'react-icons/gi';


// Objects
const methodologies = [
    {
        id: 1,
        icon: <GiTeacher aria-label='icon' className="text-4xl text-blue-600" />,
        name: 'Lectures',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam.',
    },
    {
        id: 2,
        icon: <GiBookshelf aria-label='icon' className="text-4xl text-green-600" />,
        name: 'Textbooks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam.',
    },
    {
        id: 3,
        icon: <GiDiscussion aria-label='icon'className="text-4xl text-purple-600" />,
        name: 'Class discussion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam.',
    },
    {
        id: 4,
        icon: <FaChalkboardTeacher aria-label='icon' className="text-4xl text-red-600" />,
        name: 'Demonstration',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam.',
    },
    {
        id: 5,
        icon: <HiUserGroup aria-label='icon' className="text-4xl text-teal-600" />,
        name: 'Group Work',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam.',
    },
    {
        id: 6,
        icon: <FaBrain aria-label='icon' className="text-4xl text-yellow-600" />,
        name: 'Experiential Learning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam.',
    },
    {
        id: 7,
        icon: <FaNetworkWired aria-label='icon' className="text-4xl text-pink-600" />,
        name: 'Online Learning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam.',
    },
];


const TeachingMethodologies = () => {

    return (
        <div className="p-10" aria-labelledby="teaching-methodologies-title">
            <p className="text-3xl font-bold text-gray-700">Teaching Methodologies</p>
            <p className='py-2 italic text-gray-700'>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-10 w-full justify-center md:p-5">
                {methodologies.map((methodology) => (
                    <div
                        key={methodology.id}
                        className="bg-white shadow-md rounded-lsg p-4 hover:shadow-lg transition-shadow duration-300 md:w-1/5"
                    >
                        <div className="flex justify-center mb-4">{methodology.icon}</div>
                        <h3 className="text-xl font-semibold text-center mb-2">{methodology.name}</h3>
                        <p className="text-gray-600 text-center">{methodology.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachingMethodologies;
