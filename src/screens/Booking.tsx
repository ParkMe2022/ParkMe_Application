import React from "react";
import {StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import MapViewDirections from 'react-native-maps-directions';
import {ScrollView} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";


const {height,width} = Dimensions.get('screen');
const parkings=[
    {
        id: 1,
        title: "Parking 1",
        prices: 50,
        rating: 4.2,
        spots: 20,
        free: 10,
        distance: "4km",
        coordinate: {
            latitude: 16.22251158934288,
            longitude:  74.34888901657736,
          },
          description: `Description about this parking lot
      Open year 2018
      Secure with CCTV`
    },
    {
        id: 2,
        title: "Parking 2",
        prices: 20,
        rating: 3.1,
        spots: 25,
        free: 20,
        distance: "3km",
        coordinate: {
            latitude: 16.223212100737214, 
            longitude: 74.35035886716138
          },
          description: `Description about this parking lot
      Open year 2014
      Secure with CCTV`
    },
    {
        id: 3,
        title: "Parking 3",
        prices: 30,
        rating: 3.9,
        spots: 15,
        free: 5,
        distance: "5km",
        coordinate: {
            latitude: 16.223541752295812, 
            longitude: 74.3480736250125
          },
          description: `Description about this parking lot
      Open year 2019
      Secure with CCTV`
    },
    
]

export default class Booking extends React.Component {

    static api_key = "AIzaSyDW3piPlNBuG0rlvUII7U1lYIEEKn3etko";
    state = { 
        hours: {},
        active: null,
        activeModal: null,
    }

    componentDidMount(){
        const hours = {};

        this.setState({hours})
    }

    renderHeader(){
        return(
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Detected Location</Text>
                <Text style={styles.headerLocation}>Gadhinglaj, Kolhapur</Text>
            </View>
        )
    }

    renderParking(item: { id?: number; title: string; prices: any; rating: any; spots: any; coordinate?: { latitude: number; longitude: number; }; description?: string; }){
        const {hours} = this.state;
        return(
            <TouchableWithoutFeedback key={'parking-${item.id}'} onPress={() => this.setState({active: item.id})}>
                <View style={[styles.parking, styles.shadow]}>
                    <View style={{flex: 1, flexDirection:'column'}}>
                        <Text>x {item.spots} {item.title}</Text>
                        <View style={{width:100, flexShrink:4, borderRadius:6, borderColor:'grey', borderWidth:0.5, padding:4}}>
                            <Text>01:00 hour</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buy} onPress={()=> this.setState({activeModal: item})}>
                        <View>
                            <View style={{flex:1, justifyContent:"space-between", alignItems:'center', marginHorizontal:20}}>   
                                <Text style={{fontSize: 20, color:'white'}}>
                                    Rs.{item.prices}
                                </Text>
                                
                                <Text style={{fontSize: 20, color:'white'}}>
                                <Icon name="star" size={22} color="white" />
                                    {item.rating}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderParkings(){
        return(
            
            <ScrollView 
            pagingEnabled
            scrollEnabled
            horizontal 
            //centerContent
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={styles.parkings}>
                {parkings.map(parking => this.renderParking(parking))}
            </ScrollView>
        )
    }

    renderModal(){
        const { activeModal,hours } = this.state;

        if(!activeModal) return null;

        return(
            <Modal 
                isVisible={true}
                useNativeDriver
                onBackButtonPress={() => this.setState({activeModal:null})}
                onBackdropPress={() => this.setState({activeModal: null})}
                style={styles.modalContainer}
                onSwipeComplete={() => this.setState({activeModal: null})}
            >
                <View style={styles.modal}>
                    <View>
                        <Text>{activeModal['title']}</Text>
                    </View>
                    <View>
                        <Text>{activeModal['description']}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text>{activeModal['prices']}</Text>
                        <Text>{activeModal['rating']}</Text>
                        <Text>{activeModal['distance']}</Text>
                        <Text>{activeModal['free']}/{activeModal['spots']}</Text>
                    </View>
                    <View>
                        <Text>Choose your Booking Period:</Text>
                    </View>
                </View>
                
            </Modal>
        )
    }

    render(): React.ReactNode {
        return(
           <View style={styles.container}>
               {this.renderHeader()}
               <MapView
                    //customMapStyle={mapStyle}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    zoomEnabled={true}
                    initialRegion={{
                        latitude: 16.226987610147155,
                        longitude:  74.35174293786616,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,

                    }}
                   
                >
                    {parkings.map(parking => (
                        <Marker 
                        key={`marker-$(parking.id)`}
                        coordinate={parking.coordinate}>
                            <TouchableWithoutFeedback onPress={() => this.setState({active: parking.id})}>
                                <View style={[
                                    styles.marker, 
                                    styles.shadow, 
                                    this.state.active === parking.id?styles.active: null]}>
                                    <Text style={{color: "royalblue", fontWeight: "bold"}}>Rs.{parking.prices}</Text>
                                    <Text style={{color: "#7D818A"}}>({parking.free}/{parking.spots})</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </Marker>
                    ))}
                    
                </MapView>
                {this.renderParkings()}
                {this.renderModal()}
           </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        //...StyleSheet.absoluteFillObject,
        flex: 1,
        backgroundColor: "#fff",
        
    },
    map: {
        //...StyleSheet.absoluteFillObject,
        //width: 100,
        //height: 100,
        flex: 3,
    },
    header: {
        flex: 0.3,
        justifyContent: 'center',
        //alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 6,
        
       
    },
    headerTitle:{
        color: "#7D818A",
    },
    headerLocation:{
        fontWeight: "500",
        fontSize: 18,
        color: "black",
        paddingVertical: 2,

    },
    parkings: {
        flex: 1,
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        paddingBottom: 24,
    },
    parking: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 12,
        marginHorizontal: 24,
        width: width-(24*2)
    },
    buy:{
        flex: 1,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "royalblue",
        borderRadius: 6,
        
    },
    marker:{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderWidth: 1.6,
        borderColor: "white",
    },
    shadow:{
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.588,
        shadowRadius: 16,
    },
    active:{
        borderColor: "royalblue",
       
    },
    modal:{
        backgroundColor: "white",
        height: height * 0.75,
        padding: 24,
    },
    modalContainer:{
        margin: 0,
        justifyContent: "flex-end",
    },
})
