import React, { useState, useEffect } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View, Button } from 'react-native'
import { ILBg3Home } from '../../assets'
import { Gap, Search, BoxFoods, BoxOtherFoods } from '../../components'
import { colors, fonts } from '../../utils'
import Axios from 'axios'
import Loading from '../Loading'

const Home = () => { 

    const [dataFoods, setDataFoods] = useState(null)
    console.log(dataFoods)

    useEffect(()=>{
        getDataFoods()
    },[])

    const getDataFoods = () => {
        const key = '7cd05d32ed7b44118b76b9626ed5b6bb'
        Axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}`)
        .then((res)=>{
            console.log(res)
            setDataFoods(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const renderDataFoods = () => {
        let filtered = dataFoods.slice(0,5)

        return filtered.map((val)=>{
            return <BoxFoods 
                    key={val.id}
                    img={{uri : val.image}}
                    nama={val.title}
                />
        })
    }

    const renderOtherFoods = () => {
        let filtered = dataFoods.slice(5,10)

        return filtered.map((val)=>{
            return <BoxOtherFoods 
                    key={val.id}
                    img={{uri: val.image}}
                    nama={val.title}
                />
        })
    }
    if ( dataFoods === null ){
        return <Loading />
    }
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
                    <Text style={styles.titleContent}>Favorite Foods</Text>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.boxRecommended}>
                                <Gap width={40} />
                                {renderDataFoods()}
                                <Gap width={30} />
                            </View>
                        </ScrollView>
                    </View>
                    <Gap height={20} />
                    <Text style={styles.titleContent}>Other Foods</Text>
                    <View style={styles.otherFood}>
                            {renderOtherFoods()}
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
        color: colors.white,
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
    wrapperSection:{
        paddingHorizontal: 20
    },
    titleContent: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.black,
        marginLeft: 20,
        marginBottom: 10
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
