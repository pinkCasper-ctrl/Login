import { View, Text, TextInput, StyleSheet, Dimensions, Alert, Pressable, Image, ImageBackground, Button } from 'react-native'
import React, { useState, Component } from 'react'
import RadioGroup from 'react-native-radio-buttons-group'
// import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';
import { RadioButton, ThemeProvider } from 'react-native-paper';
import ProfileUpdateContentInfo from './ProfileUpdateContentInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlashMessage, {showMessage, hideMessage} from 'react-native-flash-message';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Formik} from 'formik';


//// 13-14-15-16. GÜNLER 
const width = Dimensions.get('window').width; //dimensions, ekran boyutunu almaya yarar.
const height = Dimensions.get('window').height;


// function undiefinedPassword() {
  
// }
const validationSchema = Yup.object().shape({
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


export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showTheEmail:false,
          showThePassword:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleErrorControl = this.handleErrorControl.bind(this);

      }
      handleClick(errors) {
        var allError="Email ve şifre alanı boş bırakılamaz";
        console.log(errors.email);
        console.log(errors.password);
        if (errors.email != undefined || errors.password != undefined) {
          allError= errors.email +" "+ errors.password;
        }
        return allError;
      }
      handleErrorControl(errors){
        if(errors.email || errors.password){
          this.setState({showTheEmail:true})
          this.setState({showThePassword:true})
        }
      }
//   const [PASS, setPASS] = useState('1234')
//   const [MAIL, setMAIL] = useState('xyz@gmail.com')

 render(){
    
    console.log('geldi');
  return (
    // <Text>Okul</Text>
    <View>
      <FlashMessage position={"top"}/>

      <View style={styles.binIn}>

        <View>
          <Text   style={styles.binText}>BİN</Text>
        </View>

        
        <View style={styles.inBackground}>
          <Text   style={styles.inText}>İN</Text>
        </View>
        

      </View>

      {/* 
      <TextInput placeholder='turgut@softcand.com' placeholderTextColor={'#272727'} style={styles.mailBox}></TextInput>

      <TextInput placeholder='**************' placeholderTextColor={'#272727'} style={styles.passwordBox}></TextInput>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Butona Tıklandı')}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </Pressable> */}

      <Formik
        initialValues={{email: '', password: '',pressable: false }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        })=> (
          <View>
            <Text style={[styles.mailText]}>E-mail adresiniz</Text>
            <TextInput 
                style={[styles.mailBox, {paddingLeft:15}]}
                placeholder=" turgut@softcand.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}/>
            { this.state.showTheEmail && errors.email &&
            <Text style={{color: 'red', position:'absolute', left: (width - 335) / 2 ,top: height / 100 * 13,}}>{errors.email}</Text>
            }

            <Text style={styles.passwordText}>Şifreniz</Text>
            <TextInput  
              style={[styles.passwordBox,  {paddingLeft:20}]}
              placeholder="****************"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
             {this.state.showThePassword  && errors.password &&  //ilgili alandan ayrılşdıktan sonra hatayı gösterir. sen anlık olarak hatayı göstermesini istiyorsan touched kullanmazsın
                <Text style={{color: 'red', position:'absolute', left: (width - 335) / 2 ,top: height / 100 * 25,}}>{errors.password}</Text>
                
             }

            <Pressable
              style={styles.button}
              onPress = {() => {
                //const error=this.handleClick(errors)
                //values.pressable=true
                //showMessage({message:error,type:"danger"});
                this.handleErrorControl(errors)
                
                console.log('true')
              }}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </Pressable>
      
          </View>
        )}
      </Formik>
      
      <Text style={styles.forgotPassword}>Şifreni mi unuttun?</Text>

      <View style={styles.accountRegisterDiv}>
        <Text style={styles.account}>Hesabınız yok mu?</Text>
        <Text style={styles.register}> Şimdi kayıt ol</Text>
      </View>
    </View>
  );
}
}

// const SignUpForm = () => {
//   return (
//     <>
//       <Formik
//         initialValues={{email: '', password: '' }}
//         onSubmit={values => console.log(values)}>
//         {({
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           values,
//           errors,
//           touched,
//         })=> (
//           <View>
//             <Text style={[styles.mailText]}>E-mail adresiniz</Text>
//             <TextInput 
//                 style={[styles.mailBox, {paddingLeft:15}]}
//                 placeholder=" turgut@softcand.com"
//                 onChangeText={handleChange('email')}
//                 onBlur={handleBlur('email')}
//                 value={values.email}/>

