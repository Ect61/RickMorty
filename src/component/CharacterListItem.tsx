import React from "react";
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    View,
    Text,
} from "react-native";


// TypeScript interface to define the structure of the props
interface CharacterData {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: {
        name: string;
    };
}

interface CharacterListItemProps {
    characterData: CharacterData;
}
const CharacterListItem: React.FC<CharacterListItemProps> = ({ characterData }) => {

    const renderIsAlive = () => {
        if (characterData.status.toLowerCase() === 'alive') {
            return (
                <View className={"bg-green-500 rounded-[5px] w-[6.5px] h-[6.5px]"} />
            );
        } if (characterData.status.toLowerCase() === 'dead') {
            return (
                <View className={"bg-red rounded-[5px] w-[6.5px] h-[6.5px]"} />
            );
        }
        return (
            <View className={"bg-gray-900 rounded-[5px] w-[6.5px] h-[6.5px]"} />
        );
    };

    return (
        <View className={"flex-1 bg-gray-700 justify-center items-center rounded-5px mb-5 w-full h-full text-gray-700"}
        >
            <Pressable>
                <View className={"bg-gray-700 w-[80vw] rounded-[8px]"}                >
                    <Image className={'w-24 h-24'} source={{ uri: characterData.image }} />
                    <View className={'absolute fixed left-32'}>
                        <Text className={'font-bold text-white text-lg'}>{characterData.name}</Text>
                        <Text className={'bg-gray-700 text-white px-1 text-sm pb-1.5'}>
                            {renderIsAlive()} {characterData.status} - {characterData.species} - {characterData.gender}
                        </Text>
                        <Text className={'bg-gray-700 text-gray-900  text-sm'}>Last known location</Text>
                        <Text className={'bg-gray-700 text-white  text-sm'}>{characterData.location.name}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};


export default CharacterListItem;
