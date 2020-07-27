import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const BoxRecommended = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sate Ayam</Text>
        </View>
    )
}

export default BoxRecommended

const styles = StyleSheet.create({
    container: {
        height: 350,
        width: 200,
        padding: 20,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: colors.primary
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color:  colors.white
    }
})
