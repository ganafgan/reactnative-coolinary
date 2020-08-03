import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const BoxOtherFoods = ({nama, img}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={img} style={styles.img} />
            <View style={styles.page}>
                <Text style={styles.title}>{nama}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BoxOtherFoods

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    img: {
        height: 80,
        width: 80,
        borderRadius: 20
    },
    page: {
        flex: 1,
        marginLeft: 10,
        
    },
    title: {
        fontFamily: fonts.primary[800],
        fontSize: 16,
        color:  colors.black
    }
})
