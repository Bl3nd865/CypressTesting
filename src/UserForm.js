import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
import { Form, Input, Button, Error } from './styles';

const UserForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [apiError, setApiError] = useState('');

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        file: Yup.mixed().required('File is required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('password', values.password);
            formData.append('file', values.file);

            await axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSubmitting(false);
            setShowModal(true);
            toast.success('Form submitted successfully!');
            resetForm();
        } catch (error) {
            setApiError('Failed to submit form. Please try again later.');
            toast.error('Failed to submit form. Please try again later.');
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h1>User Form</h1>
            <Formik
                initialValues={{ name: '', email: '', password: '', confirmPassword: '', file: null }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, isSubmitting }) => (
                    <Form as={FormikForm}>
                        <div>
                            <label>Name:</label>
                            <Field name="name" as={Input} />
                            <ErrorMessage name="name" component={Error} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <Field name="email" as={Input} type="email" />
                            <ErrorMessage name="email" component={Error} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <Field name="password" as={Input} type="password" />
                            <ErrorMessage name="password" component={Error} />
                        </div>
                        <div>
                            <label>Confirm Password:</label>
                            <Field name="confirmPassword" as={Input} type="password" />
                            <ErrorMessage name="confirmPassword" component={Error} />
                        </div>
                        <div>
                            <label>Upload File:</label>
                            <Input name="file" type="file" onChange={(event) => setFieldValue('file', event.currentTarget.files[0])} />
                            <ErrorMessage name="file" component={Error} />
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            {apiError && <Error>{apiError}</Error>}
            {showModal && <Modal message="Form submitted successfully!" onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default UserForm;
