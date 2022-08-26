import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const ComponentInput = (props) => {
  return (
    <View>
            <Text style={[styles.MailText, props.textUp]}>{props.firstTextName}</Text>
            <TextInput
              style={[props.textInput, {paddingLeft: 15}, styles.MailBox]}
              placeholder={props.textInputName}
              onChangeText={props.handleChange}
              onBlur={props.onBlur}
              value={props.value}
              secureTextEntry={props.ste}
            />
            { props.inputErrors && (
              <Text style={[styles.CommonText, props.textDown]}>{props.inputErrors}</Text>
            )}
    </View>
  )
}
export default ComponentInput;


const styles = StyleSheet.create({
MailText: {
  fontWeight: '600',
  color: '#656F77',
  fontSize: 14,  
},
MailBox: {
  borderWidth: 1,
  borderColor: '#656F77',
  width: 335,
  height: 51,
  borderRadius: 36,
  // 
},

CommonText: {
  color: 'red',
  
},
});