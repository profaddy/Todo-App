import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native'

class Card extends Component {
    render() {
        const { cardTitle, cardInfo, isComplete, onComplete } = this.props
        const strikeStyles = isComplete === true ? styles.strikeLine : {}
        return (
            <TouchableWithoutFeedback onPress={onComplete}>
                <View style={[styles.container, strikeStyles]} >
                    <View style={styles.cardTitle}>
                        <Text style={[styles.cardFont, strikeStyles]}>{cardTitle}</Text>
                    </View>
                    <View style={styles.cardSection}>
                        <Text style={styles.cardFont}>{cardInfo}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 2,
        borderWidth: 0,
        shadowColor: 'red',
        shadowOpacity: 20,
        shadowRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        margin: 10,
        backgroundColor:"#EBEBEB",

    },
    cardFont:{
        fontSize:20,
        fontFamily:"Verdana",
        fontWeight:"bold"
    },
    cardTitle: {
        flex: 2,
    },
    cardSection: {
        flex: 1,
    },
    strikeLine:{
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        opacity:0.7
    }
});

export default Card;