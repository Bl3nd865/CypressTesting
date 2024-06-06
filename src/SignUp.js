import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './userSlice';
import { Form, Input, Button, Error } from './styles';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [apiError, setApiError] = useState('');

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        // Mock API call
        setTimeout(() => {
            if (values.email === 'user@example.com') {
                setApiError('Email already in use');
                setSubmitting(false);
            } else {
                dispatch(setUser({ name: values.name, email: values.email }));
                navigate('/');
                setSubmitting(false);
            }
        }, 1000);
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
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
                        <Button type="submit" disabled={isSubmitting}>
                            Sign Up
                        </Button>
                    </Form>
                )}
            </Formik>
            {apiError && <Error>{apiError}</Error>}
        </div>
    );
};

export default SignUp;
