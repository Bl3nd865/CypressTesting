import React from 'react';
import { Container, Form, Input, TextArea, Button } from './styles';

const Contact = () => {
    return (
        <Container>
            <h1>Contact Us</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h2>Tetovo</h2>
                    <p>Ilindenska n.335</p>
                    <p>1200 Tetovo</p>
                    <p>Tel: +389 44 356 000</p>
                    <p>Fax: +389 44 356 001</p>
                    <h2>Skopje</h2>
                    <p>Arhiepiskop Angelarij, nr.1</p>
                    <p>1000 Skopje</p>
                    <p>Tel: +389 44 356 396</p>
                    <p>Fax: +389 44 356 397</p>
                    <h2>Rector's Office</h2>
                    <p>Email: rectorate@seeu.edu.mk</p>
                    <p>Tel: +389 44 356 110</p>
                    <h2>Admissions Office</h2>
                    <p>Email: admissions@seeu.edu.mk</p>
                    <p>Tel: +389 44 356 188</p>
                    <h2>Marketing and Promotion Office</h2>
                    <p>Email: proffice@seeu.edu.mk</p>
                    <p>Tel: +389 44 356 071</p>
                </div>
                <div style={{ flex: 1 }}>
                    <Form>
                        <Input type="text" name="name" placeholder="Name" required />
                        <Input type="email" name="email" placeholder="E-mail" required />
                        <Input type="text" name="subject" placeholder="Subject" required />
                        <TextArea name="body" rows="5" placeholder="Body" required />
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
