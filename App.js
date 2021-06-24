import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={() => {
              console.log("Does that work?");
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    paddingTop: 40,
  },
});
