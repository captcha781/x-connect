import { View, Text, Button } from 'react-native'
import React from 'react'

const Banner = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Button title='Signin ?' onPress={() => navigation.navigate('Signin')} />
    </View>
  )
}

export default Banner