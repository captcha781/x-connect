import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import IndexRoutes from "./routes/Index.routes";
import {
  ActivityIndicator,
  StatusBar,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import * as Fonts from "expo-font";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const [isFontLoaded, setFontIsLoaded] = useState(false);

  const loadFonts = () => {
    Fonts.loadAsync({
      Lexend: require("./assets/fonts/lexend.ttf"),
      Rubik: require("./assets/fonts/rubik.ttf"),
    })
      .then(() => {
        setFontIsLoaded(true);
      })
      .catch((err) => {
        ToastAndroid.show("Error on font loading");
      });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!isFontLoaded) {
    return (
      <React.Fragment>
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <IndexRoutes />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

export default App;
