import React, { Component } from "react";
import {
  StyleSheet,
  View,
  AsyncStorage,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Platform,
  FlatList
} from "react-native";
import moment from "moment"
import sortBy from "lodash/sortBy"
import Card from "app/src/components/Card/Card.js";
import DateTimePickerTester from "app/src/components/Fields/DateTimePicker/DateTimePicker"



const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class TodoList extends Component {
  state = {
    tasks: [],
    todoList: [],
    text: "",
    show: false,
    selectedDate: ""
  };

    static navigationOptions = () => ({
      drawerIcon:() => {console.log("test")},
      title:"TodoList",
  })

  changeTextHandler = text => {
    this.setState({ text: text });
  };
  onConfirm = (date) => {
    this.props.navigation.navigate('DrawerOpen')

    const selectedDate = moment(date).format("Do MMM YY hh:mm A");
    const todoLength = this.state.todoList.length
    this.setState({ selectedDate }, () => {
      const addTodoData = {
        id: todoLength,
        title: this.state.text,
        info: this.state.selectedDate,
        isComplete: false
      }
      const UpdatedTodoList = [...this.state.todoList, addTodoData];
      Tasks.save(UpdatedTodoList)
      this.setState({ todoList: UpdatedTodoList, text: "", show: false })
    })

  }
  addTask = () => {
    console.log('test addtask')
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

  componentDidMount = async () => {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );
    const todoList = await Tasks.all();
    this.setState({ todoList: todoList || [] })
  }

  onCancel = () => {
    this.setState({ show: false })
  }
  onComplete = (id) => {
    console.log(id, "id");
    const { todoList } = this.state;
    const updatedTodoList = todoList.map((item) => {
      if (item.id == id) {
        console.log(item)
        return ({ ...item, isComplete: !item.isComplete })
      } else {
        return item
      }
    });
    console.log(updatedTodoList, 'updatedTodoList');
    this.setState({ todoList: updatedTodoList })
  }
  render() {
    const { todoList } = this.state;
    const sortedList = sortBy(todoList, function (o) { return new moment(o.info, "Do MMM YY hh:mm A"); });

    const test = sortedList.reverse();
    return (
      <View style={styles.container}>
        <View style={styles.InputContainer}>
          <TouchableOpacity>
            <TextInput
              style={styles.textInput}
              onChangeText={this.changeTextHandler}
              onSubmitEditing={this.addTask}
              value={this.state.text}
              placeholder="Type to Add Task ..."
              returnKeyType="done"
              returnKeyLabel="done"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.list}
          data={test}
          renderItem={({ item, index }) => (

            <View style={styles.listContainer}>
              <Card cardTitle={item.title} cardInfo={item.info} isComplete={item.isComplete} key={index} id={item.id} onComplete={() => { this.onComplete(item.id) }} />
            </View>
          )}
        />
        <View>
          <DateTimePickerTester show={this.state.show} onCancel={this.onCancel} onConfirm={this.onConfirm} mode={"datetime"} />
        </View>
      </View>
    );
  }
}

let Tasks = {

  async all() {
    try {
      const result = await AsyncStorage.getItem("TODOS")
      return JSON.parse(result)
    } catch (error) {
      console.error(error);
    }

  },
  async save(todos) {
    try {
      console.log('test')
      const result = await AsyncStorage.setItem("TODOS", JSON.stringify(todos))
      return result
    } catch (error) {
      console.error(error);
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"#F5F5F5", 
  },
  lisContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  list: {
    width: "100%",
    margin: 20
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
    margin: 10,
    borderColor: "grey",
    borderWidth: isAndroid ? 0 : 1,
    backgroundColor: "white",
    width: "100%",
    fontSize: 20,
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderColor: "blue",
  },
  InputContainer: {
    width: "100%",
    paddingRight: 20,
    marginTop: 20,
    borderRadius: 2,
  }
});
