import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Button from "../components/text/Button/Button";
import Input from "../components/Input/Input";
import RadioButtonRN from "radio-buttons-react-native";
import { auth, db } from "../../App";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

export default function SignUp({ navigation }) {
  const [selectedGender, setSelectedGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  const selectGender = (gender) => {
    setSelectedGender(gender.value);
  };

  const signUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        age: age,
        gender: selectedGender,
        uid: result.user.uid,
      });
      console.log("result: ", result);
    } catch (error) {
      console.log("Error: ", error);
      showMessage({ message: error.message });
    }
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log("user: ", user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
  };

  const genders = useMemo(
    () => [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
    []
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.signInTitle}>Never forget your notes.</Text>
      <View style={styles.formContainer}>
        <Input placeholder="Full Name" onChangeText={(text) => setName(text)} />
        <Input
          placeholder="Your Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />
        <RadioButtonRN
          data={genders}
          selectedBtn={(e) => selectGender(e)}
          circleSize={20}
          textStyle={{ color: colors.black }}
          initial={-1}
        />
        <Button
          customStyles={{ marginTop: spacing[5], alignSelf: "center" }}
          title="Sign Up "
          onPress={signUp}
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
