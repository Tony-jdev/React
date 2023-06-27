import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; 
import styles from './Forma.module.css';

const initilaValues = {
    name: '',
    amount: 1,
    price: 0
};

const PRODUCT_SCHEMA = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    amount: Yup.number().min(1).required(),
    price: Yup.number().min(0).required()
});

const Forma = () => {
console.log(styles);
    const submitHandler = (values, formikBag) => {
        console.log(values);
        console.log(formikBag);
        formikBag.resetForm();
    }

    return (
        <div>
            <h1>Form</h1>
            <Formik initialValues={initilaValues} onSubmit={submitHandler} validationSchema={PRODUCT_SCHEMA}>
                {({errors}) =>
                 <Form>
                    <div>
                        <Field name="name" placeholder="Enter the name"/>
                        <ErrorMessage name="name" component="div" className={styles.error} />
                    </div>
                    <div>
                        <Field name="amount" placeholder="Enter the amount"/>
                        <ErrorMessage name="amount" component="div" className={styles.error} />
                    </div>
                    <div>
                        <Field name="price" placeholder="Enter the price"/>
                        <ErrorMessage name="price" component="div" className={styles.error}/>
                    </div>

                    <Field type="submit" value="Add" />
                </Form>}
            </Formik>
        </div>
    );
}

export default Forma;
