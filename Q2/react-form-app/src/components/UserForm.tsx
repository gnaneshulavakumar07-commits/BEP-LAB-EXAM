import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

// Styled components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const StyledError = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

// Validation Schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

// Initial form values
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

interface UserFormProps {
  onSubmit: (values: typeof initialValues) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const handleSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
    // Handle form submission
    onSubmit(values);
    resetForm();
  };

  return (
    <FormContainer>
      <h2>User Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <StyledField type="text" name="firstName" />
              <ErrorMessage name="firstName" component={StyledError} />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <StyledField type="text" name="lastName" />
              <ErrorMessage name="lastName" component={StyledError} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <StyledField type="email" name="email" />
              <ErrorMessage name="email" component={StyledError} />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <StyledField type="text" name="phone" />
              <ErrorMessage name="phone" component={StyledError} />
            </div>

            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default UserForm;