import React from "react";
import { View, Text } from 'react-native';
import { gStyle } from '../constant/Style';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions } from "../constant/weatherOptions";

export default function Weather({temp,condition}){
    return (
            <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style = {gStyle.containerWeather}>
                <View style = {gStyle.halfContainer}>     
                    <MaterialCommunityIcons name = {weatherOptions[condition].iconName} size ={96} color = "white"/>
                    <Text style = {gStyle.weatherTemp}>{temp}°</Text>
                </View>

                <View style = {{...gStyle.halfContainer, ...gStyle.textContainer}}>
                    <Text style = {gStyle.title}> {weatherOptions[condition].title} </Text>
                    <Text style = {gStyle.subtitle}> {weatherOptions[condition].subtitle} </Text>
                </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Dust","Smoke","Haze","Mist","Clear","Clouds"]).isRequired
}