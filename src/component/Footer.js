import React from 'react';
const Footer = () => {
    return (

        <div className=" px-4 flex flex-col place-content-evenly bg-blue-950/100 p-10 text-white">
            <div className="flex flex-col md:flex-row md:flex-wrap">
                {/* Address */}
                <div className="md:w-1/4 w-full mb-4">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="mb-2">Springdale Public School</p>
                    <p className="mb-2">123 Education Lane</p>
                    <p className="mb-2">Cityville, State, ZIP Code</p>
                    <p className="mb-2">Phone: +1 (123) 456-7890</p>
                    <p>Email: <a href="mailto:info@springdale.edu" className="text-blue-400 hover:underline">info@springdale.edu</a></p>
                </div>
                <div className="md:w-1/4 w-full mb-4">
                    <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.844660969761!2d-122.40187268464847!3d37.78511657975839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3f71f91f%3A0x21b6b7b9d1e71bfc!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1676498566402!5m2!1sen!2sus"
                        // width="50%"
                        height="auto"
                        title="Google Maps Location"
                        className='md:w-2/4 w-full'
                    />
                </div>

                {/* Quick Links */}
                <div className="md:w-1/4 mb-4">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className='md:flex-col flex flex-wrap gap-5 md:gap-0'>
                        <li><a href="/" className="text-blue-400 hover:underline">Home</a></li>
                        <li><a href="/about" className="text-blue-400 hover:underline">About Us</a></li>
                        <li><a href="/academics" className="text-blue-400 hover:underline">Academics</a></li>
                        <li><a href="/admissions" className="text-blue-400 hover:underline">Admissions</a></li>
                        <li><a href="/faculty" className="text-blue-400 hover:underline">Faculty</a></li>
                        <li><a href="/students" className="text-blue-400 hover:underline">Students</a></li>
                        <li><a href="/gallery" className="text-blue-400 hover:underline">Gallery</a></li>
                        <li><a href="/contact" className="text-blue-400 hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="md:w-1/4 mb-4">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className='md:flex-row flex flex-col'>
                <div className='md:w-2/4'>
                    <p className='py-2 italic text-center text-gray-100/60'>Privacy policies</p>
                    <p className='py-2 italic text-xs text-gray-100/60'>
                        At Springdale Public School, we value your privacy. This policy outlines how we collect, use, and protect your information.
                        <br />
                        <br />
                        Information We Collect
                        <br />
                        1. Personal Information: Name, email address, and contact details.
                        <br />
                        2. Non-Personal Information: IP address, browser type, and cookies.
                        <br />
                        <br />

                        We use your information to:
                        <br />
                        1. Provide and improve our services
                        <br />

                        2. Communicate with you
                        <br />

                        3. Comply with legal requirements
                        <br />

                        4. Data Security
                        <br />


                        We implement security measures to protect your information but cannot guarantee complete security.
                        <br />
                        <br />

                        Children's Privacy:
                        <br />

                        We do not knowingly collect information from children under 13 without parental consent.
                        <br />
                        <br />

                        Your Rights:
                        <br />

                        You can request access to, correction of, or deletion of your personal data. Contact us to exercise these rights.
                        <br />
                        <br />

                        Changes to This Policy:
                        <br />

                        We may update this policy and will notify you of significant changes.


                    </p>
                </div>
                <div className='md:w-2/4'>
                    <p className='py-2 italic text-center text-gray-100/60'>Terms & Conditions</p>

                    <p className='py-2 italic text-xs text-gray-100/60'>

                        1. Acceptance of Terms
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        2. Use of Website
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        3. Intellectual Property
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        4. User Contributions
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        5. Privacy
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        6. Limitation of Liability
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        7. Links to Third-Party Sites
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        8. Changes to Terms
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />

                        9. Governing Law
                        <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ultrices felis, quis porta ex elementum nec. In ac malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.                         <br />
                        <br />



                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6">
                <p className="text-sm">© {new Date().getFullYear()} Springdale Public School. All rights reserved. <i>Built by Astha</i></p>
            </div>

        </div>

    );
}

export default Footer;
