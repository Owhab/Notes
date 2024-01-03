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

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={styles.signInImage}
        source={require("../../assets/images/empty-state.jpg")}
      />
      <Text style={styles.signInTitle}>Never forgot your notes.</Text>
      <View style={styles.formContainer}>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button
          customStyles={{ marginTop: spacing[5], alignSelf: "center" }}
          title="Login "
        />
      </View>
      <View style={styles.signUpText}>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>
            Don't have an account?{" "}
            <Text style={{ color: colors.green }}>Sign Up</Text>
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
  input: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    marginVertical: spacing[4],
  },
  signUpText: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: spacing[10],
    flex: 1,
  },
});
