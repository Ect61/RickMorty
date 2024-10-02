import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    FlatList,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import APIs from '../constants/APIs';
import BrandListItem from '../component/BrandListItem';

function MenuScreen({ navigation }) {

    const [markalar, setMarkalar] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
            fetchBrands();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const fetchBrands = () => {
        fetch(APIs.Brand, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.code === 0) {
                    setMarkalar(response.data.brands);
                }
            });
    };

    const renderMarkalar = ({ item: brandData }) => (
        <BrandListItem
            navigation={navigation}
            brandData={brandData}
        />
    );
    if (loading) {
        return (
            <View style={styles.background}>
                <View>
                    <Image
                        source={require('../icon/logwh1.png')}
                    />
                    <Text style={styles.standartTextStyle}>Hoş Geldiniz</Text>
                </View>
                <ActivityIndicator style={styles.activityIndicatorStyle} size="large" color="red" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.background}>
            <Image
                style={styles.logoStyle}
                source={require('../icon/logwh1.png')} />
            <View style={styles.viewTextStyle}>
                <Text style={styles.textStyle}>Markalarımız</Text>
            </View>
            <ScrollView>
                <FlatList
                    data={markalar}
                    renderItem={renderMarkalar}
                    keyExtractor={item => item.id.toString()}
                    numColumns={1} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
    },
    logoStyle: {
        width: 112,
        height: 112,
    },
    textStyle: {
        color: '#b80000',
        backgroundColor: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        height: 50,
        textAlignVertical: 'center'
    },
    viewTextStyle: {
        alignSelf: 'stretch',
        height: 50,
        textAlignVertical: 'center'
    },
    activityIndicatorStyle: {
        marginTop: 57,
        backgroundColor: '#2D2D2D'
    },
    standartTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#2D2D2D'
    },
})

export default MenuScreen;
