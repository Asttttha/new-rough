import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = ({ refreshKey }) => {


    useEffect(() => {
        AOS.init();
    }, [refreshKey])


    // States
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [tandc, setTandc] = useState(false);

    const verifyEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Handle states
    const handleChange = (e) => {
        setEmail(e.target.value);
        setValidEmail(verifyEmail(e.target.value));
    };

    const handleTandCChange = (e) => {
        setTandc(e.target.checked);
    };

    return (
        <div className='flex flex-col-reverse md:flex-row p-4 md:p-10'>

            {/* Contact form */}
            <form className='md:w-2/4 bg-white' aria-labelledby="contact-form-title" data-aos="fade-right">
                <fieldset className='w-full p-5 flex flex-col justify-start gap-2'>
                    <legend id="contact-form-title" className='text-3xl font-bold text-gray-700 pt-5 pb-1 mb-5 border-b-2 border-blue-900'>Tell Us</legend>
                    <label htmlFor="fname" className='italic text-l border-l-2 p-2 border-blue-900'>First Name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className='border-2 border-black-900 rounded p-2 md:w-full w-72'
                        required
                        aria-required="true"
                    />
                    <label htmlFor="lname" className='italic text-l border-l-2 p-2 border-blue-900'>Last Name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className='border-2 border-black-900 rounded p-2 md:w-full w-72'
                        required
                        aria-required="true"
                    />
                    <label htmlFor="email" className='italic text-l border-l-2 p-2 border-blue-900'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-2 border-black-900 rounded p-2 md:w-full w-72"
                        value={email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                    />
                    {!validEmail && <p id="email-error" className='text-red-600 italic text-sm'>
                        Enter a valid email address!
                    </p>}
                    <label htmlFor="message" className='italic text-l border-l-2 p-2 border-blue-900'>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        cols="50"
                        className='border-2 border-black-900 rounded p-2 md:w-full w-72'
                        required
                        aria-required="true"
                    />
                    <div className="italic text-l border-l-2 flex gap-2 p-2 border-blue-900">
                        <input
                            type='checkbox'
                            id='terms'
                            className='w-4'
                            checked={tandc}
                            onChange={handleTandCChange}
                            required
                            aria-required="true"
                        />
                        <label htmlFor="terms" className='ml-2'>
                            I agree to the{' '}
                            <a href="https://example.com/" className="text-blue-900 underline">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>
                    <button
                        type='submit'
                        className={`bg-blue-950/100 text-white rounded p-2 my-2 w-1/4 ${!validEmail || !tandc ? 'bg-blue-950/40' : ''}`}
                        disabled={!validEmail || !tandc}
                    >
                        Send
                    </button>
                </fieldset>
            </form>

            {/* Contact info */}

            <div className='md:w-2/4 bg-blue-950/100 text-white p-10' data-aos="fade-left">
                <p className='py-2 italic text-center text-2xl text-gray-100'>Hi there, we are grateful to have you here :)</p>
                <div className="md:w-2/4 mb-4">
                    <h3 className="text-xl font-semibold mb-4">Address</h3>
                    <p className="mb-2">Springdale Public School</p>
                    <p className="mb-2">123 Education Lane, Cityville, State, ZIP Code, <br />Phone: +1 (123) 456-7890</p>
                    <p>Email: <a href="mailto:info@springdale.edu" className="text-blue-400 hover:underline">info@springdale.edu</a></p>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.844660969761!2d-122.40187268464847!3d37.78511657975839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3f71f91f%3A0x21b6b7b9d1e71bfc!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1676498566402!5m2!1sen!2sus"
                    width="100%"
                    height="60%"
                    title="Google Maps Location"
                    aria-label="Google Maps Location of Springdale Public School"
                />
            </div>
        </div>
    );
};

export default Contact;
