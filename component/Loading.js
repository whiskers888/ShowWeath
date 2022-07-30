import React from "react";
import { View, Text,StatusBar } from 'react-native';
import { gStyle } from '../constant/Style';

export default function Loading(){
    return (<View style={gStyle.containerLoading}>
        <StatusBar barStyle="dark-content" /> 
        <Text style = {gStyle.textLoading}>Получение данных о погоде...</Text>
    </View>)
}