import { FormControl, Input } from "native-base";
import React from "react";
import {Alert, ImageBackground, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Value } from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default class Vehicle extends React.Component {
    render(): React.ReactNode {
        return(
            <View style={styles.container}>
               
                <View style={{margin:20}}>
                
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={() => Alert.alert('Button pressed')}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ImageBackground
                                source={require('../assets/images/car.jpg')}
                                style={{height:120, width: 320}}
                                imageStyle={{borderRadius: 15}}>

                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                       
                    </View>
                    <View style={{alignItems:'center'}}>
                    <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                            Vehicle details
                        </Text>
                    </View>

                    <FormControl>
                        <FormControl.Label>Vehicle Number</FormControl.Label>
                        <Input
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                        keyboardType="name-phone-pad"
                        autoCorrect={false}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Color</FormControl.Label>
                        <Input
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                        autoCorrect={false}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Type</FormControl.Label>
                        <Input 
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                        autoCorrect={false}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Brand</FormControl.Label>
                        <Input 
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                        autoCorrect={false}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>License Number</FormControl.Label>
                        <Input 
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                        keyboardType="number-pad"
                        autoCorrect={false}/>
                    </FormControl>

                    <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                        <Text style={styles.ButtonTitle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    setEmail(arg0: { email: any; }): void {
        throw new Error("Method not implemented.");
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        marginTop: 10,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    
    ButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },

    
})