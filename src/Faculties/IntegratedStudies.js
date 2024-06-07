import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const IntegratedStudies = () => {
    return (
        <div className="faculty-detail">
            <h1>Integrated Studies</h1>
            <p>
                Today the employment market in the Republic of Macedonia shows a growing demand for highly-skilled staff, particularly those trained in close connection with practice.
            </p>
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default IntegratedStudies;
