import React from "react";
import {View,Text,StyleSheet,Platform,TouchableOpacity,MenuImage,Image,StatusBar} from 'react-native';
import { DrawerActions } from 'react-navigation';
// import MenuIcon from "../../assets/MenuIcon"

const  MenuButton = (navigation) => {

console.log(navigation,'menu naigation')

    return (
    <TouchableOpacity  onPress={() => navigation.scene.descriptor.navigation.openDrawer()} >
        <Image style={{width:40,height:40}} source={require('../../assets/MenuIcon.png')}/>
            {/* <MenuImage style="styles.bar" navigation={navigation}/> */}
         </TouchableOpacity>

    );
}


export default MenuButton