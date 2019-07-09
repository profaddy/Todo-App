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
                    <Text>{cardTitle}</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        flexDirection: 'row',
        padding: 20,
        margin: 5

    },
    cardTitle: {
        flex: 3,
    },
    cardSection: {
        flex: 1,
    }
});

export default Card;