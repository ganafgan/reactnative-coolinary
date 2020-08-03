import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { ILLogo } from '../../../assets'


const BoxRestaurants = ({nama, rating, ulasan, address, img}) => {
    return (
        <TouchableOpacity>
            <ImageBackground source={img} style={styles.img}>
                <View>
                    <Text style={styles.title}>{nama}</Text>
                    <Text style={styles.rating}>{rating} ({ulasan} ulasan)</Text>
                </View>
                <View>
                    <Text style={styles.address}>{address}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default BoxRestaurants

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
    },
    rating: {
        fontSize: 13,
        fontFamily: fonts.primary[700],
        color: colors.black
    },  
    address: {
        fontSize: 13,
        fontFamily: fonts.primary[700],
        color: colors.black
    }
})
