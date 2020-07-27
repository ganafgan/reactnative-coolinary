import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import { ILBg3Home } from '../../assets'
import { colors, fonts } from '../../utils'
import { Search, Gap, BoxRecommended, BoxOtherFood } from '../../components'
import Axios from 'axios'

const Home = () => { 
    return (
        <View style={styles.container}>
            <ImageBackground source={ILBg3Home} style={styles.img}>
                <Text style={styles.title}>Let's Make Awesome Foods</Text>
            </ImageBackground>
            <View style={styles.content}>
                    <View style={styles.wrapperSection}> 
                        <Gap height={20} />
                        <Search placeholder='Search Foods' />
                        <Gap height={20} />
                    </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.boxRecommended}>
                                <Gap width={40} />
                                <BoxRecommended />
                                <BoxRecommended />
                                <BoxRecommended />
                                <BoxRecommended />
                                <BoxRecommended />
                                <Gap width={30} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.otherFood}>
                        <Gap height={20} />
                        <BoxOtherFood />
                        <BoxOtherFood />
                        <BoxOtherFood />
                        <BoxOtherFood />
                        <BoxOtherFood />
                        <Gap height={20} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    img: {
        height: 400
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        maxWidth: 150,
        marginLeft: 110,
        marginTop: 30
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
        
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        maxWidth: 150,
        marginLeft: 110,
        marginTop: 30
    },
    wrapperSection:{
        paddingHorizontal: 20
    },
    wrapperScroll: {
        marginHorizontal: -20
    },
    boxRecommended: {
        flexDirection: 'row'
    },
    otherFood: {
        paddingHorizontal: 20
    }
})
