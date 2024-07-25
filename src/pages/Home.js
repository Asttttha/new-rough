import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = ({ refreshKey }) => {

    useEffect(() => {
        AOS.init();
    }, [refreshKey])

    return (

        <div
            className="relative h-96 bg-cover bg-center text-white"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
            aria-label="Springdale Public School Banner"
            data-aos="fade-in"
            data-aos-duration="1000"
        >
            <div
                className="absolute inset-0 bg-gradient-to-t from-blue-950/100 to-transparent"
                aria-hidden="true"
            ></div>

            <div
                className="relative z-10 flex flex-col items-start justify-center h-full p-10 mx-4 sm:mx-8 lg:mx-40"
                role="main"
            >
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                    Springdale Public School
                </h1>
                <p className="mb-4 text-base sm:text-lg lg:text-xl w-full sm:w-8/12 lg:w-6/12">
                    Welcome to Springdale Public School, where we nurture young minds for a brighter future.
                </p>
                <Link
                    to="/about"
                    className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black font-semibold rounded hover:bg-blue-900/100 hover:text-white transition duration-300"
                    aria-label="Learn more about Springdale Public School"
                >
                    About
                </Link>
            </div>
        </div>

    );
};

export default Home;
