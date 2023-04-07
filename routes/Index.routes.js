import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Banner from "../screens/Banner";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import TabsNavigation from "./Tab.navigator";
import DrawerNavigation from "./Drawer.navigator";

const config = {
  animation: "spring",
  config: {
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    bounciness: 0.5,
    speed: 0.5
  },
};

const screens = {
  Banner: {
    screen: Banner,
    navigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
    },
  },
  Signin: {
    screen: Signin,
    navigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
    },
  },
  Home: {
    screen: DrawerNavigation,
    navigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
    },
  },
};

const IndexStack = createStackNavigator(screens, { headerMode: "none" });

export default createAppContainer(IndexStack);
