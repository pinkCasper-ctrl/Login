import { View, Text, TextInput, StyleSheet, Dimensions, Alert, Pressable, Image, ImageBackground } from 'react-native'
import React, { Component, useState } from 'react'
// import RadioGroup from 'react-native-radio-buttons-group'
// import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';
import { RadioButton } from 'react-native-paper';
import ProfileUpdateContentInfo from './ProfileUpdateContentInfo';

const width = Dimensions.get('window').width; //dimensions, ekran boyutunu almaya yarar.
const height = Dimensions.get('window').height;
////17-18-19.Gün (Register)
const radioButtonsData = [
  {
    id: '1',
    label: 'Erkek',
    value: 'Erkek',
  },
  {
    id: '2',
    label: 'Kadın',
    value: 'Kadın',
  },
  {
    id: '3',
    label: 'Belirtmek İstemiyorum',
    value: 'Belirtmek İstemiyorum',
  }
];
 function controlChecked(){
  const [checked, setChecked] = useState('first');
}
// function onPressRadioButton(radioButtonsArray){
  // setRadioButtons(radioButtonsArray);}
export default class Register extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      checked: 'Erkek',
      agreement : 'true'
    };
  }
  render(){

  //const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  console.log("geldi mi")

  return(
    <View>
           <View style={styles.binIn}>
             <View>
               <Text   style={styles.binText}>BİN</Text>
             </View>
            
             <View style={styles.inBackground}>
               <Text   style={styles.inText}>İN</Text>
             </View>
          
           </View>
    
           <Text style={styles.nameSurnameText}>İsim soyisim</Text>
           <TextInput style={styles.nameSurname}>
              {/* <ProfileUpdateContentInfo/> */}
              {/* <Image color={'#656F77'} source={require('./Message.png')}></Image> */}
              <Text style={styles.inputText}>   Turgut Kurt</Text>
           </TextInput>

          <Text style={styles.mailText}>E-mail adresiniz</Text>
          <TextInput style={[styles.mailBox, {paddingLeft:15}]}>
            <Image source={require('./Message.png')}></Image>
            <Text style={styles.inputText}>   turgut@softcand.com</Text>
          </TextInput>

          <Text style={styles.dateOfBirthText}>Doğum Tarihi</Text>
          <TextInput style={[styles.dateOfBirthBox,  {paddingLeft:15}]}>
            <Image color={'#656F77'} source={require('./Message.png')}></Image>
            <Text style={styles.inputText}>   18 Ocak 1993</Text>
          </TextInput>


        <Text style={styles.radioButtonText}>Cinsiyetiniz</Text>
        <View style={{position:'absolute',top:height/100*54,left: width/100*6.33, flexDirection:'row'}}>
           <RadioButton 
              color='#3F3D56'
              value='first'
              status={this.state.checked ==='Erkek'? 'checked' : 'unchecked'}
              onPress={() => this.setState({checked:'Erkek'})}
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Erkek    </Text>
        
           <RadioButton 
              color='#3F3D56'
              value='second'
              status={this.state.checked ==='kadın'? 'checked' : 'unchecked'}
              onPress={() => this.setState({checked:'kadın'})}
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Kadın    </Text>
        
           <RadioButton 
              color='#3F3D56'
              value='third'
              status={this.state.checked ==='belirtmek istemiyorum'? 'checked' : 'unchecked'}
              onPress={() => this.setState({checked:'belirtmek istemiyorum'})}
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Belirtmek istemiyorum</Text>
        
        </View>
          
          
          
           {/* <Text style={styles.radioButtonText}>Cinsiyetiniz</Text>
            <View style={styles.radioButtonBox}>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                layout='row'
              />
            </View> */}

           

      {/* <View position={'absolute'} top={height/100*54}>
        <RadioForm
          formHorizontal={true}
          animation={false}
        >
          {
            radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i} >
                <RadioButtonInput
                  obj={obj}
                  index={i}
              
                  borderWidth={1}
                  buttonInnerColor={'#ffffff'}
                  buttonOuterColor={'#656F77'}
                  buttonSize={1}
                  buttonOuterSize={15}
                  buttonStyle={{}}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                 
                  labelStyle={{ fontSize: 16, color: '#656F77' }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))
          }
        </RadioForm>
      </View> */}

           <Text style={styles.passwordText}>Şifreniz</Text>
           <TextInput style={[styles.passwordBox,  {paddingLeft:20}]}>
           <Image color={'#656F77'} source={require('./Lock.png')}></Image>
           <Text style={styles.inputText}>   ****************</Text>
           </TextInput>
        
        <View style={{position:'absolute',top:height/100*72.29,left: width/100*6.13, flexDirection:'row'}}>
           <RadioButton 
              color='#3F3D56'
              value='first'
              status={this.state.agreement === 'true'? 'checked' : 'unchecked'}
              onPress={()=> this.state.agreement ==='true'? this.setState({agreement:'false'}) :  this.setState({agreement:'true'}) }
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Gizlilik sözleşmesini okudum, onaylıyorum</Text>
        </View>
        
           <Pressable
            style={styles.button}
            onPress={() => this.state.agreement === 'false'? Alert.alert('Lütfen gizlilik sözleşmesini onaylayınız.') : Alert.alert('Kayıt tamam') }>
            <Text style={styles.buttonText}>Üye Ol</Text>
          </Pressable>
    
          <View style={styles.accountRegisterDiv}>
            <Text style={styles.account}>Hesabınız var mı?</Text>
            <Text style={styles.register}> Giriş Yap</Text>
          </View> 
    </View>
      
    
  )
    }
}

const styles= StyleSheet.create({
  binIn: {
    paddingTop:15,
    paddingBottom:13,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  binText: {
    fontFamily:'AkayaTelivigala-Regular',
    fontSize: 60,
    fontWeight: '400',
    //textAlign: 'center',
    color: '#3F3D56',
  },
  inText: {
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
  inputText:{
    fontWeight:'400',
    fontSize:16,
    marginLeft:10,
  },
  nameSurnameText:{
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 15.15,
    fontSize: 14,
  },
  nameSurname:{
    paddingLeft:15,
    paddingBottom:17,
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 18.72,
  },
  mailText: {
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 27.09,
    fontSize: 14,
  },
  dateOfBirthText:{
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 39.04,
    fontSize: 14,
  },
  passwordText: {
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 59.73,
    fontSize: 14,
  },
  radioButtonText:{
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 51,
    fontSize: 14,
  },
  dateOfBirthBox:{
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 42.61,
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
  radioButtonBox:{
    width:width,
    height:20,
    paddingRight:20,
    position: 'absolute',
    left: 15,
    right: (width - 335) / 2,
    top: height / 100 * 54, 
  },
  radioButton:{
    color:'#ffffff',

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
    top: height / 100 * 63.3,
  },
  button: {
    width: 335,
    height: 51,
    backgroundColor: '#ffffff',
    borderColor:'#3F3D56',
    borderWidth:2,
    borderRadius: 60,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 78,
    justifyContent: 'center',
    //shadowColor:'black', //28 ve üstü api ler için
    elevation:8, //api 28 altı olan device lar için gölge vermede kullanılan komut
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#3F3D56',
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