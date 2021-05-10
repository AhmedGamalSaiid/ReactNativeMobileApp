import React from 'react'
import Posts from '../Screens/Posts'
import {createStackNavigator} from '@react-navigation/stack'
import PostCard from '../Components/PostCard'
import Home from '../Screens/Home'

export default function HomeStack() {
    const { Navigator,Screen } = createStackNavigator()
    return (
        <Navigator >
            <Screen
                name="home" 
                component={Home}
                options={{
                    title: 'Ahmed Gamal Social App',
                    headerStyle: {
                      backgroundColor: "#094456",
                    },
                    headerTintColor: '#6fda44',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      alignItems:'center',
                    },
                  }}
                
            />
            <Screen name="post-list" component={Posts} />
            <Screen name="post-det"  component={PostCard} />
        </Navigator>
    )
}
