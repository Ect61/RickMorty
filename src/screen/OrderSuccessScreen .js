import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    Text,
} from 'react-native';
import PressableButton from '../component/PressableButton';

function OrderSuccessScreen({ navigation, route }) {

    const { brandData, username, productData } = route.params

    const MainMenu = () => {
        navigation.navigate('Menu')
    }

    return (
        <SafeAreaView style={styles.background} >
            <View style={styles.container}>
                <Image style={styles.imageCss} source={require('../icon/check_box.png')} />
                <Text style={styles.textStyle}>Sayın {username},</Text>
                <Text style={styles.textStyle}>Markası {brandData.title}  Model {productData.title} motorsikletinizin siparişi tarafımıza ulaşmıştır. İlgili birimimiz en kısa sürede dönüş yapacaktır.</Text>
            </View>
            <PressableButton
                onPress={MainMenu}
                text={"Ana Menüye Dön"} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -100,
    },
    imageCss: {
        height: 131,
        width: 131,
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
})

export default OrderSuccessScreen;
