import React from 'react'; 
import { SafeAreaView, ImageBackground, View, TextInput, Text } from 'react-native';
import KmMilha from '../../assets/km_milha.jpg'

export default function ConevrsorDeKmParaMilha(){
    return(
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={KmMilha} blurRadius={15}>
                <View>
                    <Text>Conversor de Km/Milha</Text>
                    <TextInput placeholder='Insira o valor em Km:'/>
                </View>

                <View>
                    <Text>Rseultado</Text>
                    <Text>Milhas</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}