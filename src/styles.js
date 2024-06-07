import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
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
    gap: 15px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
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

export const FooterContainer = styled.footer`
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

export const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
`;

export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

export const DetailView = styled.div`
    background: #f2f2f2;
    padding: 20px;
    border-radius: 8px;
`;
