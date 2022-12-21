import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>
                Home
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Ajuste')}
            >
                <Text>
                    Ajuste
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;