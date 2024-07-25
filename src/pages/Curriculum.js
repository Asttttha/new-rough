import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Objects
const subjectsP = [
    { code: "ENG1", name: "English" },
    { code: "MATHS1", name: "Mathematics" },
    { code: "SCI1", name: "Science" },
    { code: "SST1", name: "Social studies" },
    { code: "ART1", name: "Art" },
    { code: "PHYED1", name: "Physical Education" }
];

const subjectsS = [
    { code: "ENG2", name: "English" },
    { code: "MATHS2", name: "Mathematics" },
    { code: "SCI2", name: "Science-PCB" },
    { code: "SST2", name: "Social studies" },
    { code: "CSC1", name: "Computer Science" },
    { code: "ART2", name: "Art" },
    { code: "PHYED2", name: "Physical Education" }
];

const subjectsSSS = [
    { code: "PHYS1", name: "Physics" },
    { code: "CHEM1", name: "Chemistry" },
    { code: "BIO1", name: "Biology" },
    { code: "MATHS3", name: "Mathematics" },
    { code: "CSC2", name: "Computer Science" },
    { code: "ENG3", name: "English" },
];

const subjectsCom = [
    { code: "ACC1", name: "Accountancy" },
    { code: "BST1", name: "Business Studies" },
    { code: "ECO1", name: "Economics" },
    { code: "MATHS3", name: "Mathematics" },
    { code: "ENG3", name: "English" },
];

// Subject table
const SubjectTable = ({ subjects }) => {


    return (
        <table
            className="m-2 md:w-96 bg-white border border-gray-300"
        >
            <thead>
                <tr>
                    <th
                        className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600"
                        scope="col"
                    >
                        Code
                    </th>
                    <th
                        className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600"
                        scope="col"
                    >
                        Subject Name
                    </th>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject) => (
                    <tr key={subject.code} className="hover:bg-gray-50">
                        <td
                            className="py-2 px-4 border-b border-gray-300"
                            aria-label={`Subject Code ${subject.code}`}
                        >
                            {subject.code}
                        </td>
                        <td
                            className="py-2 px-4 border-b border-gray-300"
                            aria-label={`Subject Name ${subject.name}`}
                        >
                            {subject.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const Curriculum = ({refreshKey}) => {

    useEffect(() => {
        AOS.init();
    }, [refreshKey])

    return (
        <div className="p-2 md:p-10" aria-label="Curriculum" data-aos="fade-up"
        data-aos-duration="1000">
            <h1 className="text-3xl font-bold text-gray-700">Curriculum</h1>
            <p className="py-2 italic text-gray-700">
                The School has students enrolled from grade 1 to grade 12.
            </p>

            {/* Primary School */}
            <section aria-labelledby="primary-heading">
                <h2
                    id="primary-heading"
                    className="border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2"
                >
                    Primary school (I-V)
                </h2>
                <div className="flex flex-col md:flex-row place-content-evenly p-5">
                    <p className="text-sm md:text-lg md:py-10 md:w-2/4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially
                        unchanged.
                        <br />
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <SubjectTable subjects={subjectsP} />
                </div>
            </section>

            {/* Secondary School */}
            <section aria-labelledby="secondary-heading">
                <h2
                    id="secondary-heading"
                    className="border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2"
                >
                    Secondary school (VI-X)
                </h2>
                <div className="flex flex-col md:flex-row place-content-evenly p-5">
                    <p className="text-sm md:text-lg md:py-10 md:w-2/4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially
                        unchanged.
                        <br />
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <SubjectTable subjects={subjectsS} />
                </div>
            </section>

            {/* Senior Secondary School - Science */}
            <section aria-labelledby="senior-science-heading">
                <h2
                    id="senior-science-heading"
                    className="border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2"
                >
                    Senior secondary school - Science (XI-XII)
                </h2>
                <div className="flex flex-col md:flex-row place-content-evenly p-5">
                    <p className="text-sm md:text-lg md:py-10 md:w-2/4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially
                        unchanged.
                        <br />
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <SubjectTable
                        subjects={subjectsSSS}
                    />
                </div>
            </section>

            {/* Senior Secondary School - Commerce */}
            <section aria-labelledby="senior-commerce-heading">
                <h2
                    id="senior-commerce-heading"
                    className="border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2"
                >
                    Senior secondary school - Commerce (XI-XII)
                </h2>
                <div className="flex flex-col md:flex-row place-content-evenly p-5">
                    <p className="text-sm md:text-lg md:py-10 md:w-2/4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially
                        unchanged.
                        <br />
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <SubjectTable
                        subjects={subjectsCom}
                    />
                </div>
            </section>
        </div>
    );
};

export default Curriculum;
