import React, { useState } from "react";
import firebase from "./tabs/utils/firebase"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Register({ navigation }) {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const handleChange = (prop) => (text) => {
    setPayload({ ...payload, [prop]: text });
  };

  const register = () => {
    if (!payload.email || !payload.password || !payload.confirmPass) {
      Alert.alert(
        "Registration failed",
        "Please fillout all fields!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else if (payload.password !== payload.confirmPass) {
      Alert.alert(
        "Registration failed",
        "Password do not Match!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((signedInUser) => {
            Alert.alert(
              "Message" ,
               "Registration Successful " + signedInUser.user.name,
                [{ text: "OK" }],
                { cancelable: false }
        );
            
        })
        .catch(err=>{
            Alert.alert(
                "Registration failed",
               err.message,
                [{ text: "OK" }],
                { cancelable: false }
        );
    });
}
  }
  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>Create an Account</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={handleChange("email")}
        value={payload.email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={handleChange("name")}
        value={payload.name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handleChange("password")}
        value={payload.password}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={handleChange("confirmPass")}
        value={payload.confirmPass}
      />
      <TouchableOpacity style={styles.btnRegister} onPress={register}>
        <Text style={styles.buttonText}> Register </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}> Log In </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    fontSize: 24,
  },
  textInput: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 200,
    marginTop: 15,
    paddingLeft: 2,
    borderColor: "#999999",
  },
  btnRegister: {
    borderRadius: 10,
    minWidth: 200,
    marginTop: 15,
    backgroundColor: "#381f1f",
    padding: 10,
  },
  btnLogin: {
    borderRadius: 10,
    minWidth: 200,
    marginTop: 15,
    backgroundColor: "#046EE5",
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center",
  },
});
