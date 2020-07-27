import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { ILCatWestern } from '../../../assets'
import { colors, fonts } from '../../../utils'

const BoxCategory = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={props.img} style={styles.img}/>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default BoxCategory

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        width: 170,
        height: 270,
        margin: 10,
        borderRadius: 20,
        backgroundColor: colors.border
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        opacity: 0.6
    },
    text: {
        marginTop: -130,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white
    }
})
