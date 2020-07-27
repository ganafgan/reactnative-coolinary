import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors, fonts } from '../../utils'
import { ILLogo } from '../../assets'

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image source={ILLogo} style={styles.img} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 220,
        width: 220
    }
})
