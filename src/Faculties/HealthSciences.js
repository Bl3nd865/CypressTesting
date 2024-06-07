import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const HealthSciences = () => {
    return (
        <div className="faculty-detail">
            <h1>Faculty of Health Sciences</h1>
            <p>
                The Faculty of Health Sciences prepares students for work in improving and modernizing health care and general health services in the region. The purpose of this Faculty is to have an impact on health services in our region and to provide a leading national and international resource for medical education.
            </p>
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default HealthSciences;
