import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILBgRestaurant2 } from '../../assets'
import { BoxOtherFood, BoxRecommended, Gap, Search } from '../../components'
import { colors, fonts } from '../../utils'

const Restaurants = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ILBgRestaurant2} style={styles.img}>
                <Text style={styles.title}>Let's Find an Awsome Restaurant</Text>
            </ImageBackground>
            <View style={styles.content}>
                    <View style={styles.wrapperSection}> 
                        <Gap height={20} />
                        <Search placeholder='Search Restaurants' />
                        <Gap height={20} />
                    </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleContent}>Favorite Restaurants</Text>
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
                    <Gap height={20} />
                    <Text style={styles.titleContent}>Other Restaurants</Text>
                    <View style={styles.otherFood}>
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

export default Restaurants

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
        color: colors.white,
        fontFamily: fonts.primary[600],
        maxWidth: 170,
        marginLeft: 20,
        marginTop: 30
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
        
    },
    titleContent: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.black,
        marginLeft: 20,
        marginBottom: 10
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
