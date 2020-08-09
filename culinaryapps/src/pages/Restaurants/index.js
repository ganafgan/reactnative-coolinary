import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILBgRestaurant2, ILLogo } from '../../assets'
import { BoxOtherRestaurants, BoxRestaurants, Gap, Search } from '../../components'
import { colors, fonts } from '../../utils'
import Loading from '../Loading'

const Restaurants = (props) => {

    const [dataRestaurant, setDataRestaurant] = useState(null)
    console.log(dataRestaurant)
    
    useEffect(()=>{
        getRestaurant()
    },[])
    
    const getRestaurant = () => {
        let id = props.route.params.id
        console.log(id)
        Axios({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=11052&entity_type=city&establishment_type=${id}&sort=rating&order=desc`,
            headers: {
              "user-key": "a0ec1643eb7bd6d8f4d7561fd2f289f0",
              "content-type": "application/json"
            }
          })
            .then((res)=>{
                setDataRestaurant(res.data.restaurants)
            })
        
            .catch((err)=>{
                console.log(err)
            })
    }

    const renderTopRestaurant = () => {

        let filtered = dataRestaurant.slice(0,10)

        return filtered.map((val)=>{
            return <BoxRestaurants 
                key={val.restaurant.id}
                nama={val.restaurant.name}
                rating={val.restaurant.user_rating.aggregate_rating}
                ulasan={val.restaurant.all_reviews_count}
                address={val.restaurant.location.address}
                price={val.restaurant.average_cost_for_two}
                img={{uri: val.restaurant.featured_image.length > 0 ? val.restaurant.featured_image : 'https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg'}}
            />
        })
    }

    const renderBoxOtherFoods = () => {
        let filtered = dataRestaurant.slice(10,20)

        return filtered.map((val)=>{
            return <BoxOtherRestaurants
                key={val.restaurant.id}
                nama={val.restaurant.name}
                rating={val.restaurant.user_rating.aggregate_rating}
                ulasan={val.restaurant.all_reviews_count}
                price={val.restaurant.average_cost_for_two}
                address={val.restaurant.location.address}
                img={{uri: val.restaurant.featured_image.length > 1 ? val.restaurant.featured_image : 'https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg'}}
            />
        })
    }

    if( dataRestaurant === null || dataRestaurant.length === 0){
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={ILBgRestaurant2} style={styles.img}>
                <Text style={styles.title}>Let's Find an Awsome Restaurant</Text>
            </ImageBackground>
            <View style={styles.content}>
                    <View style={styles.wrapperSection}> 
                        <Gap height={20} />
                        <Search placeholder='Search Restaurants' />
                        <Gap height={20} />
                    </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleContent}>Favorite Restaurants</Text>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.boxRecommended}>
                                <Gap width={40} />
                                {renderTopRestaurant()}
                                <Gap width={30} />
                            </View>
                        </ScrollView>
                    </View>
                    <Gap height={20} />
                    <Text style={styles.titleContent}>Other Restaurants</Text>
                    <View style={styles.otherFood}>
                        {renderBoxOtherFoods()}
                        <Gap height={20} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Restaurants

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
        maxWidth: 170,
        marginLeft: 20,
        marginTop: 30
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
        
    },
    titleContent: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.black,
        marginLeft: 20,
        marginBottom: 10
    },
    wrapperSection:{
        paddingHorizontal: 20
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
