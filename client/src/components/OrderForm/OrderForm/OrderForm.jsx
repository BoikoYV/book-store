import React from 'react';
import { TextField, Grid } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { formValues } from './formData';
import { validationSchema } from './validationSchema';
import InputLabel from '../InputLabel';
import FormTextarea from '../FormTextarea';
import FormButton from '../FormButton';
import FormNumberInput from '../FormNumberInput';
import { StyledTitle, StyledErrorMessage } from './Styles';

const OrderForm = () => {
  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    // console.log(values);
    setSubmitting(false);
    resetForm({});
  };
  return (
    <>
      <StyledTitle>Billing Address</StyledTitle>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          country: '',
          city: '',
          address: '',
          tel: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {formValues.map(({ id, name, type, placeholder, label }) => (
                <Grid key={id} item xs={12} ds={6}>
                  <InputLabel name={name} label={label} required />
                  {name === 'tel' ? (
                    <FormNumberInput
                      name={name}
                      placeholder={placeholder}
                      type={type}
                    />
                  ) : (
                    <Field
                      id={name}
                      name={name}
                      as={TextField}
                      placeholder={placeholder}
                      type={type}
                      variant='outlined'
                      fullWidth
                    />
                  )}

                  <StyledErrorMessage component='div' name={name} />
                </Grid>
              ))}
              <FormTextarea />
            </Grid>
            <FormButton text='Place Order' isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OrderForm;
