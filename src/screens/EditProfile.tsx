import React from "react";
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { View } from "native-base";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";



export default class EditProfile extends React.Component {

    bs = React.createRef();
    fall = new Animated.Value(1);

    renderInner = () => (
        <View style={styles.panel}>
            <View style={{alignItems:'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose your profile picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>

        </View>
    );

  

    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}>

                </View>

            </View>

        </View>
    );

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <BottomSheet 
                    snapPoints={[330, 0]}
                    ref = {this.bs}
                    initialSnap = {1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                />
                <Animated.View style={{margin:20,
                    opacity:Animated.add(0.1, Animated.multiply(this.fall, 1.0)),}}>
                
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.bs.current.snapTo(0)}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ImageBackground
                                source={require('../assets/images/profile.jpg')}
                                style={{height:100, width: 100}}
                                imageStyle={{borderRadius: 15}}>

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Icon name="camera" size={35} color="white" style={{
                                            opacity: 0.7,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            //borderWidth: 1,
                                            //borderRadius: 5,
                                            paddingLeft: 3,
                                            paddingTop: 3
                                        }}   />
                                    </View>

                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                            ABC
                        </Text>
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" size={20}/>
                        <TextInput
                            placeholder="First Name"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" size={20}/>
                        <TextInput
                            placeholder="Last Name"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.action}>
                        <Feather name="phone" size={20}/>
                        <TextInput
                            placeholder="Phone"
                            placeholderTextColor='#666666'
                            keyboardType="number-pad"
                            style={styles.textInput}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" size={20}/>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='#666666'
                            keyboardType="email-address"
                            style={styles.textInput}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="map-marker-outline" size={20}/>
                        <TextInput
                            placeholder="Address"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autoCorrect={false}
                        />
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                        <Text style={styles.panelButtonTitle}>Submit</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        )
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
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
        shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    action:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
})