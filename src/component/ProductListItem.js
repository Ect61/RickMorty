import React from "react";
import { 
    Image, 
    Pressable, 
    StyleSheet, 
    Text, 
    View, 
    Dimensions 
} from "react-native";


const ProductListItem = ({ navigation, productData, brandData }) => {

    return (
        <Pressable onPress={() => navigation.navigate('ProductDetail', { productData, brandData })}>
            <View style={styles.ViewStyle}>
                {/* sol Taraf */}
                <View style={styles.leftContainer}>
                    <Image style={styles.imageStyle} source={{ uri: productData.image }} />
                    <Image style={styles.iconStyle} source={{ uri: brandData.logo }} />
                </View>
                {/* Sağ Taraf */}
                <View style={styles.rightContainer}>
                    <Text style={styles.brandModel}>{brandData.title} {productData.title}</Text>
                    <View style={styles.line}></View>
                    <View style={styles.ozellikContainerStyle}>
                        <View style={styles.ozellikStyle}>
                            <Text style={styles.standartTitle}>Maksimum Güç</Text>
                            <Text style={styles.standartDescription}>{productData.engine_power} HP</Text>
                        </View>
                        <View style={styles.rightOzellikStyle}>
                            <Text style={[styles.standartTitle, { textAlign: 'right' }]}>Motor Hacmi</Text>
                            <Text style={[styles.standartDescription, { textAlign: 'right' }]}>{productData.engine_capacity} CC</Text>
                        </View>
                    </View>
                    <Text style={styles.priceStyle}>Size özel {Intl.NumberFormat('tr-TR').format(productData.price)} TL</Text>
                </View>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({

    ViewStyle: {
        width: Dimensions.get('window').width,
        height: 150,
        backgroundColor: 'white',
        marginBottom: 5,
    },
    leftContainer: {
        height: 150,
        width: 150,
        position: 'absolute',
        left: 5,
    },
    imageStyle: {
        width: 150,
        height: 100,
        position: 'absolute',
        top: 25,
    },
    iconStyle: {
        height: 40,
        width: 40,
        position: 'absolute',
        bottom: 5,
        left: 5,
    },

    rightContainer: {
        position: 'absolute',
        left: 160,
        width: Dimensions.get('window').width - 170,
        top: 20,
    },
    brandModel: {
        fontSize: 16,
        color: '#000000',
    },
    line: {
        marginVertical: 7,
        width: '100%',
        backgroundColor: '#666666',
        height: 1,
    },
    ozellikContainerStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    ozellikStyle: {
        flex: .5,
    },
    rightOzellikStyle: {
        flex: .5,
    },
    standartTitle: {
        fontSize: 10,
        color: '#666666',
    },
    standartDescription: {
        color: '#B80000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    titleColor: {
        color: '#666666',
        fontSize: 10,
    },
    priceStyle: {
        width: '100%',
        backgroundColor: '#2D2D2D',
        color: 'white',
        textAlign: 'center',
        height: 31,
        textAlignVertical: 'center',
        marginTop: 10,
        fontSize: 11,
    },

});

export default ProductListItem;
