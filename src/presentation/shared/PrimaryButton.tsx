import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../theme/theme';

interface props{
    onPress: () => void;
    label: string;
}

export const PrimaryButton = ( {onPress, label}: props) => {
    const navigation = useNavigation();
    return (

        //esto lo hacemos para el navigation

        <Pressable
            onPress={() => onPress()}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}

export default PrimaryButton
