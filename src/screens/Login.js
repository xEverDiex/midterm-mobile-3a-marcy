import React, { useState } from 'react'
import firebase from "./tabs/utils/firebase"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image} from "react-native"

export default function Login({ navigation }) {

    const [payload, setPayload] = useState({
        email:"",
        password:""
    });
    const handleChange = (prop) => (text)=>{
        setPayload({...payload, [prop]:text})
    }

    const login=() => {
      
    if (!payload.email || !payload.password) {
        setPayload({ ...payload, errors:"Please complete all fields!"});
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((userCredential) => {
           
            Alert.alert("Signed In");
            navigation.navigate("HomeScreenTab")
          })
          .catch((error) => {
            Alert.alert(
                "Login failed",
                error.message,
                [{ text: "OK" }],
                { cancelable: false }
        );
          });
      }
    };
    
    return (
        <View style={styles.container}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/99b0b4b2-1ec2-42db-8d72-689653733407/daevpjf-1b4a062b-905f-41e4-b1cc-46ff8236258a.png',
        }}
      />
            <Text style={styles.primaryText}> 
                NERVEGEAR  
            </Text>
            <TextInput style={styles.textInput} placeholder="Email"
            onChangeText={handleChange("email")}
            value={payload.email}/>
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}  onChangeText={handleChange("password")}
            value={payload.password}/>
        <TouchableOpacity style={styles.btnlogin} onPress={login}>
          <Text style={styles.buttonText}> Log In </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister} onPress={()=> navigation.navigate("Register")}>
          <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
    },
    primaryText: { 
    fontSize: 24,
    color: 'white'
    },
    textInput: {
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 10,
        minWidth: 200,
        marginTop: 15,
        paddingLeft: 2,
        borderColor:"#999999",
        color: 'white',
        backgroundColor:"#767A8D",
        
    },
    btnlogin: {
        borderRadius: 10,
        minWidth: 200,
        marginTop: 15,
        backgroundColor: "#046EE5",
        padding: 10,
    },
    btnRegister: {
        borderRadius: 10,
        minWidth: 200,
        marginTop: 15,
        backgroundColor: "#381f1f",
        padding: 10,
    },
    buttonText: { 
        fontSize: 15,
        color: "#ffffff",
        textAlign: 'center',
        },
        tinyLogo: {
          width: 350,
          height: 350,
        }
  });