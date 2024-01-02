import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView>
      <Image
        style={{
          alignSelf: "center",
          width: 300,
          height: 300,
        }}
        source={require("../../assets/images/empty-state.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
