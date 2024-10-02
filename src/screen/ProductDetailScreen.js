import React, { useLayoutEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';
import PressableButton from '../component/PressableButton';

function ProductDetailScreen({ navigation, route }) {
    const { productData, brandData } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: brandData.title + " " + productData.title
        });
    }, [navigation]);

    const OnPressOrder = () => {
        navigation.navigate('Order', { brandData, productData })
    }
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <View style={styles.scrollViewStyle}>
                    <View style={styles.container} >
                        <View style={styles.line}></View>
                        <View style={styles.imageIconView}>
                            <Image style={styles.imageStyle} source={{ uri: productData.image }} />
                            <Image style={styles.itemIcon} source={{ uri: brandData.logo }} />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <Text style={styles.titleStyle}>{brandData.title + " " + productData.title}</Text>
                    <View style={styles.line2}></View>
                    <Text style={styles.price}>Size özel {Intl.NumberFormat('tr-TR').format(productData.price)} TL</Text>
                    <Text style={styles.standartTitle}>Maksimum Güç</Text>
                    <Text style={styles.technicalData}>{productData.engine_power} HP</Text>
                    <Text style={styles.standartTitle}>Motor Hacmi</Text>
                    <Text style={styles.technicalData}>{productData.engine_capacity} cc</Text>
                    <Text style={styles.standartTitle}>Yakıt Tüketimi</Text>
                    <Text style={styles.technicalData}>{productData.fuel_consumption} L / 100 km</Text>
                    <Text style={styles.standartTitle}>Yakıt Kapasitesi</Text>
                    <Text style={styles.technicalData}>{productData.fuel_capacity} L</Text>
                    <Text style={styles.standartTitle}>Fren Sistemi</Text>
                    <Text style={styles.technicalData}>ABS</Text>
                    <View style={styles.boldLine}></View>
                    <Text style={styles.titleStyle}>Hakkında</Text>
                    <View style={styles.line2}></View>
                    <Text style={styles.aboutStyle}>{productData.about}</Text>
                    <View style={styles.boldLine}></View>
                </View>
            </ScrollView>
            <PressableButton onPress={OnPressOrder} text={"Sipariş Ver"} />
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    scrollViewStyle: {
        paddingBottom: 50,
    },
    aboutStyle: {
        fontSize: 12,
        color: '#666666',
        marginLeft: 10,
        fontWeight: 'regular',
        width: Dimensions.get('window').width - 20,
        marginRight: 10,
        paddingBottom: 10,
    },
    boldLine: {
        backgroundColor: '#2D2D2D',
        width: '100%',
        height: 25,
    },
    technicalData: {
        fontSize: 14,
        color: '#B80000',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    standartTitle: {
        fontSize: 10,
        color: '#666666',
        marginLeft: 10,
        top: 5,
        fontWeight: 'regular',
        width: Dimensions.get('window').width,
        marginRight: 10,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginLeft: 10,
    },
    background: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    imageStyle: {
        width: Dimensions.get('window').width - 40,
        height: (Dimensions.get('window').width - 40) * (2 / 3),
        backgroundColor: '#FFFFFF',
    },
    imageIconView: {
        width: Dimensions.get('window').width - 40,
        height: (Dimensions.get('window').width - 40) * (2 / 3),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        left: 20,
        right: 20,
        top: 30,
        bottom: 30,
    },
    container: {
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').width) * (3 / 4),
    },
    itemIcon: {
        position: 'absolute',
        height: 80,
        width: 80,
        bottom: 0,
        left: 0
    },
    line: {
        backgroundColor: '#2D2D2D',
        height: 1,
        marginVertical: 0,
        borderWidth: 2,
        width: Dimensions.get('window').width,
    },
    line2: {
        backgroundColor: '#2D2D2D',
        width: Dimensions.get('window').width - 20,
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 14,
        marginTop: 10,
    },
    price: {
        backgroundColor: '#2D2D2D',
        color: '#FFFFFF',
        height: 44,
        width: Dimensions.get('window').width - 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
    },
});

export default ProductDetailScreen;
