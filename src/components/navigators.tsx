import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component, PureComponent, useEffect } from "react";
import EditProfile from "../screens/EditProfile";
import { Dashboard } from "../screens/Dashboard";
import { LoginScreen } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import Splashscreen from "../screens/splashscreen";
import { UserProfile } from "../screens/UserProfile";
import ParkingSlot from "../screens/ParkingSlot";




const Stack = createNativeStackNavigator();

    
export class LoginNavigators extends PureComponent<any, any> {
    render(): React.ReactNode {
        return (
            <Stack.Navigator initialRouteName={'Splashscreen'}>
                <Stack.Screen 
                  name="Splashscreen" 
                  options={{headerShown: false}}
                  component={Splashscreen}
                />
                <Stack.Screen 
                  name="Login" 
                  options={{headerShown: false}}
                  component={LoginScreen}
                />
                <Stack.Screen
                  name="SignUp"
                  options={{headerShown: false}}
                  component={SignUp}
                /> 
              </Stack.Navigator> 
        );
    }
}

export class HomeNavigators extends React.Component<any, any> {
    render(): React.ReactNode {
        return(
            <Stack.Navigator initialRouteName={this.props.route.name}>
              <Stack.Screen 
                name = 'Dashboard' 
                options={{headerShown: false}}
                component={Dashboard}
              />
              <Stack.Screen 
                name = 'UserProfile' 
                options={{headerShown: false}}
                component={UserProfile}
              />  
              <Stack.Screen 
                name = 'EditProfile' 
                options={{headerShown: false}}
                component={EditProfile}
              /> 
              
            </Stack.Navigator> 
        )
    }
}

