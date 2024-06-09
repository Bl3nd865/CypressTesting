import React from 'react';
import './Home.css';
import campusImage from './Assets/Images/faxLogo.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to South East European University</h1>
            <div className="image-wrapper">
                <img src={campusImage} alt="SEEU Campus" className="campus-image" />
            </div>
            <p>
                South East European University (SEEU) is a private-public nonprofit higher education institution established in 2001 upon the initiative of the international community and local experts. 
                The University is committed to promoting multilingualism, multiculturalism, and European standards in higher education.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to provide a high-quality education that prepares students for the global job market. We aim to foster innovation, critical thinking, and the application of knowledge.
            </p>
            <h2>Why Choose SEEU?</h2>
            <ul>
                <li>Multilingual education in Albanian, Macedonian, and English</li>
                <li>Strong emphasis on research and development</li>
                <li>International collaborations and partnerships</li>
                <li>State-of-the-art facilities and resources</li>
            </ul>
            <button onClick={() => alert('Learn more about our programs!')} className="learn-more-button">Learn More</button>
        </div>
    );
};

export default Home;
