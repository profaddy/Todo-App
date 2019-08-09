import React from "react";
import {TouchableOpacity,Image} from 'react-native';
import ImageRenderer from "./ImageRenderer"



const  MenuButton = (navigation) => {
    const onIconClick = () => {navigation.scene.descriptor.navigation.openDrawer();}
    const styles = {width:40,height:40}
    return (
        <ImageRenderer onIconClick = {onIconClick} iconName={"MenuIcon"} iconPath ={"MenuIcon.png"} styles ={styles} iconType={"png"}/>
    // <TouchableOpacity  onPress={() => navigation.scene.descriptor.navigation.openDrawer()} >
    //     <Image style={{width:40,height:40}} source={require('../assets/MenuIcon.png')}/>
    //      </TouchableOpacity>
    );
}

export default MenuButton;