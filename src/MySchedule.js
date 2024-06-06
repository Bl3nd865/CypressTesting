import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const MySchedule = () => {
    const user = useSelector((state) => state.user);
    const schedule = [
        {
            Campus: "TE",
            CourseCode: "CCS-805",
            CourseTitle: "Software Testing and Analysis",
            Type: "L",
            Language: "AL",
            Group: "1",
            Day: "Monday",
            Start: "13:00",
            End: "14:00",
            Teacher: "Besnik Selimi",
            Supervisor: "",
            Location: "816.07",
            Credit: "6.00"
        },
        // Add more courses as needed
    ];

    if (!user.isAuthenticated) {
        return <p>Please log in to view your schedule.</p>;
    }

    return (
        <div>
            <h1>My Schedule</h1>
            <Table>
                <thead>
                    <tr>
                        <Th>Campus</Th>
                        <Th>Course Code</Th>
                        <Th>Course Title</Th>
                        <Th>Type</Th>
                        <Th>Language</Th>
                        <Th>Group</Th>
                        <Th>Day</Th>
                        <Th>Start</Th>
                        <Th>End</Th>
                        <Th>Teacher</Th>
                        <Th>Supervisor</Th>
                        <Th>Location</Th>
                        <Th>Credit</Th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((course, index) => (
                        <tr key={index}>
                            <Td>{course.Campus}</Td>
                            <Td>{course.CourseCode}</Td>
                            <Td>{course.CourseTitle}</Td>
                            <Td>{course.Type}</Td>
                            <Td>{course.Language}</Td>
                            <Td>{course.Group}</Td>
                            <Td>{course.Day}</Td>
                            <Td>{course.Start}</Td>
                            <Td>{course.End}</Td>
                            <Td>{course.Teacher}</Td>
                            <Td>{course.Supervisor}</Td>
                            <Td>{course.Location}</Td>
                            <Td>{course.Credit}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MySchedule;
