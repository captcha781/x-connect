import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Banner from '../screens/Banner'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'
import Home from "../screens/Home";
import TabsNavigation from "./Tab.navigator";
import DrawerNavigation from "./Drawer.navigator";


const screens = {
    Banner: {
        screen: Banner,
    },
    Signin: {
        screen: Signin,
    },
    Signup: {
        screen: Signup,
    },
    Home: {
        screen: DrawerNavigation
    }
}

const IndexStack = createStackNavigator(screens, { headerMode: 'none' })

export default createAppContainer(IndexStack)