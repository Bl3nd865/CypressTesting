import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Table, Th, Td, Button, DetailView } from './styles';

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
        {
            Campus: "TE",
            CourseCode: "CCS-806",
            CourseTitle: "Advanced Software Engineering",
            Type: "L",
            Language: "EN",
            Group: "2",
            Day: "Tuesday",
            Start: "10:00",
            End: "12:00",
            Teacher: "Blend Rexhepi",
            Supervisor: "",
            Location: "816.08",
            Credit: "6.00"
        },
        {
            Campus: "TE",
            CourseCode: "CCS-807",
            CourseTitle: "Database Systems",
            Type: "L",
            Language: "EN",
            Group: "1",
            Day: "Wednesday",
            Start: "11:00",
            End: "13:00",
            Teacher: "B",
            Supervisor: "",
            Location: "816.06",
            Credit: "6.00"
        }
    ];

    const [selectedCourse, setSelectedCourse] = useState(null);

    if (!user.isAuthenticated) {
        return <p>Please log in to view your schedule.</p>;
    }

    const handleViewDetails = (course) => {
        setSelectedCourse(course);
    };

    return (
        <Container>
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
                        <Th>Actions</Th>
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
                            <Td>
                                <Button onClick={() => handleViewDetails(course)}>View Details</Button>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedCourse && (
                <DetailView>
                    <h2>Course Details</h2>
                    <p><strong>Course Title:</strong> {selectedCourse.CourseTitle}</p>
                    <p><strong>Teacher:</strong> {selectedCourse.Teacher}</p>
                    <p><strong>Day:</strong> {selectedCourse.Day}</p>
                    <p><strong>Start Time:</strong> {selectedCourse.Start}</p>
                    <p><strong>End Time:</strong> {selectedCourse.End}</p>
                    <p><strong>Location:</strong> {selectedCourse.Location}</p>
                    <p><strong>Credits:</strong> {selectedCourse.Credit}</p>
                </DetailView>
            )}
        </Container>
    );
};

export default MySchedule;
