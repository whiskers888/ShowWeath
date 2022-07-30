
import {Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './component/Loading';
import React from 'react';
import axios from 'axios';
import Weather from './component/Weather';


const API_KEY = '8eb838d1c786354b8090cda1d2b9ca38';
export default class extends React.Component {
  
  state = {
    isLoading: true
  }

  getWeather = async (latitude,longitude) => {
    try{
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`)
    this.setState({
      isLoading: false, 
      temp: temp, 
      condition: weather[0].main});
    console.log(data)
    componentWillUnmount()
    
  } catch(error){
      console.log(error)
    } 

  }
  

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      // TODO: Сделать запрос к API
      // Key: 94f8369bfe5e97cbf01cba0f27250f84
    } catch (error) {
      Alert.alert('Невозможно определить местоположение', "Очень грустно :(")
    }
     
  }

  componentDidMount(){
    this.getLocation()
  }

  render(){
    const {isLoading,temp, condition} = this.state
    return (
      isLoading ? <Loading/> : <Weather  temp = {Math.round(temp)} condition = {condition}/>
    );
  }
}