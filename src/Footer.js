import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 South East European University. All rights reserved.</p>
        </FooterContainer>
    );
};

export default Footer;
