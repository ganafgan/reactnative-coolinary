import React from 'react'
import { Image, ImageBackground, StyleSheet, View, ScrollView, Text } from 'react-native'
import { ILBgHome, ILCatJapanese, ILCatWestern, ILLogo, ILCatArabian, ILCatTraditional } from '../../assets'
import { BoxCategory } from '../../components'
import { colors, fonts } from '../../utils'

const FoodCategory = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ILBgHome} style={styles.imgBackground}>
                <Image source={ILLogo} style={styles.logo} />
                <Text style={styles.title}>Choose your food</Text>
            </ImageBackground>
            <View style={styles.content}>
                <BoxCategory img={ILCatWestern} name='American' />
                <BoxCategory img={ILCatJapanese} name='Japanese' />
                <BoxCategory img={ILCatArabian} name='Italian' />
                <BoxCategory img={ILCatTraditional} name='Asian' />
            </View>
        </View>
    )
}

export default FoodCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imgBackground: {
        height: 300,
    },
    logo: {
       marginLeft: 105,
       marginTop: 10
    },
    title: {
        marginTop: -40,
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.primary,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: -80,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingTop: 10
    }
})