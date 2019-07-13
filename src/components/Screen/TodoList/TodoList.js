import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Platform
} from "react-native";
import moment from "moment"
import Header from "../../header.js";
import Card from "../../Card/Card.js";
import DateTimePickerTester from "../../Fields/DateTimePicker/DateTimePicker"
import { thisTypeAnnotation } from "@babel/types";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class TodoList extends Component {
  state = {
    tasks: [],
    todoList: [{ title: 'Task1', info: '12:00 AM' }, { title: "Task2", info: '10:00 PM' }, { title: "Task3", info: '5:00 AM' }],
    text: "",
    show: false,
    selectedDate: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };
  onConfirm = (date) => {
    const selectedDate = moment(date).format("Do MMM YY hh:mm A");
    this.setState({ selectedDate }, () => {
      const addTodoData = {
        title: this.state.text,
        info: this.state.selectedDate
      }
      const UpdatedTodoList = [...this.state.todoList, addTodoData];
      Tasks.save(UpdatedTodoList)
      this.setState({ todoList: UpdatedTodoList, text: "" })
    })

  }
  addTask = () => {
    this.setState({ show: true })
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  onCancel = () => {
    this.setState({ show: false })
  }

  render() {
    const { todoList } = this.state

    console.log(this.state.tasks)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
          {todoList && todoList.map((todoItem) => {
            return <Card cardTitle={todoItem.title} cardInfo={todoItem.info}><Header /></Card>
          })
          }
        </View>
        <View>
          <DateTimePickerTester show={this.state.show} onCancel={this.onCancel} onConfirm={this.onConfirm} mode={"datetime"} />
        </View>
        <View >
          <TouchableOpacity>

            <TextInput
              style={styles.textInput}
              onChangeText={this.changeTextHandler}
              onSubmitEditing={this.addTask}
              value={this.state.text}
              placeholder="Add Tasks"
              returnKeyType="done"
              returnKeyLabel="done"
            />
          </TouchableOpacity>

        </View>
      </View>

    );
  }
}

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TODOS", (err, todos) =>
      this.convertToArrayOfObject(todos, callback)
    );
  },
  save(todos) {
    AsyncStorage.setItem("TODOS", this.convertToStringWithSeparators(todos));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    // paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});
