import React from "react";
import { StyleSheet, Text, View, Switch, TextInput, Button } from 'react-native';

export default function List ({taskList, taskStatus}) {
    if (taskList.length > 0) {
        taskList.map((task) => {
        return (
            
        <View style={styles.taskContainer}>
            <Switch 
            value={taskStatus}/>
            <TextInput
            style={styles.newTask}
            value={task}
            placeholder="Add a new task..."/>
        </View>
        )
        })
    } else {
        return (
        <View style={styles.taskContainer}>
            <Switch 
            value={taskStatus}/>
            <TextInput
            style={styles.newTask}
            placeholder="Add a new task..."/>
        </View>
        )
    }


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

 