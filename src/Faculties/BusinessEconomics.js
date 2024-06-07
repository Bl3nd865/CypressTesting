import React from 'react';
import { Link } from 'react-router-dom';
import AcademicStaff from './AcademicStaff';
import './Faculties.css';

const staffMembers = [
    { name: 'John Doe', title: 'Professor', photo: require('../images.jpg').default },
    { name: 'Jane Smith', title: 'Associate Professor', photo: require('../images.jpg').default },
    // Add more staff members as needed
];

const BusinessEconomics = () => {
    return (
        <div className="faculty-detail">
            <h1>Faculty of Business and Economics</h1>
            <p>
                The Faculty of Business and Economics (FBE) offers accredited study programmes in three cycles of studies: undergraduate, master and doctoral. In addition to these academic programmes the FBE, in cooperation with the business community, offers specialized studies in order to expand system capacities in the service of regional and international market needs.
            </p>
            <p>
                Students at the Faculty of Business and Economics, where in addition to classroom teaching and learning, students are consistently supported through online services (MySEEU, Webmail, Google Classroom, Library). For each student, the support given by the Student Advisor is augmented by the Faculty-assigned Tutor (professor), who advises students on their academic progress and career opportunities.
            </p>
            <AcademicStaff staffMembers={staffMembers} facultyName="Business and Economics" />
            <Link to="/faculties" className="back-button">Back</Link>
        </div>
    );
};

export default BusinessEconomics;
