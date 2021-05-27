import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import firebase from "./utils/firebase";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Home({ navigation }) {
  
  const [balance, changeBalance ] = React.useState(2000);
  const [amount, addAmount ] = React.useState(0);
/*   const [payload, setPayload] = useState({
    addCash: 0,
});

  const handleChange = (prop) => (text)=>{
    setPayload({...payload, [prop]:text})
} */

  const order = () => {
    if (balance < 1000) {
      Alert.alert("Insufficient Balance");
    } else {
      changeBalance(balance - 1000);
      Alert.alert("Thank you for the business.");
    }
  };

  const cashin = () => {
    var n1=parseInt(amount);
    var n2=parseInt(balance);
    changeBalance(n1+n2);
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.primaryText}>NERVE GEAR</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://saofulldive.files.wordpress.com/2016/11/nervegear.png',
        }}
      />
      <Text style={styles.secondaryText}>Pre-order Price: 1000usdt</Text>
      <Button onPress={order} title="Order" name="Order" />
      <Text style={styles.primaryText}></Text>
      <Text style={styles.primaryText}>Cash in</Text>
      

      <TextInput style={styles.textInput} onChangeText={(val)=>addAmount(val)} 
        placeholder="Amount"
        />
     
       <Button onPress={cashin} title="CONFIRM" name="cashin" /> 

      <Text style={styles.primaryText}>Balance: {balance}</Text>

      {/* <Text style={styles.primaryText}>BSIT 3A</Text>
      <TextInput
        style={styles.editText}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        title="Account"
        onPress={() => navigation.navigate("Settings")}
      ></Button>
      <Button
        title="Logout"
        onPress={() => logout}
      ></Button>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    
  },
  primaryText: {
    fontSize: 24,
    color: "white",
  },
  secondaryText: {
    fontSize: 18,
    margin: 15,
    color: "white",
  },
  textInput: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 200,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 2,
    borderColor: "#999999",
    backgroundColor:"#767A8D",
    color: "white",
  },
  btnlogin: {
    borderRadius: 10,
    minWidth: 200,
    marginTop: 15,
    backgroundColor: "#046EE5",
    padding: 10,
  },
});
