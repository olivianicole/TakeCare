import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch, TextInput, Button } from 'react-native';

export default function App() {
  const [taskList, changeTaskList] = React.useState([]);
  const [taskStatus, changeTaskStatus] = React.useState(false);

  // const Task = () => {

  //   return (
  //     <View style={styles.taskContainer}>
  //       <Switch 
  //       value={taskStatus}/>
  //       <TextInput
  //       style={styles.newTask}
  //       value={task}
  //       placeholder="Add a new task..."/>
  //     </View>
  //   )
  // }
 
  // const addNewTask = () => {
  //   taskList.push(task)
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Take Care</Text>
      <Text style={styles.subtitleText}>Take care of yourself by first taking care of your tasks.</Text>
      <StatusBar style="auto" />
 

      {/* add new empty task */}
      <Button 
      style={styles.addNew}
      title="+"
      onPress={addNewTask}/>
      {/* {taskList.map((task) => {
          return task;
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3f3',
    justifyContent: 'flex-start',
    fontFamily: 'San Francisco',
    paddingTop: 100,
  },
  titleText: {
    color: '#da7f8f',
    fontSize: 50,
    marginLeft: 30,
  },
  subtitleText: {
    color: '#a7bbc7',
    fontSize: 25,
    marginTop: 20,
    marginLeft: 40,
  },
  taskContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 30,
  },
  newTask: {
    height: 40,
    marginLeft: 30,
    borderWidth: 1,
    width: 230,
    padding: 10,
    borderColor: '#e1e5ea'
  },
  addNew: {
    alignContent: 'flex-start',
  }
});
