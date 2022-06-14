import * as React from "react"
import {} from "native-base"
import { StyleSheet, View,Image,Button } from "react-native";


export default class Splashscreen extends React.Component<any,any>{

render(): JSX.Element{
return (
           <View style={ styles.container }>
             <Image  source={require('../assets/images/so.jpg')} 
               style={styles.backgroundImage} />
               <View style={styles.loginForm }>

          <Button  color="blue" title="GET STARTED"
          onPress={() => this.props.navigation.navigate('Login')}>
           </Button>
          </View>
          </View>
        );
    };
};

const styles = StyleSheet.create({
container: {
flex: 5,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'space-around',
},

backgroundImage: {
flex: 1,
resizeMode: 'cover', 
},
loginForm: {
position: 'relative',
top:10,
bottom:5,
margin: 30,
paddingBottom:100,
},
});
