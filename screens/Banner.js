import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";

const Banner = ({ navigation }) => {
  const [btns, setBtns] = useState({ up: false, in: false });

  const effectToggle = (id) => {
    return setBtns({ ...btns, [id]: !btns[id] });
  };

  return (
    <View className="flex-1 bg-purple-500 justify-center items-center">
      <StatusBar style="light" />
      <ImageBackground
        className="flex-1 w-full justify-end"
        source={require("../assets/banner/background.jpg")}
      >
        <View className="w-full p-5 pb-10 rounded-t-xl bg-white">
          <View className="mb-6">
            <Text className="font-lexend font-semibold text-2xl">
              Square Pulse
            </Text>
          </View>
          <View className="mb-6">
            <Text className="font-lexend">
              Square Pulse's exclusive mobile application for punch in services.
            </Text>
          </View>
          <View className="w-full flex-row">
            {/* <Pressable
              className="w-1/2 bg-violet-800 py-3 rounded-full -ml-1 border-[1px] border-violet-800 active:bg-white"
              onPressIn={() => effectToggle("up")}
              onPressOut={() => effectToggle("up")}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text
                className={`font-lexend text-center ${
                  btns.up ? "text-violet-800" : "text-white"
                }`}
              >
                Sign up
              </Text>
            </Pressable> */}
            <Pressable
              className="w-full bg-violet-800 py-3 rounded-full border-[1px] border-violet-800 active:bg-white"
              onPressIn={() => effectToggle("in")}
              onPressOut={() => effectToggle("in")}
              onPress={() => navigation.navigate("Signin")}
            >
              <Text
                className={`font-lexend text-center ${
                  btns.in ? "text-violet-800" : "text-white"
                }`}
              >
                Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Banner;
