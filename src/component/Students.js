import React, { useEffect } from 'react';
import { SiMusicbrainz } from 'react-icons/si';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';
import { GiDramaMasks } from 'react-icons/gi';
import { FaPaintBrush } from 'react-icons/fa';
import { FcSportsMode } from 'react-icons/fc';
import { GiRobotAntennas } from 'react-icons/gi';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

//  Objects

const students = [
    {
        id: "1",
        icon: <SiMusicbrainz aria-label='Music Icon' className="text-4xl text-green-600" />,
        name: "Music",
        link: "https://example.com/"
    },
    {
        id: "2",
        icon: <PiPersonArmsSpreadFill aria-label='Dance Icon' className="text-4xl text-red-600" />,
        name: "Dance",
        link: "https://example.com/"
    },
    {
        id: "3",
        icon: <GiDramaMasks aria-label='Drama Icon' className="text-4xl text-blue-600" />,
        name: "Drama",
        link: "https://example.com/"
    },
    {
        id: "4",
        icon: <FaPaintBrush aria-label='Art Icon' className="text-4xl text-violet-600" />,
        name: "Art",
        link: "https://example.com/"
    },
    {
        id: "5",
        icon: <FcSportsMode aria-label='Sports Icon' className="text-4xl text-green-600" />,
        name: "Sports",
        link: "https://example.com/"
    },
    {
        id: "6",
        icon: <GiRobotAntennas aria-label='Robotics Icon' className="text-4xl text-orange-600" />,
        name: "Robotics",
        link: "https://example.com/"
    },
];

const clubs = [
    {
        id: "1",
        name: "Debate Club",
        link: "https://example.com/"
    },
    {
        id: "2",
        name: "Science Club",
        link: "https://example.com/"
    },
    {
        id: "3",
        name: "Literary Society",
        link: "https://example.com/"
    },
    {
        id: "4",
        name: "Environmental Club",
        link: "https://example.com/"
    },
    {
        id: "5",
        name: "Astronomy Club",
        link: "https://example.com/"
    },
    {
        id: "6",
        name: "Coding Club",
        link: "https://example.com/"
    },
];

const achievements = [
    {
        id: 1,
        name: "John Smith",
        title: "National Level Math Olympiad Winner",
    },
    {
        id: 2,
        name: "Sarah Lee",
        title: "Gold Medalist in State Swimming Championship",
    },
    {
        id: 3,
        name: "Tech Innovators Club",
        title: "Winners of Inter-School Robotics Competition",
    }
];

const studentCouncil = [
    {
        id: 1,
        role: "President",
        name: "Amy Parker",
        grade: 12
    },
    {
        id: 2,
        role: "Vice President",
        name: "Rajiv Mehta",
        grade: 11
    },
    {
        id: 3,
        role: "Secretary",
        name: "Lisa Wong",
        grade: 10
    }
];

const Students = ({refreshKey}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        accessibility: true,
        pauseOnHover: true,
    };

    useEffect(() => {
        AOS.init();
    }, [refreshKey])

    return (
        <div className='p-2 md:p-10' aria-labelledby="activities-title">
            <header>
                <h1 id="activities-title" className='text-4xl font-bold text-gray-700 text-center mb-10'>Student Activities</h1>
            </header>

            <section className='bg-white p-10 flex flex-col w-full justify-center'>
                <h2 className='text-3xl font-bold text-gray-700 pb-5'>Life at Springdale</h2>
                <div>
                    <h3 className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>
                        Extracurricular Activities
                    </h3>
                    <div className='flex flex-col md:flex-row md:flex-wrap gap-10 w-full justify-center py-3 md:p-5'>
                        {students.map((activity) => (
                            <div key={activity.id} className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 md:w-1/4' data-aos="zoom-in"
                            data-aos-duration="1000">
                                <div className='flex justify-center mb-4'>{activity.icon}</div>
                                <p className="text-xl font-semibold text-center mb-2">{activity.name}</p>
                                <a href={activity.link}
                                    className="block text-center text-blue-500 hover:text-blue-700 transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer">Learn more</a>
                            </div>
                        ))}
                    </div>
                </div>
                <h3 className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>
                    Clubs and Societies
                </h3>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-10 w-full justify-center py-3 md:p-5'>
                    {clubs.map((activity) => (
                        <div key={activity.id} className='bg-white shadow-md rounded-lg pb-6 hover:shadow-lg transition-shadow duration-300 md:w-1/4' data-aos="fade-up"
                        data-aos-duration="1000">
                            <img src='https://via.placeholder.com/400' alt='icon' className='mb-2 rounded' />
                            <p className="text-xl font-semibold text-center mb-2">{activity.name}</p>
                            <a href={activity.link}
                                className="block text-center text-blue-500 hover:text-blue-700 transition duration-300"
                                target="_blank"
                                rel="noopener noreferrer">Learn more</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section className='bg-white p-10 flex flex-col w-full justify-center'>
                <h2 className='text-3xl font-bold text-gray-700 pb-5 border-b-2 border-blue-900 mb-2'>Achievements</h2>
                <div className="w-full mt-2 md:w-2/4 md:max-w-4xl md:mx-auto md:p-10">
                    <Slider {...settings}>
                        {achievements.map((achievement) => (
                            <div key={achievement.id} data-aos="zoom-in"
                            data-aos-duration="800">
                                <img src='https://via.placeholder.com/400' alt={`Achievement: ${achievement.name}`} className="w-full md:h-96" />
                                <p className='text-white px-4 bg-blue-950/100 py-2 h-24 md:h-auto md:py-4'>{achievement.name}, {achievement.title}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Student councils */}
            <section className='bg-white p-10 flex flex-col w-full justify-center'>
                <h2 className='text-3xl font-bold text-gray-700 pb-5 border-b-2 border-blue-900 mb-2'>Student Council</h2>
                <div className='flex flex-col md:flex-row md:flex-wrap justify-center bg-white md:p-5'>
                    {studentCouncil.map((sc) => (
                        <div key={sc.id} className='md:w-1/5 m-2 bg-blue-950/100 text-white rounded' data-aos="zoom-in"
                        data-aos-duration="1500">
                            <img src='https://via.placeholder.com/400' alt={`Student Council Member: ${sc.name}`} />
                            <div className='h-auto text-white text-center p-2'>
                                <p className='text-center'>{sc.name}</p>
                                <p className='text-center'>{sc.role} | {sc.grade}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Students;
