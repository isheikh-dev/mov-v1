// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput , Text } from "react-native";

export default function App() {
  const [enteredGoal , setEnterdGoal] = useState('');
  const [courseGoals , setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => { 
    setEnterdGoal(enteredText);
  };

  const addGoalHandler = () => { 
    setCourseGoals(courseGoals => [...courseGoals , enteredGoal] )
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputStyle}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD"  onPress={addGoalHandler} />
      </View>
      <View>
          {courseGoals.map( (goal) =>  
              <View style={styles.listItem} key={goal + Math.random()}>
                <Text >{goal}</Text>
              </View>
           )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputStyle: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
  }, 
  listItem: { 
    padding: 10,
    backgroundColor: 'grey', 
    borderWidth:1,
    borderColor:'black', 
    marginVertical: 10
  }
});
