import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) =>{

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? 'black' : '#FFFFFF';
    const fontColor = type === 'primary' ? 'white' : 'black';

    return(
    <View style={styles.container}>
        <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() => onPress() }>
            <Text style={[styles.text, , {color: fontColor}]}>{content}</Text>
        </Pressable>
    </View>
    );
};

export default StyledButton;

