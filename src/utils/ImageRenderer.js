// import React from "react";
// import {TouchableOpacity,Image} from 'react-native';


// class ImageRenderer extends React.Component
// const  ImageRenderer = ({onIconClick,iconName,styles}) => {
//     console.log(onIconClick,iconName,styles)
//     // const path = `../assets/MenuIcon.png`
//     const path = {
//         MenuIcon:require("../assets/MenuIcon.png"),
//         TabOne:require("../assets/Tab.svg"),
//         TabTwo:require("../assets/Tab.svg"),
//     }
    
//     return ( 
//     <TouchableOpacity  onPress={onIconClick} >
//         <Image style={{width:40,height:40}} source={path[iconName]} />
//     </TouchableOpacity>
//     );
// }

// export default ImageRenderer;


import React, { Component } from "react";
import {TouchableOpacity,Image} from 'react-native';



class ImageRenderer extends Component {
    render() {
        const {onIconClick,iconName,styles} = this.props
        const path = {
                    MenuIcon:require("../assets/MenuIcon.png"),
                    TabOne:require("../assets/Tab.svg"),
                    TabTwo:require("../assets/Tab.svg"),
                }
        return (
            <>
            <TouchableOpacity onPress={onIconClick} >
                <Image style={{ width: 40, height: 40 }} source={path[iconName]} />
            </TouchableOpacity>
            </>
        );
    }
}

export default ImageRenderer;