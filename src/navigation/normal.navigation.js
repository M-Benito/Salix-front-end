import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "../screens/Home.js";
import Outdoors from "../screens/Outdoors.js";
import Indoors from "../screens/Indoors.js";
import Points from "../screens/Points.js";
import Tips from "../screens/Tips.js";
import Settings from "../screens/Settings.js";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: 'purple', headerShown: false }}>
            <Tab.Screen name="Home" component={MyStack} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" size={size} color={color} />), tabBarBadge: 1, }} />
            <Tab.Screen name="Points" component={Points} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="leaf" size={size} color={color} />), }} />
            <Tab.Screen name="Tips" component={Tips} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="multiplication-box" size={size} color={color} />), }} />
        </Tab.Navigator>
    );
}

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
            <HomeStackNavigator.Screen name="Outdoors" component={Outdoors} />
            <HomeStackNavigator.Screen name="Indoors" component={Indoors} />
            <HomeStackNavigator.Screen name="Settings" component={Settings} />
        </HomeStackNavigator.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}