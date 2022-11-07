import React, { useState } from 'react'; 
import { SafeAreaView, ImageBackground, View, TextInput, Text, Pressable } from 'react-native';
import estilos from '../../assets/Estilos/estilos';
import MilhaKm from '../../assets/milha_km.jpg'

export default function ConevrsorDeMilhaParaKm(){
    const [milhas, setMilhas ] = useState();

    function ConverterMilhaParaKm(){
        let resultado;
        const km = milhas * 1.609344;
        const total = km.toFixed(2);
        if(total !== Number ){
           resultado = setMilhas(total)
        }
        return resultado
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground style={estilos.backgroundImage} source={MilhaKm} blurRadius={15}>

                <View style={estilos.container}>
                <Text style={estilos.titulo}>Conversor de Milha/Km</Text>

                <View style={estilos.containerInput}>
                <Pressable style={estilos.btn} onPress={() =>{ConverterMilhaParaKm()}}>
                    <Text style={estilos.texto}>Converter</Text>
                </Pressable>
                    
                <TextInput value={milhas} style={estilos.input} keyboardType='numeric' onChangeText={value => setMilhas(value)} placeholder='Insira Milhas:'/>
                </View>
                </View>

                <View style={estilos.container}>
                    <Text style={estilos.resultado}>{milhas}</Text>
                    <Text style={estilos.legenda}>Kms</Text>
                   
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}