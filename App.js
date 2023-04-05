import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import IndexRoutes from "./routes/Index.routes";
import { StatusBar, Text, ToastAndroid, View } from "react-native";
import * as Fonts from 'expo-font'



const App = () => {

  const [isFontLoaded, setFontIsLoaded] = useState(false)

  const loadFonts = () => {
    Fonts.loadAsync({
      'Lexend' : require('./assets/fonts/lexend.ttf'),
      'Rubik' : require('./assets/fonts/rubik.ttf')
    }).then(() => {
      setFontIsLoaded(true)
    }).catch(err => {
      ToastAndroid.show('Error on font loading')
    })
  }

  useEffect(() => {
    loadFonts()
  }, [])

  if(!isFontLoaded){
    return <React.Fragment>
      <View className="flex-1 justify-center items-center">
        <Text>Fonts Loading !!!</Text>
      </View>
    </React.Fragment>
  }

  return (
    <React.Fragment>
      <IndexRoutes />
    </React.Fragment>
  );
};

export default App;
