import React from 'react';
import { 
    View, 
    Pressable, 
    StyleSheet, 
    Text 
} from 'react-native';

const PressableButton = ({ onPress, text }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={styles.pressableStyle}>
                <Text style={styles.pressableTextStyle}>{text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
    },
    pressableStyle: {
        height: 50,
        backgroundColor: '#B80000',
        textAlign: 'center',
        justifyContent: 'center',

    },
    pressableTextStyle: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default PressableButton;
