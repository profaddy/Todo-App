import React, { Component } from "react";
import { TouchableOpacity, Image } from 'react-native';

class ImageRenderer extends Component {
    render() {
        const { onIconClick, iconName, styles } = this.props
        const path = {
            MenuIcon: require("app/src/assets/MenuIcon.png"),
            TabOne: require("app/src/assets/Tab.png"),
            TabTwo: require("app/src/assets/Tab.png"),
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

// const ImageRenderer = () => <Image source={  }> </Image>

export default ImageRenderer;