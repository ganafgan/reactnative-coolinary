import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILBgHome, ILLogo, ILCaffee, ILBakery, ILFoodCourt, ILCasualDining, ILFineDining } from '../../assets'
import { Gap, ItemRestaurantsCategory } from '../../components'
import { colors, fonts } from '../../utils'

const FoodCategory = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ILBgHome} style={styles.imgBackground}>
                <Image source={ILLogo} style={styles.logo} />
                <Text style={styles.title}>Choose your Favourite</Text>
            </ImageBackground>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Gap height={20} />
                <ItemRestaurantsCategory img={ILCaffee} nama='Caffee' onPress={() => navigation.navigate('RestaurantsList', {id: 1})}/>
                <ItemRestaurantsCategory img={ILBakery} nama='Bakery' onPress={() => navigation.navigate('RestaurantsList', {id: 31})} />
                <ItemRestaurantsCategory img={ILFoodCourt} nama='Food Court' onPress={() => navigation.navigate('RestaurantsList', {id: 20})} />
                <ItemRestaurantsCategory img={ILCasualDining} nama='Casual Dining' onPress={() => navigation.navigate('RestaurantsList', {id: 16})} />
                <ItemRestaurantsCategory img={ILFineDining} nama='Fine Dining' onPress={() => navigation.navigate('RestaurantsList', {id: 18})} />
                <Gap height={20} />
            </ScrollView>
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
        marginTop: -60,
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.primary,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        marginTop: -100,
        borderRadius: 20,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    }
})