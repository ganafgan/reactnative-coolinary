import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { ILBakery, ILCaffee } from '../../../assets'

const BoxIngredient = ({nama, img}) => {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img} />
            <Text style={styles.title}>{nama}</Text>
        </View>
    )
}

export default BoxIngredient

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        marginBottom: 40,
        backgroundColor: colors.white,
        borderRadius: 10
    },
    img: {
        height: 60,
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.black,
        marginTop: 10
    }
})
