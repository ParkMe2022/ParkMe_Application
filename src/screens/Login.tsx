import * as React from "react"
import {Box,Text,Heading,VStack,FormControl,Input,Link,Button,HStack,Center, View} from "native-base"
import {Image, ImageBackground, TouchableOpacity} from 'react-native';
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { position } from "native-base/lib/typescript/theme/styled-system";
import { NavigationRouteContext } from "@react-navigation/native";
const Stack = createNativeStackNavigator();




export class LoginScreen extends React.Component<any,any> {

  constructor(props:any){
    super(props);
    this.state={
      email:'',
      emailValid: false,
      password: '',
      passwordValid: false,
      loading: false,
      Users:[],
    };
  }
 
private validateEmail = (text: string) => {
  var res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(res.test(text)){
    return false;
  } else {
    return true;
  }
  // return !res.test(text);
};

  private login(){
    axios
    .post('http://localhost:8081  /api/auth/signin',{
      email:this.state.email,
     
      password:this.state.password,
   
    })

    .then(response => {
      console.log(response.data);
      //this.setState({users});
    });
  }
  private setEmail = (value: any) => {
    this.setState({email: value, emailValid: this.validateEmail(value)});
  };

  private setpassword = (value: any) => {
    this.setState({
      password: value,
    });
  };

    render():JSX.Element{
    return (
      <>
      <Center flex={1} px="3">
      <View flex={1} alignItems={'center'} justifyContent={'flex-start'} >
        <Image
        style={{flex:1, opacity:0.8, resizeMode: 'cover'}}
        source={require('../assets/images/p.jpg')}
        />
          
      </View>
      <View position={'relative'} top={4} bottom={4} margin={1} paddingBottom={12}>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Welcome
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>

                <Input onChangeText={(value: any) => this.setEmail({ email: value })}
                  placeholder="e.g: abc@example.com" />

                <FormControl.ErrorMessage>
                  Enter correct email address
                </FormControl.ErrorMessage>

              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" onChangeText={(value: any) => this.setpassword({ password: value })}
                  placeholder="Password"
                  secureTextEntry={true} />
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Forget Password?
                </Link>

                <FormControl.ErrorMessage>
                  Password required
                </FormControl.ErrorMessage>
              </FormControl>

              <Button mt="2"
                colorScheme="indigo"
                onPressIn={() => this.login()}>

                Login
              </Button>

              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  I'm a new user.{" "}
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
                  <Text color="indigo.500">Sign Up</Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </Box>
          </View>
        </Center></>
    );
  }
  }

