import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    search
                </Text>
            </View>
        )
    }
}