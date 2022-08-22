import { View, Text, TextInput, StyleSheet, Dimensions, Alert, Pressable, Image, ImageBackground, Button } from 'react-native'
import React, { useState, Component } from 'react'
import RadioGroup from 'react-native-radio-buttons-group'
// import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';
import { RadioButton } from 'react-native-paper';
import ProfileUpdateContentInfo from './ProfileUpdateContentInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';

//// 13-14-15-16. GÜNLER 
const width = Dimensions.get('window').width; //dimensions, ekran boyutunu almaya yarar.
const height = Dimensions.get('window').height;
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {};
      }
//   const [PASS, setPASS] = useState('1234')
//   const [MAIL, setMAIL] = useState('xyz@gmail.com')

 render(){
    
    console.log('geldi');
  return (
    // <Text>Okul</Text>
    <View>
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

      <Text style={[styles.mailText]}>E-mail adresiniz</Text>
      <TextInput style={[styles.mailBox, {paddingLeft:15}]}>
             <Image source={require('./Message.png')}></Image>
             <Text style={styles.inputText}>   turgut@softcand.com</Text>
      </TextInput>

      <Text style={styles.passwordText}>Şifreniz</Text>
      <TextInput style={[styles.passwordBox,  {paddingLeft:20}]}>
            <Image color={'#656F77'} source={require('./Lock.png')}></Image>
            <Text style={styles.inputText}>   ****************</Text>
      </TextInput>

      <Pressable
        style={styles.button}
        onPress={() => this.props.navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </Pressable>

      <Text style={styles.forgotPassword}>Şifreni mi unuttun?</Text>

      <View style={styles.accountRegisterDiv}>
        <Text style={styles.account}>Hesabınız yok mu?</Text>
        <Text style={styles.register}> Şimdi kayıt ol</Text>
      </View>
    </View>
  );
}
}

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
    top: height / 100 * 27.09,
    fontSize: 14,
  },
  passwordText: {
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 39.18,
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
    top: height / 100 * 30.67,
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
    top: height / 100 * 41.75,
  },
  button: {
    width: 335,
    height: 51,
    backgroundColor: '#3F3D56',
    borderRadius: 60,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 53,
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
    top: height / 100 * 62.22,
  },

  accountRegisterDiv: {
    width: 215,
    height: 43,
    position: 'absolute',
    left: (width - 215) / 2,
    top: height / 100 * 87.6,
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

