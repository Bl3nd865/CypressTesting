import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About South East European University</h1>
            <p>
                South East European University (SEEU) is dedicated to providing high-quality education and research opportunities. 
                Established in 2001, SEEU has grown to become one of the leading universities in the region, known for its commitment to multilingualism, multiculturalism, and international standards.
            </p>
            <h2>Our History</h2>
            <p>
                Since its establishment, SEEU has been at the forefront of higher education in the Balkans. 
                Our university was founded with the support of the international community, aiming to address the educational needs of the region and promote social and economic development.
            </p>
            <h2>Our Values</h2>
            <ul>
                <li>Academic Excellence</li>
                <li>Integrity and Ethics</li>
                <li>Innovation and Creativity</li>
                <li>Inclusivity and Diversity</li>
            </ul>
            <h2>Contact Us</h2>
            <p>
                For more information, please <a href="/contact">contact us</a> or visit our <a href="/faculties">faculties</a> page to learn more about our programs.
            </p>
        </div>
    );
};

export default About;
