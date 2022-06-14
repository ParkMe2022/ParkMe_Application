import React from 'react';
import axios from 'axios';
import {Text} from 'react-native-svg';
import {View} from 'native-base';

export default class get extends React.Component{
    constructor(props: any){
        super(props);
        this.state={
            Users:[],
        };
    }
    getUserData(){
        axios
            .get('https://reqres.in/api/login', {})
            .then(response => {
                const data = response.data;
                console.log(data);
                const Users = data.map((u: { email: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; password: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                    <View>
                        <Text>{u.email}</Text>
                        <Text>{u.password}</Text>
                    </View>
                ));
                this.setState({Users});
            })
            .catch(error => {
                console.log(error);
            });
    }
    componentDidMount(){
        this.getUserData();
    }
    render(): React.ReactNode {
        
        return( 
        
        
        <Text>{this.state.Users}</Text>
        );
    }
}