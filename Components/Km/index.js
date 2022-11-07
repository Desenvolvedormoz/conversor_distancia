import React, { useState } from 'react'; 
import { SafeAreaView, ImageBackground, View, TextInput, Text, Pressable } from 'react-native';
import estilos from '../../assets/Estilos/estilos';
import KmMilha from '../../assets/km_milha.jpg'

export default function ConevrsorDeKmParaMilha(){

    const [km, setKm] = useState()

    const ConversorKmParaMilha = () =>{
         let resultado;
         const milha = km * 0.62137;
         const milhaAproximado = milha.toFixed(2);

         if(km !== undefined){
            resultado = setKm(milhaAproximado)
         }
         return resultado
         
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground style={estilos.backgroundImage} source={KmMilha} blurRadius={15}>
            <View style={estilos.container}>
            <Text style={estilos.titulo}>Conversor de Km/Milha</Text>
            <View style={estilos.containerInput}>
             <Pressable onPress={()=>{ConversorKmParaMilha(km)}} style={estilos.btn}>
            <Text style={estilos.texto}>Converter</Text>
            </Pressable>
        <TextInput keyboardType='numeric' style={estilos.input} value={km} placeholder='Insira Km:' onChangeText={value => setKm(value) }/>
        </View>
    </View>

    <View style={estilos.container}>
    <Text style={estilos.resultado}>{km}</Text>
    <Text style={estilos.legenda}>Milhas</Text> 
    </View>
    </ImageBackground>
    </SafeAreaView>
    )
}