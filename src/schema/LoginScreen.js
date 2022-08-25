import * as Yup from 'yup';

const LoginScreen = Yup.object().shape({
    email: Yup.string()
    .email('Lütfen geçerli bir e-posta girin.')
    .required('Email alanı boş bırakılamaz.')
    .label('Email'),
    password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Şifre küçük harf içermelidir')
    .matches(/\w*[A-Z]\w*/, 'Şifre büyük harf içermelidir')
    .matches(/\d/, 'Şifre rakam içermelidir')
    .min(8, ({min}) => `Şifre en az ${min} karakterden oluşmalıdır.`)
    .required('Şifre alanı boş bırakılamaz.')
    .label('Password'),
    });

    export default LoginScreen;