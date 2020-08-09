import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import { colors, fonts } from '../../utils'
import { ILAmerica } from '../../assets'
import { Gap, BoxIngredient } from '../../components'
import Axios from 'axios'
import Loading from '../Loading'

const FoodDetail = (props) => {

    const [dataIngredient, setDataIngredient] = useState(null)

    useEffect(()=>{
        getIngredient()
    },[])

    const id = props.route.params.id
    const image = props.route.params.image

    const getIngredient = () => {
        const key = `7cd05d32ed7b44118b76b9626ed5b6bb`
        Axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
        .then((res)=>{
            console.log(res)
            setDataIngredient(res.data.extendedIngredients)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const renderIngredient = () => {

        return dataIngredient.map((val, index)=>{
            return <BoxIngredient 
            key={val.id}
                nama={val.name}
                img={{uri: `https://spoonacular.com/cdn/ingredients_100x100/${val.image}`}}
            />
        })
    }
    if (dataIngredient === null){
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: image}} style={styles.img}>
            </ImageBackground>
            <View style={styles.content}>
                <Gap height={20} />
                <Text style={styles.title}>Ingredients</Text>
                <Gap height={10} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.ingredient}>
                        {renderIngredient()}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: colors.white
     },
     img: {
         height: 300,
         width: '100%'
     },
     content: {
         flex: 1,
         backgroundColor: colors.white,
         marginTop: -50,
         borderRadius: 20,
         paddingHorizontal: 20,
     },
     title: {
         fontSize: 16,
         fontFamily: fonts.primary[600],
         color: colors.black,
         marginLeft: 5
     },
     ingredient: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-around',
         flexWrap: 'wrap',
     }
})
