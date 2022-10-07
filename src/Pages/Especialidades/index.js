import React,{Component} from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity} from 'react-native';

export default class Especialidade extends Componet{
    render(){
        return(
            <View>
                <Text style={styles.nomeEspecialidade}>{this.props.data.nome}</Text>
                <TouchableOpacity onPress={() => alert(this.prop.data.nome)}>
                    <Image style={styles.imagemEspecialidade} source={{uri: this.props.data.foto}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container:{

     },
     nomeEspecialidade:{
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
     },
     imagemEspecialidade:{
        width: 200,
        height: 250,
        borderRadius: 30,
        alignSelf: 'center'
     }
    }
);
