import React from 'react';
import { FaBook, FaLaptopCode, FaGlobe} from 'react-icons/fa';

const resources = [
  {
    id: 1,
    icon: <FaBook aria-label='icon' className="text-4xl text-blue-600" />,
    title: 'e-Books',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam, sed vestibulum neque varius porttitor. Donec turpis ipsum',
    link: 'https://example.com/books',
  },
  {
    id: 2,
    icon: <FaLaptopCode aria-label='icon' className="text-4xl text-green-600" />,
    title: 'Online Courses',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam, sed vestibulum neque varius porttitor. Donec turpis ipsum',
    link: 'https://example.com/online-courses',
  },
  {
    id: 3,
    icon: <FaGlobe aria-label='icon' className="text-4xl text-red-600" />,
    title: 'Educational Websites',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor pretium diam, sed vestibulum neque varius porttitor. Donec turpis ipsum',
    link: 'https://example.com/educational-websites',
  }
];

const EducationalResources = () => {
  return (
    <div className="p-10" aria-labelledby="educational-resources-title">
      <h2 className="text-3xl font-bold text-gray-700">Educational Resources</h2>
      <p className='py-2 italic text-gray-700'>
      Digital classrooms, interactive learning modules, and access to online educational platforms.
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-10 w-full justify-center md:p-5">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 md:w-1/4"
          >
            <div className="flex justify-center mb-4">{resource.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2">{resource.title}</h3>
            <p className="text-gray-600 text-center mb-4">{resource.description}</p>
            <a
              href={resource.link}
              className="block text-center text-blue-500 hover:text-blue-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;
