import React, { useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Objects

const slides = [
    {
        src: "https://via.placeholder.com/800x400?text=Slide+1",
        alt: "Slide 1",
    },
    {
        src: "https://via.placeholder.com/800x400?text=Slide+2",
        alt: "Slide 2",
    },
    {
        src: "https://via.placeholder.com/800x400?text=Slide+3",
        alt: "Slide 3",
    },
    {
        src: "https://via.placeholder.com/800x400?text=Slide+4",
        alt: "Slide 4",
    },
    {
        src: "https://via.placeholder.com/800x400?text=Slide+5",
        alt: "Slide 5",
    },
    {
        src: "https://via.placeholder.com/800x400?text=Slide+6",
        alt: "Slide 6",
    }
];

const facilities = [
    {
        src: "https://via.placeholder.com/500?text=Pic+1",
        alt: "Pic 1",
        description: "State-of-the-art science and computer labs",
    },
    {
        src: "https://via.placeholder.com/500?text=Pic+2",
        alt: "Pic 2",
        description: "Spacious and well-equipped classrooms",
    },
    {
        src: "https://via.placeholder.com/500?text=Pic+3",
        alt: "Pic 3",
        description: "Library with a vast collection of books and digital resources",
    },
    {
        src: "https://via.placeholder.com/500?text=Pic+4",
        alt: "Pic 4",
        description: "Sports facilities including a playground, gymnasium, and swimming pool",
    }
];

const About = ({ refreshKey }) => {

    useEffect(() => {
        AOS.init();
    }, [refreshKey])

    // Slider settings
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <div className="bg-gray-100 flex flex-col gap-10">

            {/* Hero section */}
            <div className="m-0 h-96 bg-cover bg-center text-white"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1464983308776-3c7215084895?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                }}
                data-aos="fade-in"
                data-aos-duration="1000"
            />

            {/* Content */}
            <div className="container mx-auto px-4 flex flex-col gap-10">

                {/* History */}
                <div className="m-5"
                    data-aos="flip-up"
                    data-aos-duration="3000"
                >
                    <blockquote className="border-l-4 border-blue-900/100 px-2 italic text-3xl font-bold mb-4">
                        History
                    </blockquote>
                    <p className="text-lg text-gray-700">
                        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
                    </p>
                </div>

                {/* Vision and Mission */}
                <div className="m-5" >
                    <blockquote data-aos="flip-up" data-aos-duration="1000" className="border-l-4 border-blue-900/100 px-2 italic text-3xl font-bold mb-4">
                        Our Vision and Mission
                    </blockquote>
                    <div className="flex flex-col md:flex-row justify-center gap-10 py-10"

                    >
                        <div className="md:w-2/5 mb-8 md:mb-0 border-2 rounded border-indigo-900/30 p-10" data-aos="fade-right"
                            data-aos-duration="1000">
                            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                            <p className="text-lg italic text-gray-700">
                                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
                            </p>
                        </div>
                        <div className="md:w-2/5 border-2 border-indigo-900/30 rounded p-10" data-aos="fade-left"
                            data-aos-duration="1000">
                            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                            <p className="text-lg italic text-gray-700">
                                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Message from the principal */}
                <div className="m-5">
                    <blockquote data-aos="flip-up" data-aos-duration="1000" className="border-l-4 border-blue-900/100 px-2 italic text-3xl font-bold mb-4">
                        Message from the Principal
                    </blockquote>
                    <div className="md:flex py-10 gap-5 items-center"

                    >
                        <img src="https://via.placeholder.com/700x400?text=Principal" alt="principal" className="w-45" data-aos="fade-right" data-aos-duration="1000" />
                        <p className="text-2xl italic bg-blue-950/100 p-10 text-white" data-aos="fade-left" data-aos-duration="1000">
                            "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
                        </p>
                    </div>
                </div>

                {/* I & F */}
                <div className="m-5">
                    <blockquote data-aos="flip-up" data-aos-duration="1000" className="border-l-4 border-blue-900/100 px-2 italic text-3xl font-bold mb-4">
                        Infrastructure and Facilities
                    </blockquote>
                    <div className="md:flex gap-5 py-10" data-aos="fade-up" data-aos-duration="1000" >
                        {facilities.map((f, index) => (
                            <div key={index} className="bg-blue-950 md:w-1/4 mb-3 h-full object-cover">
                                <img src={f.src} alt={f.alt} />
                                <p className="h-20 text-white text-center p-2">{f.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Slider */}
                    <div className="mx-auto max-sm:hidden md:w-full md:max-w-[1200px] py-10">
                        <Slider {...settings} className="overflow-hidden">
                            {slides.map((s, index) => (
                                <div key={index} className="mx-4 aspect-square inline-block">
                                    <img
                                        src={s.src}
                                        alt={s.alt}
                                        className="w-80 h-full object-cover"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
