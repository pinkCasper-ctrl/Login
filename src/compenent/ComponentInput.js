import { Text, TextInput, View } from 'react-native'

import React from 'react'

const ComponentInputEmail = () => {
  return (
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
    </View>
  )
}
export {ComponentInputEmail};

