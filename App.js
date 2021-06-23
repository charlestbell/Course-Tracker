import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, StyleSheet, TextInput, Button, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 30, paddingTop: 40 }}>
      <View
        style={styles.screen}
      >
        <TextInput
          placeholder="Course Goal"
          style={}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    inputContainer: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      padding: 10,
      width: 220,
    }

  
})
