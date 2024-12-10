import React, { useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    FlatList,
    ScrollView,
    ActivityIndicator,
    Pressable,
    Modal,
} from 'react-native';
import APIs from '../constants/APIs';
import CharacterListItem from '../component/CharacterListItem';

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: {
        name: string;
    };
}

interface MenuScreenProps {
    navigation: any;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
    const [char, setChar] = useState<Character[]>([]);
    const [filteredChar, setFilteredChar] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            fetchCharacters();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const fetchCharacters = () => {
        fetch(APIs.Character, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((response) => {
                setChar(response.results);
                setFilteredChar(response.results); // Başlangıçta tüm karakterler gösteriliyor
            });
    };

    const onPressFilter = () => {
        setModalVisible(true);
    };

    const applyFilter = () => {
        let filteredData = char;

        if (filterText) {
            filteredData = filteredData.filter((character) =>
                character.name.toLowerCase().includes(filterText.toLowerCase())
            );
        }

        if (selectedStatus) {
            filteredData = filteredData.filter(
                (character) => character.status.toLowerCase() === selectedStatus.toLowerCase()
            );
        }

        if (selectedSpecies) {
            filteredData = filteredData.filter(
                (character) => character.species.toLowerCase() === selectedSpecies.toLowerCase()
            );
        }

        if (selectedGender) {
            filteredData = filteredData.filter(
                (character) => character.gender.toLowerCase() === selectedGender.toLowerCase()
            );
        }

        setFilteredChar(filteredData);
        setModalVisible(false);
    };

    const handleFilterSelection = (type: string, value: string) => {
        if (type === 'status') {
            setSelectedStatus(selectedStatus === value ? '' : value);
        } else if (type === 'species') {
            setSelectedSpecies(selectedSpecies === value ? '' : value);
        } else if (type === 'gender') {
            setSelectedGender(selectedGender === value ? '' : value);
        }
    };

    const getFilterStyle = (type: string, value: string) => {
        const selected = type === 'status' ? selectedStatus :
            type === 'species' ? selectedSpecies :
                selectedGender;

        return selected === value
            ? "bg-gray-700 text-white px-4 py-2 my-1 rounded-md items-center"
            : "bg-white text-black px-4 py-2 my-1 rounded-md items-center";
    };


    if (loading) {
        return (
            <View className={'bg-gray-900 flex-1 items-center'}>
                <View>
                    <Image source={require('../icon/logwh1.png')} />
                    <Text className={'font-bold font-sm-lh text-white text-center bg-gray-900'}>Welcome</Text>
                </View>
                <ActivityIndicator className={'m-[25px]  bg-gray-900'} size="large" color="white" />
            </View>
        );
    }

    const renderChar = ({ item: characterData }: { item: Character }) => (
        <CharacterListItem characterData={characterData} />
    );

    //


    return (
        <SafeAreaView className={'bg-gray-900 flex-1 items-center'}>
            <Image className={'min-w-28 min-h-28 '} source={require('../icon/logwh1.png')} />
            <View className={'flex-row items-center justify-between  w-4/5'}>
                <View className={'flex-1 items-cenmter'}>
                    <Text className={'text-red mb-7 text-lg font-bold text-center'}>Characters</Text>
                </View>
                <Pressable onPress={onPressFilter}>
                    <Text className={'text-red mb-7 text-lg font-xs font-bold'}>Filter</Text>
                </Pressable>
            </View>
            <ScrollView>
                <FlatList
                    data={filteredChar} // Filtrelenmiş veriler
                    renderItem={renderChar}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={1}
                />
            </ScrollView>

            {/* Modal */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View className={'flex-1 justify-center	 items-center bg-gray-900'}>
                    <View className={'w-4/5 p-5 rounded-e-xl items-center bg-gray-900'}>
                        <Text className={'text-sm-lh font-bold text-red mb-5'}>Filter Characters</Text>

                        {/* Status Filters */}
                        <View className={'mb-4 w-full'}>
                            <Text className={'font-bold text-white bg-gray-900'}>Status</Text>
                            <Pressable
                                className={getFilterStyle('status', 'alive')}
                                onPress={() => handleFilterSelection('status', 'alive')}
                            >
                                <Text className={'text-gray-900 font-bold'}>Alive</Text>
                            </Pressable>
                            <Pressable
                                className={getFilterStyle('status', 'dead')}
                                onPress={() => handleFilterSelection('status', 'dead')}
                            >
                                <Text className={'text-gray-900 font-bold'}>Dead</Text>
                            </Pressable>
                            <Pressable
                                className={getFilterStyle('status', 'unknown')}
                                onPress={() => handleFilterSelection('status', 'unknown')}
                            >
                                <Text className={'text-gray-900 font-bold'}>Unknown</Text>
                            </Pressable>
                        </View>

                        {/* Species Filters */}
                        <View className={'mb-4 w-full'}>
                            <Text className={'font-bold text-white bg-gray-900'}>Species</Text>
                            <Pressable
                                className={getFilterStyle('species', 'human')}
                                onPress={() => handleFilterSelection('species', 'human')}
                            >
                                <Text className={'text-gray-900 font-bold'}>Human</Text>
                            </Pressable>
                            <Pressable
                                className={getFilterStyle('species', 'alien')}
                                onPress={() => handleFilterSelection('species', 'alien')}
                            >
                                <Text className={'text-gray-900 font-bold'}>Alien</Text>
                            </Pressable>
                        </View>

                        {/* Gender Filters */}
                        <View className={'mb-4 w-full'}>
                            <Text className={'font-bold text-white bg-gray-900'}>Gender</Text>
                            <Pressable
                                className={getFilterStyle('gender', 'female')}
                                onPress={() => handleFilterSelection('gender', 'female')}
                            >
                                <Text className={'text-gray-900 font-bold'}>Female</Text>
                            </Pressable>
                            <Pressable
                                className={getFilterStyle('gender', 'male')}
                                onPress={() => handleFilterSelection('gender', 'male')}
                            >
                                <Text className={'text-gray-900 font-bold'}>Male</Text>
                            </Pressable>
                        </View>

                        <Pressable onPress={applyFilter}>
                            <Text className={'text-white font-bold mb-5 mt-7'}>
                                Apply Filter
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text className={'text-white font-bold px-4 mb-5 mt-7'}>
                                Close
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default MenuScreen;
