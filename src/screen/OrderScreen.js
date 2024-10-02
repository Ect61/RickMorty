import React, { useState } from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    View, 
    Text, 
    Alert, 
    ScrollView, 
    KeyboardAvoidingView, 
    Dimensions 
} from 'react-native';
import UserTextInPut from '../component/UserTextInPut';
import APIs from '../constants/APIs';
import PressableButton from '../component/PressableButton';

function OrderScreen({ navigation, route }) {

    const { brandData, productData } = route.params;

    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const onPressOrder = () => {
        if (!username || !phoneNumber || !address) {
            Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
            return;
        }

        const customerData = {
            name: username,
            phone: phoneNumber,
            address: address,
            product_id: productData.id,
        };

        try {
            fetch(APIs.Order, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(customerData),
            })
                .then((res) => {
                    return res.json();
                })
                .then((response) => {
                    if (response.code === 0) {
                        setUsername('');
                        setPhoneNumber('');
                        setAddress('');
                        navigation.navigate('OrderSucces', { brandData, username, productData });
                    } else {
                        Alert.alert('Başarısız', `Kayıt yapılamadı. Mesaj: ${response.message}`);
                    }
                })
        } catch (error) {
            Alert.alert('Hata', 'Beklenmeyen bir hata oluştu.');
        }
    };

    return (
        <SafeAreaView style={styles.background}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={150} // Ekranı 150 piksel yukarı kaydırır
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{}}>
                    <View style={styles.container}>
                        <Text style={styles.standardTitle}>Sipariş Verilen Model:</Text>
                        <Text style={styles.itemBox}>{brandData.title} {productData.title}</Text>
                        <Text style={styles.standardTitle}>Ad Soyad</Text>
                        <UserTextInPut
                            placeholder={"Ad Soyad"}
                            keyboardType={"default"}
                            maxLength={30}
                            value={username}
                            onChangeText={setUsername} />
                        <Text style={styles.standardTitle}>Telefon Numarası</Text>
                        <UserTextInPut
                            placeholder={"Telefon"}
                            keyboardType={"numeric"}
                            maxLength={11}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber} />
                        <Text style={styles.standardTitle}>Adres</Text>
                        <UserTextInPut
                            placeholder={"Adres"}
                            keyboardType={"default"}
                            multiline={true}
                            maxLength={350}
                            value={address}
                            onChangeText={setAddress} />
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>
            <PressableButton
                onPress={onPressOrder}
                text={"Sipariş Ver"} />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#2D2D2D',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingVertical: 5,
    },
    standardTitle: {
        fontSize: 16,
        color: '#B80000',
        fontWeight: 'bold',
        marginVertical: 5,
        marginLeft: 15,
        marginTop: 20,
    },
    itemBox: {
        width: Dimensions.get('window').width - 20,
        height: 50,
        backgroundColor: 'white',
        color: '#0F0F0F',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    pressableTextStyle: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default OrderScreen;
