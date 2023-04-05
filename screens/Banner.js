import { View, Text, Button, Image } from "react-native";
import React from "react";

const Banner = ({ navigation }) => {
  return (
    <View className="flex-1 bg-purple-500 justify-center items-center">
      <Button
        title="Signin ?"
        onPress={() => navigation.navigate("Signin")}
        className="w-1/3"
      />
    </View>
  );
};

export default Banner;
