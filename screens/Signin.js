import { View, Text, Button } from 'react-native'
import React from 'react'

const Signin = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Button title='Home ?' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default Signin