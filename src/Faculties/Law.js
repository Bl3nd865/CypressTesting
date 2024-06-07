import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const Law = () => {
    return (
        <div className="faculty-detail">
            <h1>Faculty of Law</h1>
            <p>
                The Faculty of Law offers students a broad range of courses/disciplines related to Law and Criminology in all cycles of study and the aim of the Faculty is to have progress and excellence in professional legal education in accordance with highest international standards of quality.
            </p>
            <p>
                Study programs are designed in accordance with the Bologna process and European experience through the full implementation of the European Credit Transfer System, by enabling student mobility in the country and abroad, in which recognition of the diploma in the European countries that are part of Bologna process is ensured.
            </p>
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default Law;
