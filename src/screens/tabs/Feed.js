import React from "react";

import { View, StyleSheet, Text } from "react-native";
export default function Feed() {
  return (
    <View style={styles.container}>
       <Text style={styles.primaryText}>Cash in</Text>
      

      <TextInput style={styles.textInput} placeholder="Amount"
            onChangeValue = {e => changeBalance(e.target.value)}
            keyboardType="numeric"/>
     
      <Button onPress={cashin} title="CONFIRM" name="cashin" />
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
