import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const LanguagesCulturesCommunication = () => {
    return (
        <div className="faculty-detail">
            <h1>Faculty of Languages, Cultures and Communication</h1>
            <p>
                The Faculty of Languages, Cultures and Communication offers students a broad range of courses related to languages, literatures, cultures, and communication. It provides specialist instruction in the Albanian, English, and German languages, and offers degree programs for these subjects at both the undergraduate and graduate levels.
            </p>
            <p>
                Pedagogical theory and teacher training are also important elements for LCC courses, as many of our graduates choose to pursue careers in the field of education.
            </p>
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default LanguagesCulturesCommunication;
