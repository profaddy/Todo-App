import React from "react";
import {TouchableOpacity,Image} from 'react-native';
import ImageRenderer from "./ImageRenderer"

const  MenuButton = (navigation) => {
    const onIconClick = () => navigation.scene.descriptor.navigation.openDrawer();
    const styles = {width:40,height:40}
    return (
        <ImageRenderer onIconClick = {onIconClick} iconName={"MenuIcon"}  styles ={styles} />
    );
}

export default MenuButton;