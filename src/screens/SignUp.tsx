import * as React from "react"
import {Box,Heading,VStack,FormControl,Input,Button,Center, ScrollView} from "native-base"
import axios from "axios";

export class SignUp extends React.Component<any,any>{
   
    constructor(props:any){
      super(props);
      this.state={
        email:'',
        emailValid: false,
        name: '',
        nameValid: false,
        number:'',
        numberValid: false,
        address:'',
        addressValid: false,
        password: '',
        passwordValid: false,
        confirmP:'',
        confirmPValid: false,
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
  
    private signup(){
      axios
      .post('http://localhost:8081',{
        email:this.state.email,
        name:this.state.name,
        number:this.state.number,
        address:this.state.address,
        password:this.state.password,
        confirmP:this.state.confirmP,
       
      })
  
      .then(response => {
        console.log(response.data);
        //this.setState({users});
      });
    }
    private setEmail = (value: any) => {
      this.setState({email: value, emailValid: this.validateEmail(value)});
    };

    private setName = (value:any) => {
      this.setState({
        name: value,
      });
    };

    private setNumber = (value:any) => {
      this.setState({
        number: value,
      });
    }; 
    private setAddress = (value:any) => {
      this.setState({
        address: value,
      });
    };
    private setConfirmP = (value:any) => {
      this.setState({
        confirmP: value,
      });
    };
  
    private setpassword = (value: any) => {
      this.setState({
        password: value,
      });
    };
    render (){ 
    return (
      <ScrollView>
      <Center flex={1} px="3">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={value => this.setEmail({ email: value })}
            placeholder="e.g: abc@example.com"  />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input onChangeText={value => this.setName({ name: value })}
            placeholder="Your Name"  />
          </FormControl>
          <FormControl>
            <FormControl.Label>Mobile Number</FormControl.Label>
            <Input onChangeText={value => this.setNumber({ number: value })}
            placeholder=" Contact Number"  />
          </FormControl>
          <FormControl>
            <FormControl.Label>Address</FormControl.Label>
            <Input onChangeText={value => this.setAddress({ address: value })}
            placeholder="Address" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={value => this.setpassword({ password: value })}
            placeholder="Password" secureTextEntry={true}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" onChangeText={value => this.setConfirmP({ password: value })}
            placeholder="Confirm Password" secureTextEntry={true}/>
          </FormControl>
          <Button mt="2" colorScheme="indigo"
          onPress={() => this.props.navigation.navigate("Login")}
          onPressIn={()=>this.signup()}
          >
            Sign up
          </Button>
        </VStack>
      </Box>
      </Center>
      </ScrollView>
    );
  }
  }
  