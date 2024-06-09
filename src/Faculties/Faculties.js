import React from 'react';
import { Link } from 'react-router-dom';
import './Faculties.css';

const Faculties = () => {
    return (
        <div className="faculties-container">
            <h1>Faculties</h1>
            <div className="faculties-list">
                <Link to="/faculties/business-economics" className="faculty-item">
                    <h2>Faculty of Business and Economics</h2>
                    <p>The Faculty of Business and Economics (FBE) offers accredited study programmes in three cycles of studies: undergraduate, master and doctoral.</p>
                </Link>
                <Link to="/faculties/law" className="faculty-item">
                    <h2>Faculty of Law</h2>
                    <p>Offers students a broad range of courses/disciplines related to Law and Criminology in all cycles of study.</p>
                </Link>
                <Link to="/faculties/languages-cultures-communication" className="faculty-item">
                    <h2>Faculty of Languages, Cultures and Communication</h2>
                    <p>Offers students a broad range of courses related to languages, literatures, cultures, and communication.</p>
                </Link>
                <Link to="/faculties/contemporary-social-sciences" className="faculty-item">
                    <h2>Faculty of Contemporary Social Sciences</h2>
                    <p>The mission of the Faculty is to prepare future leaders mainly for government institutions as well as for non-governmental organizations.</p>
                </Link>
                <Link to="/faculties/contemporary-sciences-technologies" className="faculty-item">
                    <h2>Faculty of Contemporary Sciences and Technologies</h2>
                    <p>Represents the centre of excellence in the modern sense of information technology in teaching and research.</p>
                </Link>
                <Link to="/faculties/health-sciences" className="faculty-item">
                    <h2>Faculty of Health Sciences</h2>
                    <p>Provides comprehensive education in health sciences.</p>
                </Link>
                <Link to="/faculties/integrated-studies" className="faculty-item">
                    <h2>Integrated Studies</h2>
                    <p>Today the employment market in the Republic of Macedonia shows a growing demand for highly-skilled staff, particularly those trained in close connection with practice.</p>
                </Link>
                <Link to="/faculties/doctoral-school" className="faculty-item">
                    <h2>Doctoral School in SEEU</h2>
                    <p>Doctoral studies are third-cycle studies of higher education, which are organized in accordance with the rules of studies in line with the European Credit Transfer and Accumulation System (ECTS).</p>
                </Link>
            </div>
        </div>
    );
};

export default Faculties;
