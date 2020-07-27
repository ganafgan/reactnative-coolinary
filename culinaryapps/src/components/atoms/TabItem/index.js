import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ICFoodsActive, ICFoodsInactive, ICMapsActive, ICMapsInactive, ICRestaurantsActive, ICRestaurantsInactive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Foods'){
            return active ? <ICFoodsActive /> : <ICFoodsInactive />
        }
        if(title === 'Restaurants'){
            return active ? <ICRestaurantsActive /> : <ICRestaurantsInactive />
        }
        if(title === 'Maps'){
            return active ? <ICMapsActive /> : <ICMapsInactive />
        }
        return <ICFoodsActive />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        fontSize: 14,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop: 5
    })
})
