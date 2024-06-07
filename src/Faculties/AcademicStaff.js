import React from 'react';

const AcademicStaff = ({ staffMembers, facultyName }) => {
    return (
        <div className="academic-staff-container">
            <h2>Academic Staff - {facultyName}</h2>
            <div className="staff-list">
                {staffMembers.map((member, index) => (
                    <div key={index} className="staff-member">
                        <img src={member.photo} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AcademicStaff;
