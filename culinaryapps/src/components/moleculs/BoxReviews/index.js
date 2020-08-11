import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const BoxReviews = ({img, name, reviews}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={img} style={styles.img} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.textContent}>
                <Text style={styles.review}>"{reviews}"</Text>
            </View>
        </View>
    )
}

export default BoxReviews

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 50/2
    },
    name: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    textContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    review: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black,
        textAlign: 'justify',
        maxWidth: 290,
        paddingBottom: 15,
    },
})
