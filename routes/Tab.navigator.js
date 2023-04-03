import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Wallet from "../screens/Wallet";
import Transactions from "../screens/Transactions";
import { createDrawerNavigator } from "@react-navigation/drawer";

const screens = [
  {
    name: "Wallet",
    component: Wallet,
    options: {
      tabBarLabel: "Wallet",
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="wallet" color={color} size={size} />
      ),
    },
  },
  {
    name: "Tansactions",
    component: Transactions,
    options: {
      tabBarLabel: "Transactions",
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="exchange" color={color} size={size} />
      ),
    },
  },
];

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabsNavigation = () => {
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: { height: "6%" } }}
      >
        {screens.map((screen) => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{ ...screen.options }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigation;
