import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { Form, Input, Button, Error } from './styles';

const UserForm = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        file: Yup.mixed().required('File is required'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Mock API call
        setTimeout(() => {
            setSubmitting(false);
            alert('Form submitted successfully!');
            resetForm();
        }, 1000);
    };

    if (!isAuthenticated) {
        return (
            <div>
                <h1>Login</h1>
                <p>Please log in to access the user form.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>User Form</h1>
            <Formik
                initialValues={{ name: user.name, email: user.email, password: '', confirmPassword: '', file: null }}
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
        </div>
    );
};

export default UserForm;
