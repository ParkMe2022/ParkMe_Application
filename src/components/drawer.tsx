import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeNavigators } from "./navigators";
import { UserProfile } from "../screens/UserProfile";
import ContactUs from "../screens/ContactUs";
import Booking from "../screens/Booking";
import Vehicle from "../screens/Vehicle";
import Statistics from "../screens/Statistics";
import ParkingSlot from "../screens/ParkingSlot";

const Drawer = createDrawerNavigator();


export default class DrawerNavigator extends React.Component<any> {

    constructor(props: any) {
        super(props);
        this.state = {
          isLoggedIn: true
        }
      }  
      
    render(): React.ReactNode  {
        return(

            <Drawer.Navigator initialRouteName="Dashboard" >
                
                <Drawer.Screen key={0} name="Dashboard" component={HomeNavigators} />
                <Drawer.Screen key={1} name="UserProfile" component={HomeNavigators} />
                <Drawer.Screen key={2} name="Vehicle" component={Vehicle} />
                <Drawer.Screen key={3} name="Booking" component={Booking}/>
                <Drawer.Screen key={4} name="ParkingSlot" component={ParkingSlot}/>
                <Drawer.Screen key={5} name="Statistics" component={Statistics}/>
                
                <Drawer.Screen key={6} name="ContactUs" component={ContactUs}/>

            </Drawer.Navigator>  
            
        )
    }
}