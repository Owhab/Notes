import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Button from "../components/text/Button/Button";
import Input from "../components/Input/Input";
import { RadioGroup } from "react-native-radio-buttons-group";

export default function SignUp({ navigation }) {
  const [selectedId, setSelectedId] = useState();
  const genders = useMemo(
    () => [
      {
        id: "1",
        label: "Male",
        value: "male",
      },
      {
        id: "2",
        label: "Female",
        value: "female",
      },
    ],
    []
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.signInTitle}>Never forgot your notes.</Text>
      <View style={styles.formContainer}>
        <Input placeholder="Full Name" />
        <Input placeholder="Your Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Age" />
        <RadioGroup
          containerStyle={styles.genders}
          radioButtons={genders}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
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
  genders: {
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
