import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
        
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      title: {
        fontSize: 40,
        fontWeight: '700',
        color: 'black',
        },

      taglineCTA: {
        textDecorationLine: 'underline',
      },
      
      subtitle: {
        color: 'black',
        fontSize: 16,
    
      },
    
      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttonsContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
      },

    

});

export default styles;