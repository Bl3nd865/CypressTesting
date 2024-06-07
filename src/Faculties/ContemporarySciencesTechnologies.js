import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const ContemporarySciencesTechnologies = () => {
    return (
        <div className="faculty-detail">
            <h1>Faculty of Contemporary Sciences and Technologies</h1>
            <p>
                The Faculty of Contemporary Sciences and Technologies represents the centre of excellence in the modern sense of information technology in teaching and research. This is accomplished by establishing links with other centres and institutions in Europe and USA, the Faculty offers first and second cycle study programmes, accredited and internationally recognized, joint second cycle regional programmes, and research in the third cycle.
            </p>
            <p>
                The Faculty of Contemporary Sciences and Technologies focuses on the application of the latest information technology for problem solving in the daily environment. Each study program is interdisciplinary and represents a combination of lectures and practical classes.
            </p>
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default ContemporarySciencesTechnologies;
