import React from "react";
import { StyleSheet, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../../constants/colors'
import Svg, { Path } from 'react-native-svg';

import Home from "../screens/Home.js";
import Outdoors from "../screens/Outdoors.js";
import Indoors from "../screens/Indoors.js";
import Points from "../screens/Points.js";
import Tips from "../screens/Tips.js";
import Settings from "../screens/Settings.js";

function HomeTabs() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: color.LIGHT_GREEN, tabBarInactiveTintColor: 'white', headerShown: false, tabBarStyle: styles.tabBar, tabBarBackground: () => (<TabBakgroundSvg />) }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" size={size} color={color} />), tabBarBadge: 1 }} />
            <Tab.Screen name="Puntos" component={Points} options={{ tabBarIcon: () => (<View></View>) }} />
            <Tab.Screen name="Tips" component={Tips} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="multiplication-box" size={size} color={color} />), }} />
        </Tab.Navigator>
    );
}

function HomeStack() {

    const HomeStackNavigator = createStackNavigator();

    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeTabs} options={{ title: 'Home', headerShown: false }} />
            <HomeStackNavigator.Screen name="Outdoors" component={Outdoors} options={{ title: 'Outdoors', headerStyle: { backgroundColor: color.BACKGROUND_COLOR }, headerTintColor: color.DARK_GREEN, }} />
            <HomeStackNavigator.Screen name="Indoors" component={Indoors} options={{ title: 'Indoors', headerStyle: { backgroundColor: color.BACKGROUND_COLOR }, headerTintColor: color.DARK_GREEN, }} />
            <HomeStackNavigator.Screen name="Settings" component={Settings} options={{ title: 'Perfil y ajustes', headerStyle: { backgroundColor: color.BACKGROUND_COLOR }, headerTintColor: color.DARK_GREEN, }} />
        </HomeStackNavigator.Navigator>
    )
}

function TabBakgroundSvg() {
    return (
        <Svg width={"100%"} height={"100%"}>
            <Path d="M103.536 14H275.721V52H103.536V14Z" fill={color.BROWN} />
            <Path d="M129.42 10C129.42 4.47715 124.382 0 118.166 0H0C0 0 2.41483e-06 1.47715 2.41483e-06 7V66C2.41483e-06 66 5.03857 66 11.2539 66H347.746C353.961 66 359 66 359 66V10C359 4.47715 359 0 359 0H239.709C233.493 0 228.455 4.47715 228.455 10V23C228.455 28.5228 223.416 33 217.201 33H140.674C134.459 33 129.42 28.5228 129.42 23V10Z" fill={color.DARK_GREEN} />
        </Svg>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        backgroundColor: color.TRANSPARENT,
        borderTopColor: color.TRANSPARENT,
        height: 65,
        width: "90%",
        start: 20,
        end: 20,
        bottom: Platform.OS === 'ios' ? 24 : 4,
        paddingTop: 5,
        paddingBottom: 10,
        shadowColor: color.TRANSPARENT,
        overflow: "hidden",
        borderRadius: 10,
    },
});