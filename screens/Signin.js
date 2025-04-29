import {
  View,
  Text,
  Button,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { BlurView } from "@react-native-community/blur";
import SafeAreaView from "react-native-safe-area-view";
import * as yup from "yup";
import { useFormik } from "formik";

const initialState = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const Signin = ({ navigation }) => {
  const [btns, setBtns] = useState({ submit: false });
  const {} = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const effectToggle = (id) => {
    return setBtns({ ...btns, [id]: !btns[id] });
  };

  function handleSubmit(values, { setErrors, setStatus }) {}

  return (
    <View className="flex-1 justify-center items-center bg-purple-400">
      <ImageBackground
        className="flex-1 w-full justify-center"
        source={require("../assets/banner/background.jpg")}
      >
        <View className="mb-5 w-11/12 mx-auto">
          <Text className="text-white font-semibold font-lexend text-2xl">
            Signin
          </Text>
        </View>
        <View className="mt-0 w-11/12 mx-auto">
          <View className="w-full mb-3">
            <Text className="text-white font-lexend mb-3">Username</Text>
            <View className="rounded-md overflow-hidden relative">
              <TextInput
                className="w-full rounded-full p-2 !px-4 text-white font-lexend"
                style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
              />
            </View>
          </View>
          <View className="w-full mb-8">
            <Text className="text-white font-lexend mb-3">Password</Text>
            <View className="rounded-md overflow-hidden">
              <View blurType="light" blurAmount={10}>
                <TextInput
                  className="w-full rounded-full p-2 !px-4 text-white font-lexend"
                  style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
                  secureTextEntry
                />
              </View>
            </View>
          </View>
          <View className="w-full mb-3 overflow-hidden rounded-md">
            <Pressable
              className="w-full bg-violet-700 py-3 rounded-full border-[1px] border-violet-700 active:bg-whitez"
              onPressIn={() => effectToggle("submit")}
              onPressOut={() => effectToggle("submit")}
            >
              <Text
                className={`text-center font-lexend ${
                  btns.submit ? "text-white" : "text-white"
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

export default Signin;
