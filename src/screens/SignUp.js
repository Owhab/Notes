import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Button from "../components/text/Button/Button";
import Input from "../components/Input/Input";

export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.signInTitle}>Never forgot your notes.</Text>
      <View style={styles.formContainer}>
        <Input placeholder="Full Name" />
        <Input placeholder="Your Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Age" />
        <Button
          customStyles={{ marginTop: spacing[5], alignSelf: "center" }}
          title="Sign Up "
        />
      </View>
      <View style={styles.signUpText}>
        <Pressable
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text>
            Already have an account?{" "}
            <Text style={{ color: colors.green }}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signInImage: {
    alignSelf: "center",
    width: 300,
    height: 300,
  },
  signInTitle: {
    textAlign: "center",
    fontSize: spacing[5],
    marginTop: spacing[5],
  },
  formContainer: {
    padding: spacing[6],
  },

  signUpText: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: spacing[10],
    flex: 1,
  },
});
