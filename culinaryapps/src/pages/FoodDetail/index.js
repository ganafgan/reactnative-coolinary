import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { BoxIngredient, Gap } from '../../components'
import { colors, fonts } from '../../utils'
import Loading from '../Loading'

const FoodDetail = (props) => {

    const [dataIngredient, setDataIngredient] = useState(null)
    const [dataCook, setDataCook] = useState(null)
    console.log(dataCook)

    useEffect(()=>{
        getIngredient()
    },[])

    const id = props.route.params.id
    const image = props.route.params.image
    const title = props.route.params.title

    const getIngredient = () => {
        const key = `7cd05d32ed7b44118b76b9626ed5b6bb`
        Axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
        .then((res)=>{
            console.log(res)
            setDataIngredient(res.data.extendedIngredients)
            setDataCook(res.data.analyzedInstructions[0].steps)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const renderIngredient = () => {

        return dataIngredient.map((val, index)=>{
            return <BoxIngredient 
            key={index}
                weight={val.measures.us.amount +' '+ val.measures.us.unitLong}
                nama={val.name}
                img={{uri: `https://spoonacular.com/cdn/ingredients_100x100/${val.image}`}}
            />
        })
    }

    const renderCook = () => {

        return dataCook.map((val, index)=>{
            return (
                <View style={styles.wrapperCook} key={index}>
                    <Text style={styles.titleCook}>Step {val.number}</Text>
                    <Text style={styles.subtitleCook}>- {val.step}</Text>
                </View>
            )
        })
    }
    if (dataIngredient === null || dataCook === null){
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapperImage}>
                    <Gap height={20} />
                    <Image source={{uri: image}} style={styles.img} />
                    <Gap height={20} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Gap height={20} />
                <Text style={styles.subtitle}>Ingredient</Text>
                <Gap height={10} />
                <View style={styles.ingredient}>
                    {renderIngredient()}
                </View>
                <View style={{marginTop: 20}} />
                <Text style={styles.subtitle}>How to Cook</Text>
                <Gap height={10} />
                {renderCook()}             
            </ScrollView>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: colors.white,
         paddingHorizontal: 20
     },
     wrapperImage: {
         alignItems: 'center',
         justifyContent: 'center',
     },
     img: {
         height: 200,
         width: '100%',
         borderRadius: 20
     },
     content: {
         flex: 1,
         marginTop: -400,
         backgroundColor: colors.white,
         paddingHorizontal: 20,
     },
     title: {
         fontSize: 18,
         fontFamily: fonts.primary[600],
         color: colors.black,
         marginLeft: 5,
         textAlign: 'center'
     },
     subtitle: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.black,
        marginLeft: 5,
        textAlign: 'left'
    },
     ingredient: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-around',
         flexWrap: 'wrap',
         backgroundColor: colors.border,
         paddingHorizontal: 10,
         paddingTop: 20,
         borderRadius: 10
     },
     wrapperCook: {
         backgroundColor: colors.border,
         padding: 10,
         borderRadius: 10,
         marginBottom: 10
     },
     titleCook: {
         fontSize: 16,
         fontFamily: fonts.primary[600],
         color: colors.black
     },
     subtitleCook: {
         fontSize: 14,
         fontFamily: fonts.primary[600],
         color: colors.black,
     }
})
