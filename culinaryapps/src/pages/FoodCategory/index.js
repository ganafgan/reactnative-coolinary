import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { foodsJson, ILBgHome, ILLogo } from '../../assets'
import { Gap, ItemCategory } from '../../components'
import { colors, fonts } from '../../utils'

const FoodCategory = (props) => {

    const renderCategory = () => {
        
       return foodsJson.data.map((val)=>{
            return <ItemCategory 
                key={val.id}
                img={{uri: val.img}}
                name={val.name}
                onPress={()=> props.navigation.navigate('FoodsList', {cat: val.cat})}
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