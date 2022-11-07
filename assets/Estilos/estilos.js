import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
       backgroundColor: '#cf6051ce',
       padding: 15,
       width: '80%',
       marginBottom: 15,
       borderRadius: 10
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        width: 120,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 5,
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto:{
        fontSize: 20,
        color:'#939393',
        fontWeight: '700'
    },

    btnVoltar: {
        width: 80,
        height: 60,
        backgroundColor: '#F000FFC2',
        marginEnd: 20,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10
    },

    input: {
        width: 150,
        borderRadius: 6,
        height: 50,
        backgroundColor: 'rgba(0,2,0,.3)',
        paddingStart: 10,
        fontSize: 20
    },
    titulo:{
      fontSize: 23,
      fontWeight: '900',
      marginBottom: 20,
      color: '#FFf'
    },
    resultado: {
        fontSize: 68,
        color:'#EEE',
        textAlign: 'center',
        marginBottom: 15
    },
    legenda: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    }
});

export default estilos;