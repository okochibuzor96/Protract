import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/gm;

export const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('required'),
    password: yup.string().min(5).matches(passwordRules, {message: 'Please create a stronger password'}).required()
})