import React,{Component} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import api from './src/Services/Api';
import Especialidade from './src/Pages/Especialidades';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            especialidades: []
        }
    
    }

    async componentDidMount(){
        const response = await api.get('/especialidades');
        this.setState({
            especialidades: response.data
        });
    }

    render(){
        return(
            <SafeAreaView style={StyleSheet.container}>
                <FlatList>
                data={this.state.filmes}
                keyExtrator={item => item.id}
                renderItem{({item}) => <Especialidade data={item} />}
                </FlatList>
            </SafeAreaView>
        )
    }
}
    
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray'
    }
});
