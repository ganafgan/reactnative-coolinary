import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const BoxOtherRestaurants = ({nama, rating, ulasan, address, img}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={img} style={styles.img} />
            <View style={styles.page}>
                <Text style={styles.title}>{nama}</Text>
                <Text style={styles.rating}>{rating} ({ulasan}) ulasan</Text>
                
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BoxOtherRestaurants

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
