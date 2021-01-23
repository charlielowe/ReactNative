import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
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

        <StyledButton 
          type="primary" 
          content={"Custom Order"} 
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}>
          </StyledButton>

        <StyleButton type="secondary"
          content={"Existing Inventory"} 
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}>
          </StyleButton>
  
      </View>
    );
};

export default CarItem;