import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const DoctoralSchool = () => {
    return (
        <div className="faculty-detail">
            <h1>Doctoral School in SEEU</h1>
            <p>
                Doctoral studies are third-cycle studies of higher education, which are organized in accordance with the rules of studies in line with the European Credit Transfer and Accumulation System (ECTS).
            </p>
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default DoctoralSchool;
