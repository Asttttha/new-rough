import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const faculty = [
    { id: 1, name: "John Doe", designation: "Principal", qualification: "M.Ed", experience: "20 years of experience in educational administration" },
    { id: 2, name: "Jane Smith", designation: "Vice Principal", qualification: " M.Sc. in Physics", experience: "15 years of teaching experience" },
    { id: 3, name: "Emily Johnson", designation: "English Teacher", qualification: " M.A. in English", experience: "10 years of teaching experience" },
    { id: 4, name: "Michael Brown", designation: "Mathematics Teacher", qualification: "  M.Sc. in Mathematics", experience: "8 years of teaching experience" },
    { id: 5, name: "Sophia Davis", designation: "Science Teacher", qualification: "M.Sc. in Chemistry", experience: "12 years of teaching experience" },
    { id: 6, name: "David Wilson", designation: "Computer Science Teacher", qualification: "B.Tech in Computer Science", experience: "5 years of teaching experience" }
]
const Faculty = ({ refreshKey }) => {

    useEffect(() => {
        AOS.init();
    }, [refreshKey])

    return (
        <div className='flex items-center flex-col p-2 md:p-10 gap-10'>
            <p className='text-3xl font-bold text-gray-700 text-center'>Faculty members</p>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center bg-white p-5 md:p-10'>
                {faculty.map((f) => (
                    <div key={f.id} className='md:w-1/5 m-2 bg-blue-950/100 text-white rounded' data-aos="fade-up" data-aos-duration="1000">
                        <img src='https://via.placeholder.com/400' alt='faculty1' />
                        <div className='h-auto text-white text-center p-2'>
                            <p className='text-center'>{f.name}, {f.designation}</p>
                            <p className='text-center'>{f.qualification} | {f.experience}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Faculty