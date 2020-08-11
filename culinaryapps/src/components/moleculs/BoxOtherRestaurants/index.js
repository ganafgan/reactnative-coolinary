import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { ICArrowForward } from '../../../assets'

const BoxOtherRestaurants = ({nama, address, img, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={img} style={styles.img} />
            <View style={styles.content}>
                <Text style={styles.title}>{nama}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            <ICArrowForward />
        </TouchableOpacity>
    )
}

export default BoxOtherRestaurants

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: colors.border,
    },
    img: {
        height: 75,
        width: 75,
        borderRadius: 20
    },
    content: {
        flex: 1,
        marginLeft: 10,
        marginHorizontal: 20
        
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color:  colors.text.primary
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
    
})
