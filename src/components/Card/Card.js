import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native'

class Card extends Component {
    render() {
        const { cardTitle, cardInfo, strike, onStrike } = this.props
        const strikeStyles = strike === true ? styles.strikeLine : {}
        return (
            <TouchableWithoutFeedback onPress={onStrike}>
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
        borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        margin: 5,
        backgroundColor:"#FEFEFE",

    },
    cardFont:{
        fontSize:17,
        fontFamily:"Verdana"
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
        opacity:0.5
    }
});

export default Card;