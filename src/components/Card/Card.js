import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

class Card extends Component {
    render() {
        const { cardTitle, cardInfo } = this.props
        return (
            <View style={[styles.container]}>
                <View style={styles.cardTitle}>
                    <Text style={styles.cardFont}>{cardTitle}</Text>
                </View>
                <View style={styles.cardSection}>
                    <Text>{cardInfo}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 2,
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        margin: 5,
        maxHeight: 40,
        backgroundColor:"#FEFEFE"

    },
    cardFont:{
        fontSize:20
    },
    cardTitle: {
        flex: 3,
    },
    cardSection: {
        flex: 1,
    }
});

export default Card;