import React from "react";
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    View
} from "react-native";

const BrandListItem = ({ navigation, brandData }) => {

    const onPressProductDetail = () => {
        navigation.navigate("Product", { brandData });
    }

    return (
        <View style={styles.background}>
            <Pressable onPress={onPressProductDetail}>
                <View style={styles.viewContainer}>
                    <Image style={styles.itemImage} source={{ uri: brandData.slider }} />
                    <Image style={styles.itemIcon} source={{ uri: brandData.logo }} />
                </View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemIcon: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImage: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.5,
        opacity: 0.5,
        backgroundColor: 'black'
    },
    viewContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default BrandListItem;