//             <Text style={styles.passwordText}>Şifreniz</Text>
//             <TextInput  
//               style={[styles.passwordBox,  {paddingLeft:20}]}
//               placeholder="****************"
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//             />
      
//             <Pressable
//               style={styles.button}
//               onPress = {() => {handleSubmit}}>
//               <Text style={styles.buttonText}>Giriş Yap</Text>
//             </Pressable>
      
//           </View>
//         )}
//       </Formik>
//     </>
//   );
// };
// export default SignUpForm;




















// export default class Login extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {};
//       }
// //   const [PASS, setPASS] = useState('1234')
// //   const [MAIL, setMAIL] = useState('xyz@gmail.com')

//  render(){
    
//     console.log('geldi');
//   return (
//     // <Text>Okul</Text>
//     <View>
//       <FlashMessage position={"top"}/>

//       <View style={styles.binIn}>

//         <View>
//           <Text   style={styles.binText}>BİN</Text>
//         </View>

        
//         <View style={styles.inBackground}>
//           <Text   style={styles.inText}>İN</Text>
//         </View>
        

//       </View>

//       {/* 
//       <TextInput placeholder='turgut@softcand.com' placeholderTextColor={'#272727'} style={styles.mailBox}></TextInput>

//       <TextInput placeholder='**************' placeholderTextColor={'#272727'} style={styles.passwordBox}></TextInput>

//       <Pressable
//         style={styles.button}
//         onPress={() => Alert.alert('Butona Tıklandı')}>
//         <Text style={styles.buttonText}>Giriş Yap</Text>
//       </Pressable> */}

//       <Text style={[styles.mailText]}>E-mail adresiniz</Text>
//       <TextInput style={[styles.mailBox, {paddingLeft:15}]}>
//              <Image source={require('./Message.png')}></Image>
//              <Text style={styles.inputText}>   turgut@softcand.com</Text>
//       </TextInput>

//       <Text style={styles.passwordText}>Şifreniz</Text>
//       <TextInput style={[styles.passwordBox,  {paddingLeft:20}]}>
//             <Image color={'#656F77'} source={require('./Lock.png')}></Image>
//             <Text style={styles.inputText}>   ****************</Text>
//       </TextInput>
      
//       <Pressable
//         style={styles.button}
//         // onPress={() => this.props.navigation.navigate('Register')}>
//         onPress = {() => {
//             showMessage({
//               message:"Hata",
//               type:"danger",
//             });
//         }}>
//         <Text style={styles.buttonText}>Giriş Yap</Text>
//       </Pressable>
      
//       <Text style={styles.forgotPassword}>Şifreni mi unuttun?</Text>

//       <View style={styles.accountRegisterDiv}>
//         <Text style={styles.account}>Hesabınız yok mu?</Text>
//         <Text style={styles.register}> Şimdi kayıt ol</Text>
//       </View>
//     </View>
//   );
// }
// }

const styles = StyleSheet.create({
  binIn: {
    height: 176,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  binText: {
    height:70,
    fontFamily:'AkayaTelivigala-Regular',
    fontSize: 60,
    fontWeight: '400',
    //textAlign: 'center',
    color: '#3F3D56',
  },
  inText: {
    height:70,
    fontFamily:'AkayaTelivigala-Regular',
    fontSize: 60,
    fontWeight: '400',
    //textAlign: 'center', ->ortalama için denendi gereksiz
    color: '#ffffff',
  },
  inBackground:
  {
    backgroundColor: '#3F3D56',
    
  },
  mailText: {
    fontWeight:'600',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 3.2,
    fontSize: 14,
  },
  passwordText: {
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 15,
    fontSize: 14,
  },
  mailBox: {
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 5.67,
  },
  passwordBox: {
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 18,
  },
  button: {
    width: 335,
    height: 51,
    backgroundColor: '#3F3D56',
    borderRadius: 60,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 28,
    justifyContent: 'center',
    elevation:8, //sonradan eklendi
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white',
  },

  forgotPassword: {
    width: 169,
    color: '#3F3D56',
    fontSize: 20,
    position: 'absolute',
    left: (width - 169) / 2,
    top: height / 100 * 60.22,
  },

  accountRegisterDiv: {
    width: 215,
    height: 43,
    position: 'absolute',
    left: (width - 215) / 2,
    top: height / 100 * 80.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  account: {
    color: '#656F77',
    fontSize: 14,

  },
  register: {
    color: '#3F3D56',
    fontSize: 16,
    fontWeight: '600',
  },
});

