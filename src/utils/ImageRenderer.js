import React, { Component } from "react";
import { TouchableOpacity, Image } from 'react-native';

class ImageRenderer extends Component {
    render() {
        const { onIconClick, iconName, styles } = this.props
        const path = {
            MenuIcon: require("../assets/MenuIcon.png"),
            TabOne: require("../assets/Tab.svg"),
            TabTwo: require("../assets/Tab.svg"),
        }
        return (

            <>{onIconClick ?
                <TouchableOpacity onPress={onIconClick} >
                    <Image style={styles} source={path[iconName]} />
                </TouchableOpacity>
                :
                <Image style={styles} source={path[iconName]} />
            }
            </>
        );
    }
}

export default ImageRenderer;