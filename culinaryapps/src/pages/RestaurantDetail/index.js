import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { BoxRating, BoxReviews, Button, Gap } from '../../components'
import { colors, fonts } from '../../utils'
import Loading from '../Loading'

const RestaurantDetail = (props) => {

    
    const [restaurantDetail, setResdaturantDetail] = useState(null)
    const [dataReviews, setDataReviews] = useState(null)
    console.log(dataReviews)

    useEffect(()=>{
        getDetail()
        getReviews()
    },[])

    const id = props.route.params.id
    console.log(id)

    const getDetail = () => {
        Axios({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
            headers: {
              "user-key": "a0ec1643eb7bd6d8f4d7561fd2f289f0",
              "content-type": "application/json"
            }
          })
            .then((res)=>{
                console.log(res)
                setResdaturantDetail(res.data)
            })
        
            .catch((err)=>{
                console.log(err)
            })
    }

    const getReviews = () => {

        Axios({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${id}&count=3`,
            headers: {
              "user-key": "a0ec1643eb7bd6d8f4d7561fd2f289f0",
              "content-type": "application/json"
            }
          })
            .then((res)=>{
                console.log(res)
                setDataReviews(res.data.user_reviews)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const renderReviews = () => {

        return dataReviews.map((val, index)=>{
            return <BoxReviews 
                key={index}
                img={{uri: val.review.user.profile_image}}
                name={val.review.user.name.split(' ').slice(0,1)}
                reviews={
                    val.review.review_text.length > 0
                    ? val.review.review_text
                    : val.review.rating_text
                }
            />
        })
    }

    if (restaurantDetail === null || dataReviews === null){
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{uri: restaurantDetail.featured_image}} style={styles.img} />
                <Gap height={10} />
                <Text style={styles.title}>{restaurantDetail.name}</Text>
                <Gap height={10} />
                <View style={styles.boxRating}>
                    <BoxRating 
                    title1='Rating'
                    title2='Reviews'
                    title3='Price for 2'
                    rating={restaurantDetail.user_rating.aggregate_rating} 
                    ulasan={restaurantDetail.all_reviews_count}
                    price={restaurantDetail.average_cost_for_two}
                    />
                </View>
                <Gap height={20} />
                <View style={styles.content}>
                    <View>
                        <Text style={styles.titletContent}>Name</Text>
                        <Text style={styles.titletContent}>Address</Text>
                        <Text style={styles.titletContent}>Menu</Text>
                        <Text style={styles.titletContent}>Contact</Text>
                        <Text style={styles.titletContent}>Open</Text>
                    </View>
                    <View>
                        <Text style={styles.textContent}>: {restaurantDetail.name}</Text>
                        <Text style={styles.textContent}>: {restaurantDetail.location.address.split(',').slice(0,2)}</Text>
                        <Text style={styles.textContent}>: {restaurantDetail.cuisines}</Text>
                        <Text style={styles.textContent}>: {restaurantDetail.phone_numbers}</Text>
                        <Text style={styles.textContent}>: {restaurantDetail.timings}</Text>
                    </View>
                </View>
                <Gap height={20} />
                <View style={styles.reviewContent}>
                    <Text style={styles.titletContent}>Reviews</Text>
                    {renderReviews()}
                </View>
                <Gap height={20} />
                <Button title='Buka Maps' onPress={()=> props.navigation.navigate('Maps')} />
            </ScrollView>
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20
    },
    img: {
        height: 200,
        width: '100%',
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    boxRating: {
        paddingHorizontal: 70
    },
    content: {
        backgroundColor: colors.border,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
    },
    titletContent: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black,
        textAlign: 'left',
        marginBottom: 10,
        marginRight: 20,
    },
    textContent: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black,
        textAlign: 'left',
        marginBottom: 10,
        maxWidth: 280
    },
    reviewContent: {
        backgroundColor: colors.border,
        borderRadius: 10,
        padding: 10,
    }
})
