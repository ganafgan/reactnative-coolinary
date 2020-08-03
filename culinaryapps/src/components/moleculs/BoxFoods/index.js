import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { ILLogo } from '../../../assets'


const BoxFoods = ({nama, img}) => {
    return (
        <TouchableOpacity>
            <ImageBackground source={img} style={styles.img}>
                <Text style={styles.title}>{nama}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default BoxFoods

const styles = StyleSheet.create({
    img: {
        height: 350,
        width: 200,
        padding: 20,
        marginRight: 10,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        opacity: 0.8
     
    },
    title: {
        fontFamily: fonts.primary[800],
        fontSize: 16,
        color:  colors.black
    }
})
