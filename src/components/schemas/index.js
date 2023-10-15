import * as Yup from "yup";
import * as valid from 'card-validator';

function validateCreditCardNumber(value) {
    const cardValidation = valid.number(value);
    return cardValidation.isValid;
}

function validateExpirationDate(value) {
    const expiryValidation = valid.expirationDate(value);
    return expiryValidation.isValid;
}

function validateCvc(value) {
    const cvcValidation = valid.cvv(value);
    return cvcValidation.isValid;
}

export const basicSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email!").required('Email is required'),
    name: Yup.string().matches(/^[a-zA-Z]+$/, 'You must enter a name containing only letters!').required('Name is required'),
    surname: Yup.string().matches(/^[a-zA-Z]+$/, 'You must enter a name containing only letters!').required('Surname is required'),
    address: Yup.string().min(10).required('Address is required'),
    phone: Yup.string().required('Phone Number is required'),
    number: Yup.string().test('is-card-number-valid', 'Please enter a valid Card Number', validateCreditCardNumber).required('Card Number is required'),
    expiry: Yup.string().test('is-expiry-valid', 'Please enter a valid date format', validateExpirationDate).required('Expiration date is required'),
    cvc: Yup.string().test('is-cvc-valid', 'Please enter a valid CVC format', validateCvc).required('CVC is required'),
    cardholder: Yup.string().matches(/^[a-zA-Z]+$/, 'You must enter a name containing only letters!').required('Cardholder Name is required'),
})

