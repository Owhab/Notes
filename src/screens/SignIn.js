import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.signInImage}
          source={require("../../assets/images/empty-state.jpg")}
        />
      </View>
      <Text>SignIn</Text>
    </SafeAreaView>
  );
}

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
// const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  signInImage: {
    flex: 1,
    height: 800,
    objectFit: "contain",
  },
});
