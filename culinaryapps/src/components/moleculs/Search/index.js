import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import { ICSearch2 } from '../../../assets'
import { colors } from '../../../utils'

const Search = (props) => {
    return (
        <View style={styles.container}>
            <Image source={ICSearch2} />
            <TextInput placeholder={props.placeholder} style={styles.input}/>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        backgroundColor: colors.border,
        alignItems: 'center'
    },
    input: { 
        flex: 1,
        marginLeft: 5
    }
})
