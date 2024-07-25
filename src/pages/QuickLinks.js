import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const QuickLinks = ({ refreshKey }) => {

    useEffect(() => {
        AOS.init();
    }, [refreshKey])

    return (
        <section className="m-5 md:flex" aria-labelledby="quick-links">
            {/* Image and Text Section */}
            <article
                className="md:w-2/4 md:h-auto w-full flex md:flex-row flex-col md:m-5 p-2 md:p-6 md:relative"
                role="region"
                aria-labelledby="about-school"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <img
                    src="https://via.placeholder.com/400"
                    alt="School building"
                    className="rounded w-full md:h-80 h-80 md:w-2/4 md:absolute md:left-4 left-0 top-0"
                />
                <div className="rounded md:bottom-20 md:absolute md:right-0 bg-blue-950/100 md:bottom-0 md:w-2/4 p-2">
                    <p
                        className="text-white text-sm md:text-base"
                        id="about-school"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc et ipsum at turpis ultricies pellentesque. Ut ut
                        aliquet ligula, id consequat ipsum. Integer id auctor
                        lacus. Duis convallis id nisi ut pretium. Etiam semper
                        et enim quis faucibus. Sed sed sollicitudin tellus, sit
                        amet iaculis ligula. Aenean eget arcu sed velit
                        vulputate sollicitudin. Morbi sed erat iaculis, congue
                        leo id, faucibus enim. Nullam sollicitudin eu arcu ac
                        posuere. Nam eget est et nulla varius malesuada in quis
                        nibh.
                    </p>
                </div>
            </article>

            {/* Quick Links Section */}
            <nav
                className="md:px-10 flex md:m-5 flex-col md:w-2/4 items-center bg-white rounded"
                role="navigation"
                aria-label="quick-links-navigation"
                data-aos="fade-left"
                data-aos-duration="1000"
            >
                <h1
                    className="text-3xl p-2 text-gray-700 font-bold"
                    id="quick-links-title"
                >
                    Quick Links
                </h1>
                <div className="flex flex-wrap m-2 items-center place-content-evenly">
                    <a
                        href="/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Contact Us"
                    >
                        Contact
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Announcements"
                    >
                        Announcements
                    </a>
                    <a
                        href="/academics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Academics"
                    >
                        Academics
                    </a>
                    <a
                        href="/gallery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Gallery"
                    >
                        Gallery
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Terms and Conditions"
                    >
                        Terms & Condition
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Privacy Policies"
                    >
                        Privacy Policies
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Announcements 1"
                    >
                        Announcements1
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Announcements 2"
                    >
                        Announcements2
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Announcements 3"
                    >
                        Announcements3
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Announcements 4"
                    >
                        Announcements4
                    </a>
                    <a
                        href="https://example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 m-2 bg-blue-950/100 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        aria-label="Announcements 5"
                    >
                        Announcements5
                    </a>
                </div>
            </nav>
        </section>
    );
};

export default QuickLinks;
