import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StyleButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) =>{
    return(
        <View style={styles.carContainer}>

        <ImageBackground 
          source={require('../../assets/habbo.png')}
          style={styles.image}
        />
  
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at £60,000</Text>
        </View>
  
        <StyleButton></StyleButton>
  
      </View>
    );
};

export default CarItem;