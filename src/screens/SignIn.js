import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Button from "../components/text/Button/Button";
import Input from "../components/Input/Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const auth = getAuth();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User Logged in Succesfully. ", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: ", errorMessage);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={styles.signInImage}
        source={require("../../assets/images/empty-state.jpg")}
      />
      <Text style={styles.signInTitle}>Never forgot your notes.</Text>
      <View style={styles.formContainer}>
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          customStyles={{ marginTop: spacing[5], alignSelf: "center" }}
          title="Login "
          onPress={signIn}
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
