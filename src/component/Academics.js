
import React, { useState } from 'react'
import Curriculum from '../pages/Curriculum'
import TeachMethodologies from '../pages/TeachMethodologies'
import EducationalResources from '../pages/EducationalResources'

const Academics = () => {

    const [currentPage, setCurrentPage] = useState("Curriculum")

    const handlerPage = (change) => {
        setCurrentPage(change)
    }
    return (
        <div className='flex items-center flex-col p-5 gap-5 md:p-10  md:gap-10'>
            <p className='text-4xl font-bold text-gray-700'>Academics</p>
            <div className='flex flex-col gap-2 md:flex-row md:gap-10'>
                <button className={`px-8 py-2 font-semibold rounded hover:bg-blue-900/100 hover:text-white transition duration-300 ${currentPage === "Curriculum"?("bg-blue-900/100 text-white"):("bg-white text-black")}`} onClick={() => handlerPage("Curriculum")}>Curriculum</button>
                <button className={`px-8 py-2 font-semibold rounded hover:bg-blue-900/100 hover:text-white transition duration-300 ${currentPage === "TeachMethodologies"?("bg-blue-900/100 text-white"):("bg-white text-black")}`} onClick={() => handlerPage("TeachMethodologies")}>Teaching Methodologies</button>
                <button className={`px-8 py-2 font-semibold rounded hover:bg-blue-900/100 hover:text-white transition duration-300 ${currentPage === "EduRes"?("bg-blue-900/100 text-white"):("bg-white text-black")}`} onClick={() => handlerPage("EduRes")}>Educational Resources</button>
            </div>
            <div className="bg-white h-full w-full" >
                {currentPage === "Curriculum" && <Curriculum/>}
                {currentPage === "TeachMethodologies" && <TeachMethodologies />}
                {currentPage === "EduRes" && <EducationalResources />}
            </div>
        </div>
    )
}

export default Academics
