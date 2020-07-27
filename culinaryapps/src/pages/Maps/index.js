import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils'
import WebView from 'react-native-webview'

const Maps = () => {
    return (
        <WebView source={{uri: 'https://www.google.co.id/maps'}} />
    )
}

export default Maps

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
