import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.white,
        marginVertical: 10
    }
})
