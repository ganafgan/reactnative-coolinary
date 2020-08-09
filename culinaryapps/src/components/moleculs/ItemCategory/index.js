import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ItemRestaurantsCategory = ({name, img, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
           <ImageBackground style={styles.img} source={img}>
               <View style={styles.container}>
                    <Text style={styles.title}>{name}</Text>
               </View>
           </ImageBackground>
        </TouchableOpacity>
    )
}

export default ItemRestaurantsCategory

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        justifyContent: 'center'
    },
    img: {
        height: 200,
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 10
       
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.border
    }
})
