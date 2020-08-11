import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const BoxIngredient = ({nama, img, weight}) => {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img} />
            <Text style={styles.title}>{nama}</Text>
            <Text style={styles.weight}>{weight}</Text>
        </View>
    )
}

export default BoxIngredient

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        marginBottom: 50,
        backgroundColor: colors.border,
        borderRadius: 10,
       
    },
    img: {
        height: 60,
        width: '100%',
        borderRadius: 10
    },
    weight: {
        textAlign: 'center',
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black,
    }
})
