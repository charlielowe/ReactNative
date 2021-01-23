import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import StyleButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) =>{

    const { name, tagline, taglineCTA, image } = props.car;


    return(
        <View style={styles.carContainer}>

        <ImageBackground 
          source={image}
          style={styles.image}
        />
  
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {' '}
            <Text style={styles.taglineCTA} onPress={() => {console.warn("Touchless Delivery")}}>
              {taglineCTA}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
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
        
  
      </View>
    );
};

export default CarItem;