import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { save } from "app/src/utils/AsyncStorageHelpers"
import styles from "./styles"
class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }

    onSubmit = async () => {
        const { username, password } = this.state
        if (username === "admin" && password === "admin") {
            const userDetails = { username, password }
            await save('userToken', userDetails);
            this.props.navigation.navigate("App");
        };
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={{ paddingBottom: 50 }}>
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

export default LoginScreen;
