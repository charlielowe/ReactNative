import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) =>{
    return(
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => {console.warn("Hey There")}}>
            <Text style={styles.text}>Custm rder</Text>
        </Pressable>
    </View>
    );
};

export default StyledButton;

