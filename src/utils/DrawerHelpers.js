import React from "react";
import {TouchableOpacity,Image} from 'react-native';

const  MenuButton = (navigation) => {
    return (
    <TouchableOpacity  onPress={() => navigation.scene.descriptor.navigation.openDrawer()} >
        <Image style={{width:40,height:40}} source={require('../assets/MenuIcon.png')}/>
         </TouchableOpacity>
    );
}

export default MenuButton