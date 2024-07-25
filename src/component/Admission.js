import React from 'react'
import form from '../assets/Example.pdf'

const Admission = () => {

    const handleDownload = () => {

        fetch(form).then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);

                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Form.pdf";
                alink.click();
            });
        });
    };
    return (
        <div className='p-10'>
            <p className='text-4xl font-bold text-gray-700 text-center mb-10'>Admission details</p>
            <div className='bg-white p-10 flex flex-col md:flex-row w-full justify-center'>
                <div className='md:w-2/4'>
                    <div>
                        <p className='text-3xl font-bold text-gray-700'>Process</p>
                        <p className='py-2 italic text-gray-700'>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>

                        <p className='text-sm md:text-lg p-2 md:p-10 border-l-2 border-blue-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard

                            <br />

                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            <br />

                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            <br />
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more

                            <br />

                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>

                    </div>

                    <div>
                        <p className='text-3xl font-bold text-gray-700'>Criteria</p>
                        <p className='py-2 italic text-gray-700'>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
                        <p className='text-sm md:text-lg p-2 md:p-10 border-l-2 border-blue-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard

                            <br />

                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            <br />

                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            <br />
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more

                            <br />

                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>

                    </div>

                </div>
                <div className='md:w-2/4'>
                    <p className='text-center text-3xl font-bold text-gray-700 m-2'>Imortant dates</p>
                    <div className='flex flex-col items-center md:p-5'>
                        <p className='p-5 border text-center text-l w-full'>Admission Form Availability: <span className='italic border-b-2 border-blue-900'>March 1st</span></p>
                        <p className='p-5 border text-center text-l w-full'>Last Date for Submission:<span className='italic border-b-2 border-blue-900'> March 31st</span> </p>
                        <p className='p-5 border text-center text-l w-full'>Entrance Test: <span className='italic border-b-2 border-blue-900'>April 15th</span></p>
                        <p className='p-5 border text-center text-l w-full'>Announcement of Results: <span className='italic border-b-2 border-blue-900'>April 30th</span></p>
                    </div>
                </div>

            </div>
            <div className='flex p-5 justify-center'>
                <button onClick={handleDownload} className='px-8 py-2 bg-blue-900/100 text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300'>Download admission form</button>
            </div>
        </div>
    )
}

export default Admission