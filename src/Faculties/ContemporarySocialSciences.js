import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const ContemporarySocialSciences = () => {
    return (
        <div className="faculty-detail">
            <h1>Faculty of Contemporary Social Sciences</h1>
            <p>
                The Faculty of Contemporary Social Sciences was established in 2001 as a unique and first department in this academic discipline in the Republic of Macedonia and in the region. The mission of the Faculty is to prepare future leaders mainly for government institutions as well as for non-governmental organizations.
            </p>
            <p>
                Our programmes link theory with practice as one of the most important conditions of acquiring skills, knowledge, and abilities necessary for a successful carrier in public administration.
            </p>
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default ContemporarySocialSciences;
