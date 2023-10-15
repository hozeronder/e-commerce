import React, {useState} from 'react';
import {useFormik} from 'formik';
import 'yup-phone';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import {basicSchema} from "../schemas";


const Formdata = () => {
        const [phoneValue, setPhoneValue] = useState('');

        const onSubmit = async (values, actions) => {
            console.log(values);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            actions.resetForm();
            setPhoneValue('');
        };

        const {
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            isSubmitting,
            handleSubmit,
            setFieldValue,
        } = useFormik({
            initialValues: {
                name: '',
                surname: '',
                email: '',
                address: '',
                phone: '',
                number: '',
                expiry: '',
                cvc: '',
                cardholder: '',
                focus: '',
            },
            validationSchema: basicSchema,
            onSubmit: onSubmit,
        });

        const handlePhoneChange = (value) => {
            setPhoneValue(value);
            setFieldValue('phone', value);
        };

        const handleInputFocus = (evt) => {
            setFieldValue('focus', evt.target.name);
        };

        return (
            <div>
                <form onSubmit={handleSubmit} autoComplete="off" className="grid m-auto w-8/12 formdata">
                    <label htmlFor="name">Name</label>
                    <input
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        type="text" // Type should be 'text'
                        className={touched.name && errors.name ? 'input-error' : ''}
                    />
                    {errors.name && touched.name && <p className="error">{errors.name}</p>}
                    <label htmlFor="surname">Surname</label>
                    <input
                        value={values.surname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="surname"
                        type="text" // Type should be 'text'
                        className={touched.surname && errors.surname ? 'input-error' : ''}
                    />
                    {errors.surname && touched.surname && <p className="error">{errors.surname}</p>}
                    <label htmlFor="email">Email</label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"
                        type="email" // Type should be 'email'
                        className={touched.email && errors.email ? 'input-error' : ''}
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <label htmlFor="address">Address</label>
                    <input
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="address"
                        type="text" // Type should be 'text'
                        className={touched.address && errors.address ? 'input-error' : ''}
                    />
                    {errors.address && touched.address && <p className="error">{errors.address}</p>}
                    <label htmlFor="phone">Phone Number</label>
                    <PhoneInput
                        className="mb-4"
                        id="phone"
                        defaultCountry="TR"
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        onBlur={handleBlur}
                    />
                    <Cards
                        number={values.number}
                        expiry={values.expiry}
                        cvc={values.cvc}
                        name={values.cardholder}
                        focused={values.focus}
                    />

                    <input
                        type="text"
                        name="number"
                        placeholder="Card Number"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                        className={touched.number && errors.number ? 'input-error mt-2 bg-black bg-opacity-30' : 'mt-2 bg-black bg-opacity-30'}
                    />
                    {errors.number && touched.number && <p className="error">{errors.number}</p>}
                    <input
                        type="text"
                        name="cardholder"
                        placeholder="Cardholder Name"
                        value={values.cardholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                        className={touched.cardholder && errors.cardholder ? 'input-error mt-2 bg-black bg-opacity-30' : 'mt-2 bg-black bg-opacity-30'}
                    />
                    {errors.cardholder && touched.cardholder && <p className="error">{errors.cardholder}</p>}
                    <input
                        type="text"
                        name="expiry"
                        placeholder="Expiration Date"
                        value={values.expiry}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                        className={touched.expiry && errors.expiry ? 'input-error mt-2 bg-black bg-opacity-30' : 'mt-2 bg-black bg-opacity-30'}
                    />
                    {errors.expiry && touched.expiry && <p className="error">{errors.expiry}</p>}
                    <input
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        value={values.cvc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                        className={touched.cvc && errors.cvc ? 'input-error mt-2 bg-black bg-opacity-30' : 'mt-2 bg-black bg-opacity-30'}
                    />
                    {errors.cvc && touched.cvc && <p className="error">{errors.cvc}</p>}
                    <button disabled={isSubmitting} type="submit" className="submitButton">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
;

export default Formdata;
