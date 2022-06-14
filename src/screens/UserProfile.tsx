import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView, Touchable} from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {} from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export class UserProfile extends React.Component<any,any>{
    render(): JSX.Element{
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar
                        size={120}
                        rounded
                        source={require('../assets/images/profile.jpg')}
                    />
                    <View style={{marginLeft: 20}}>
                        <Text style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>ABC</Text>
                        <Text style={styles.caption}>@abc_xyz</Text>
                    </View>
                    </View>
                    </View>
                    <View style={styles.userInfoSection}>
                        <View style={styles.row}>
                            <Icon name="map-marker-radius" size={20}/>
                            <Text style={{marginLeft: 20}}>Kolhapur, India</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="phone" size={20}/>
                            <Text style={{marginLeft: 20}}>+91-9876543210</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="email" size={20}/>
                            <Text style={{marginLeft: 20}}>abc_xyz@gmail.com</Text>
                        </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1,
                    }]}>
                        <Text style={[styles.title,{marginBottom: 5}]}>Rs.10</Text>
                        <Text style={styles.caption}>Balance</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={[styles.title,{marginBottom: 5}]}>2</Text>
                        <Text style={styles.caption}>Bookings</Text>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="credit-card" color={'#483d8b'} size={25}/>
                        <Text style={styles.menuItemText}>Payments</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="share-outline" color={'#483d8b'} size={25}/>
                        <Text style={styles.menuItemText}>Share with friends</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="cog-outline" color={'#483d8b'} size={25}/>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="account-edit" color={'#483d8b'} size={25}/>
                        <Text
                        style={styles.menuItemText}
                        onPress={() => this.props.navigation.navigate("EditProfile")}>
                        Edit Profile
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper:{
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
        
       
    },
    infoBox:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    menuItem:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuWrapper:{
        marginTop: 10,
    },
    menuItemText:{
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    },
})