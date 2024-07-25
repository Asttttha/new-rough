import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Objects
const gallery = [
    {
        id: 1,
        type: 'photo',
        event: 'Annual Sports Day',
        url: 'https://via.placeholder.com/800x400?text=Annual+Sports+Day',
        description: 'Athletes competing at the annual sports day.',
    },
    {
        id: 2,
        type: 'photo',
        event: 'Science Exhibition',
        url: 'https://via.placeholder.com/800x400?text=Science+Exhibition',
        description: 'Innovative science projects on display.',
    },
    {
        id: 3,
        type: 'video',
        event: 'Classroom',
        url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        description: 'Students engaged in learning.',
    },
    {
        id: 4,
        type: 'photo',
        event: 'Library',
        url: 'https://via.placeholder.com/800x400?text=Library',
        description: 'A quiet place for study and research.',
    },
    {
        id: 5,
        type: 'video',
        event: 'School Tour',
        url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        description: 'Exploring the campus grounds.',
    },
    {
        id: 6,
        type: 'photo',
        event: 'Annual Function',
        url: 'https://via.placeholder.com/800x400?text=Annual+Function',
        description: 'Cultural performances by students.',
    },
    {
        id: 7,
        type: 'video',
        event: 'Curtural Fest',
        url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        description: 'Highlights of the event.',
    },
];



const Gallery = ({ refreshKey }) => {

    useEffect(() => {
        AOS.init();
    }, [refreshKey])

    // States
    const [selectedEvent, setSelectedEvent] = useState('all');
    const [selectedType, setSelectedType] = useState('all');

    // Handle events
    const handleEventChange = (e) => {
        setSelectedEvent(e.target.value);
    };
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    // Filtering
    const filteredGallery = gallery.filter((item) => {
        // if all
        const matchesEvent =
            selectedEvent === 'all' || item.event.toLowerCase() === selectedEvent;
        const matchesType = selectedType === 'all' || item.type === selectedType;
        return matchesEvent && matchesType;
    });

    return (
        <div className='flex items-center flex-col p-10 gap-5'>
            <p className='text-3xl font-bold text-gray-700 text-center'>
                School Gallery
            </p>

            <div>

                {/* Select buttons */}

                <select
                    name='event'
                    className='p-1 md:p-4 rounded bg-blue-950/100 text-white'
                    value={selectedEvent}
                    onChange={handleEventChange}
                >
                    <option value='all'>All Events</option>
                    <option value='annual sports day'>Annual Sports Day</option>
                    <option value='science exhibition'>Science Exhibition</option>
                    <option value='classroom'>Classroom</option>
                    <option value='library'>Library</option>
                    <option value='school tour'>School Tour</option>
                    <option value='annual function'>Annual Function</option>
                </select>

                <select
                    name='type'
                    className='m-1 md:m-2 p-1 md:p-4 rounded bg-blue-950/100 text-white'
                    value={selectedType}
                    onChange={handleTypeChange}
                >
                    <option value='all'>All Types</option>
                    <option value='photo'>Photos</option>
                    <option value='video'>Videos</option>
                </select>
            </div>

            <div className='w-full flex flex-col md:flex-row md:flex-wrap gap-5 p-5 justify-center bg-white'>
                {filteredGallery.length > 0 ?
                    (
                        filteredGallery.map((item) => (
                            <div
                                key={item.id}
                                className='rounded md:w-3/12 bg-blue-950/100 text-white h-auto shadow-md hover:shadow-lg transition-shadow duration-300'
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                {item.type === 'photo' ? (
                                    <img src={item.url} alt={item.event} className='rounded' />
                                ) : (
                                    <iframe
                                        src={item.url}
                                        title={item.event}
                                        className='w-full h-48 rounded'
                                        allowFullScreen
                                    ></iframe>
                                )}
                                <p className='pl-2 pt-2 text-xl'>{item.event}</p>
                                <p className='p-2 italic'>{item.description}</p>
                            </div>
                        ))

                    ) : (
                        <p className='text-gray-700 italic text-xl'>
                            No data found :(
                        </p>

                    )}

            </div>
        </div>
    );
};

export default Gallery;
