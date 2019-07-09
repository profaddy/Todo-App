import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }

    onSubmit = () => {
        const { username, password } = this.state
        if (username === "admin" && password === "admin") {
            this.props.navigation.navigate("TodoList");
        };
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={{paddingBottom:50}}>
                    <Text style={styles.greeting}>Welcome Back !</Text>
                </View>
                <View>
                    <TextInput
                        placeholder={"Username"}
                        style={styles.textInput}
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder={"Password"}
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>

                <View style={styles.button}>
                    <Button onPress={this.onSubmit} title="Login"></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        width: "100%",
        margin: 10,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#4D96F3',
        width: 200
    },
    button: {
        padding: 20,
    },
    greeting: {
        fontSize: 30,
        color: "#4D96F3"
    }
})

export default LoginScreen;
