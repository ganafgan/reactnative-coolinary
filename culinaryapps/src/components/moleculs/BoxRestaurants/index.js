import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'


const BoxRestaurants = ({nama, address, img}) => {
    return (
        <TouchableOpacity>
            <ImageBackground source={img} style={styles.img}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>{nama}</Text>
                    </View>
                    <View>
                        <Text style={styles.address}>{address}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default BoxRestaurants

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        justifyContent: 'space-between',
        padding: 20
    },
    img: {
        height: 350,
        width: 200,
        marginRight: 10,
        borderRadius: 20,
        overflow: 'hidden',
        opacity: 0.8
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color:  colors.white
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.white
    }
})
