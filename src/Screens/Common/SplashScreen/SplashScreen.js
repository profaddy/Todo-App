import * as React from 'react';
import {
    Text,
    View
} from 'react-native';
import { all } from "../../../utils/AsyncStorageHelpers";
class SplashScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.navigateToApp();
    }

    navigateToApp = async () => {
        const userToken = await all('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
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
                <Text style={styles.text}>Splash Screen</Text>
            </View>
        );
    }
}

export default SplashScreen;
