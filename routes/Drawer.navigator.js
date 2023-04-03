import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./Tab.navigator";
import Transactions from "../screens/Transactions";


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Wallet" component={TabsNavigation} />
        <Drawer.Screen name="Transactions" component={Transactions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default DrawerNavigation