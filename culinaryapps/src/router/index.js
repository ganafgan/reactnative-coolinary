import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FoodCategory, Splash, Home, Restaurants, Maps, RestaurantsCategory } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='Foods' component={FoodCategory} />
            <Tab.Screen name='Restaurants' component={RestaurantsCategory} />
            <Tab.Screen name='Maps' component={Maps} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='MainApp'>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name='FoodCategory' component={FoodCategory} options={{headerShown: false}} />
            <Stack.Screen name='RestaurantsList' component={Restaurants} options={{headerShown: false}}  />
        </Stack.Navigator>
    )
}

export default Router