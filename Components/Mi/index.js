import React from 'react'; 
import { SafeAreaView, ImageBackground, View, TextInput, Text } from 'react-native';
import MilhaKm from '../../assets/milha_km.jpg'

export default function ConevrsorDeMilhaParaKm(){
    return(
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={MilhaKm} blurRadius={15}>
                <View>
                    <Text>Conversor de Milha/Km</Text>
                    <TextInput placeholder='Insira o valor em Km:'/>
                </View>

                <View>
                    <Text>Rseultado</Text>
                    <Text>Kms</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}