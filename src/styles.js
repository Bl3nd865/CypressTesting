import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 60px; // Space for footer
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #333;
    padding: 10px 20px;
`;

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    padding: 0 15px;
    &:hover {
        text-decoration: underline;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`;

export const Error = styled.p`
    color: red;
    font-size: 14px;
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
`;

export const CloseButton = styled.span`
    cursor: pointer;
    float: right;
    font-size: 20px;
`;
