import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export default function Input({ placeholder, secureTextEntry }) {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={styles.input}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    marginVertical: spacing[4],
  },
});
