import React, {
    useLayoutEffect,
    useEffect,
    useState
} from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    Text,
    FlatList,
    ScrollView,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import APIs from '../constants/APIs';
import ProductListItem from '../component/ProductListItem';
import PressableButton from '../component/PressableButton';

function ProductScreen({ navigation, route }) {

    const [productListData, setProductListData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { brandData } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: brandData.title + " " + "Marka Motorlar"
        });
    }, [navigation]);

    useEffect(() => {
        fetch(APIs.Product + brandData.id, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                setLoading(false);
                //alert(JSON.stringify(response))
                if (response.code === 0) {
                    setProductListData(response.data.products);
                }
            });
    }, []);


    const renderProductList = ({ item: productData }) => (
        <ProductListItem
            productData={productData}
            navigation={navigation}
            brandData={brandData}
        />
    );

    const renderList = () => {
        if (loading) {
            return (
                <ActivityIndicator style={styles.activityIndicatorStyle} size="large" color="red" />
            );
        }

        if (productListData.length > 0) {
            return (
                <FlatList
                    data={productListData}
                    renderItem={renderProductList}
                    keyExtractor={item => item.id.toString()}
                    numColumns={1}
                />
            );
        }

        return (
            <Text style={styles.noProductText}>Bu markaya ait ürün bulunamadı.</Text>
        );
    }

    return (
        <SafeAreaView style={styles.background} >
            <View >
                <Image style={styles.imageCss} source={{ uri: brandData.slider }} />
                <Text style={styles.descriptionStyle}>{brandData.description}</Text>
                <Image style={styles.iconCss} source={{ uri: brandData.logo }} />
            </View>
            <ScrollView>
                <View style={styles.listStyle}>
                    {renderList()}
                </View>
            </ScrollView>
            <PressableButton
                onPress={() => navigation.navigate('Menu')}
                text={"Geri"} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    noProductText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#2D2D2D',
        color: 'white',
        textAlignVertical: 'top',
        padding: 100,
    },
    descriptionStyle: {
        color: 'white',
        position: 'absolute',
        top: 80,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        left: 30,
        right: 30,
    },
    listStyle: {
        marginTop: 5,
        paddingBottom: 50,
    },
    background: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
    },
    imageCss: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.5,
        opacity: 0.5,
        backgroundColor: 'black'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 57
    },
    iconCss: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        position: 'absolute',
        top: 20,
        alignSelf: 'center',
    },

})

export default ProductScreen;
