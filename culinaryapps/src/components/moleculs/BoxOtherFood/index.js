import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILCatTraditional } from '../../../assets'
import { fonts } from '../../../utils'

const BoxOtherFood = () => {
    return (
        <View style={styles.container}>
            <Image source={ILCatTraditional} style={styles.img} />
            <View style={styles.page}>
                <Text style={styles.title}>Sate</Text>
                <Text style={styles.subtitle}>Makanan khas Bandung</Text>
            </View>
        </View>
    )
}

export default BoxOtherFood

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
        fontSize: 16,
        fontFamily: fonts.primary[600],
        marginBottom: 10
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fonts.primary[600]
    }
})
