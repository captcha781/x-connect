import 'react-native-gesture-handler';
import React from "react";
import IndexRoutes from "./routes/Index.routes";
import { StatusBar } from "react-native";
import TabsNavigation from "./routes/Tab.navigator";

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={'white'} />
      <IndexRoutes />
    </React.Fragment>
  );
};

export default App;
