import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';

const UserTextInPut = ({ placeholder, keyboardType, multiline, maxLength, value, onChangeText }) => {
    return (
        <View style={styles.viewStyle}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                keyboardType={keyboardType}
                multiline={multiline}
                maxLength={maxLength}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={'#0F0F0F'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        color: 'black',
        width: Dimensions.get('window').width - 20,
        marginLeft: 10,
        marginRight: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'regular'
    },
    viewStyle: {
        marginBottom: 10,
    },
});

export default UserTextInPut;
