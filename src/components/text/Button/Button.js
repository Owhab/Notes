import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
import { spacing } from "../../../theme/spacing";

export default function Button({ title, onPress, customStyles }) {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={styles.buttonContent}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContent: {
    backgroundColor: "#FFE600",
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[15],
    borderRadius: 30,
    fontWeight: "bold",
    fontSize: spacing[5],
  },
});
