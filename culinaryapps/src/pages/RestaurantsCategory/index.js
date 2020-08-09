import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILBgHome, ILLogo, restaurantsJson } from '../../assets'
import { Gap, ItemCategory } from '../../components'
import { colors, fonts } from '../../utils'

const RestaurantsCategory = ({navigation}) => {

    const renderCategory = () => {

       return restaurantsJson.data.map((val)=>{
            return <ItemCategory 
                key={val.id}
                name={val.name}
                img={{uri: val.img}}
                onPress={() => navigation.navigate('RestaurantsList', {id: val.id_restaurant})}
            />
        })
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={ILBgHome} style={styles.imgBackground}>
                <Image source={ILLogo} style={styles.logo} />
                <Text style={styles.title}>Choose your Favourite</Text>
            </ImageBackground>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Gap height={20} />
                {renderCategory()}
                <Gap height={20} />
            </ScrollView>
        </View>
    )
}

export default RestaurantsCategory

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