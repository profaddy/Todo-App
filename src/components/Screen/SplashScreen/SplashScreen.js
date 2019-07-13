import * as React  from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
class SplashScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }

    componentDidMount = () => {
        console.log(this.props);
        this.props.navigation.navigate("Login")
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // padding: 20,
        width: "100%",
        // margin: 10,
        backgroundColor:'orange'
    },
    text: {
        color:"white"
    },
})

export default SplashScreen;
