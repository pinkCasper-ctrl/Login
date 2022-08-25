import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import FlashMessage from 'react-native-flash-message';
import {Formik} from 'formik';
import {LoginScreen} from '../../schema';
import { log } from 'react-native-reanimated';

const width = Dimensions.get('window').width; //dimensions, ekran boyutunu almaya yarar.
const height = Dimensions.get('window').height;

const Login = props => {
  const [formikInitialValues, setFormikinitialValues] = useState({
    email: '',
    password: '',
  });
  const [showTheEmail, setShowTheEmail] = useState(false);
  const [showThePassword, setShowThePassword] = useState(false);
  const handleErrorControl = errors => {
    if (errors.email || errors.password) {
      setShowTheEmail(true);
      setShowThePassword(true);
    }
  };
  const {
    BinIn,
    BinText,
    InBackground,
    InText,
    MailText,
    MailBox,
    CommonText,
    PasswordBox,
    PasswordText,
    Button,
    ButtonText,
    ForgotPassword,
    AccountRegisterDiv,
    Account,
    Register,
  } = styles;
  return (
    <View>
      <FlashMessage position={'top'} />
      <View style={BinIn}>
        <View>
          <Text style={BinText}>BİN</Text>
        </View>
        <View style={InBackground}>
          <Text style={InText}>İN</Text>
        </View>
      </View>
      <Formik
        initialValues={formikInitialValues}
        validationSchema={LoginScreen}
        onSubmit={(values, errors) => {
          // handleErrorControl(errors);
          // props.navigation.navigate('Register');
          console.log(values);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View>
            <Text style={MailText}>E-mail adresiniz</Text>
            <TextInput
              style={[MailBox, {paddingLeft: 15}]}
              placeholder=" turgut@softcand.com"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {showTheEmail && errors.email && (
              <Text style={CommonText}>{errors.email}</Text>
            )}
            <Text style={PasswordText}>Şifreniz</Text>
            <TextInput
              style={[PasswordBox, {paddingLeft: 20}]}
              placeholder="**"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            {showThePassword && errors.password && (
              <Text style={CommonText}>{errors.password}</Text>
            )}
            <TouchableOpacity style={Button} onPress={()=>console.log("asssas")}>
              <Text style={ButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text style={ForgotPassword}>Şifreni mi unuttun?</Text>
      <View style={AccountRegisterDiv}>
        <Text style={Account}>Hesabınız yok mu?</Text>
        <Text style={Register}> Şimdi kayıt ol</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CommonText: {
    color: 'red',
    position: 'absolute',
    left: (width - 335) / 2,
    top: (height / 100) * 13,
  },
  BinIn: {
    height: 176,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  BinText: {
    height: 70,
    fontFamily: 'AkayaTelivigala-Regular',
    fontSize: 60,
    fontWeight: '400',
    color: '#3F3D56',
  },
  InText: {
    height: 70,
    fontFamily: 'AkayaTelivigala-Regular',
    fontSize: 60,
    fontWeight: '400',
    color: '#ffffff',
  },
  InBackground: {
    backgroundColor: '#3F3D56',
  },
  MailText: {
    fontWeight: '600',
    color: '#656F77',
    position: 'absolute',
    left: (width / 100) * 5.6,
    top: (height / 100) * 3.2,
    fontSize: 14,
  },
  PasswordText: {
    position: 'absolute',
    left: (width / 100) * 5.6,
    top: (height / 100) * 15,
    fontSize: 14,
  },
  MailBox: {
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: (height / 100) * 5.67,
  },
  PasswordBox: {
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: (height / 100) * 18,
  },
  Button: {
    width: 335,
    height: 51,
    backgroundColor: '#3F3D56',
    borderRadius: 60,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: (height / 100) * 28,
    justifyContent: 'center',
    elevation: 8, //sonradan eklendi
  },
  ButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white',
  },

  ForgotPassword: {
    width: 169,
    color: '#3F3D56',
    fontSize: 20,
    position: 'absolute',
    left: (width - 169) / 2,
    top: (height / 100) * 60.22,
  },

  AccountRegisterDiv: {
    width: 215,
    height: 43,
    position: 'absolute',
    left: (width - 215) / 2,
    top: (height / 100) * 80.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Account: {
    color: '#656F77',
    fontSize: 14,
  },
  Register: {
    color: '#3F3D56',
    fontSize: 16,
    fontWeight: '600',
  },
});

export {Login};