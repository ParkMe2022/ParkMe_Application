import * as React from "react";
import { Badge, Box,  Center,  Flex,  HStack, ScrollView, Spacer, VStack } from "native-base";
import { Pressable,  Text, Dimensions, View, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { fonts } from "react-native-elements/dist/config";
import { baseFontSize } from "native-base/lib/typescript/theme/tools";


export class Dashboard extends React.Component<any,any>{
  render(): React.ReactNode {

    function renderHeader(){
      return(
        <View 
        style={{
          width: "100%",
          height: 260,
          ...styles.shadow
        }}>
          <ImageBackground
          source={require('../assets/images/cover.jpg')}
          resizeMode="cover"
          style={{
            flex:1,
            alignItems:'center'
          }}>

          </ImageBackground>
        </View>
      )
      }

      return(
        <ScrollView>
          <View style={{flex: 1, paddingBottom: 5}}>
          {renderHeader()}
          </View>
          <Center flex={1} >
            <VStack width="100%" space={5} alignItems="center">
              <HStack>
                <Box alignItems="center">
                  <Pressable onPressIn={()=>this.props.navigation.navigate("Booking")}>
                    <Box
                      maxHeight={150} 
                      maxWidth={190}
                      size={140} 
                      borderWidth="1" 
                      borderColor="coolGray.300" 
                      shadow="3" 
                      bg="coolGray.100" 
                      p="3" 
                      rounded="8" 
                      marginLeft={2} 
                      marginRight={6}
                      marginTop={4}
                      >
                      <HStack alignItems="center">
                      <Badge colorScheme="darkBlue" _text={{
                          color: "white",
                          }} variant="solid" rounded="4">
                          Booking
                        </Badge>
                        <Spacer />
                        
                      </HStack>
                      <Text style={{
                        color:"coolGray.700",
                        marginTop:2,
                        fontSize:15,
                        }}>
                      <Icon name="map-marker-outline" size={20}/>
                      Book your parking slot now!
                      </Text>
                    </Box>
                  </Pressable >
                </Box>
                <Box alignItems="center" >
                  <Pressable onPressIn={()=>this.props.navigation.navigate("ParkingSlot")}>
                    <Box  
                      maxHeight={200} 
                      maxWidth={190}
                      size={140} 
                      borderWidth="1"
                      borderColor="coolGray.300" 
                      shadow="3" 
                      bg="coolGray.100" 
                      p="3" 
                      rounded="8"  
                      marginRight={2}
                      marginTop={4}>
                      <HStack alignItems="center">
                        <Badge colorScheme="darkBlue" _text={{
                          color: "white",
                          }} variant="solid" rounded="4">
                          Parking Slots
                        </Badge>
                        <Spacer />
                      </HStack>
                      <Text style={{
                        color:"coolGray.700",
                        marginTop:2,
                        fontSize:15,
                        }}>
                      <Icon name="car-hatchback" size={20}/>
                      Have a look on available parking slots
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
              </HStack>
              <HStack>
                <Box alignItems="center">
                  <Pressable onPressIn={()=>this.props.navigation.navigate("Vehicle")}>
                    <Box
                      maxHeight={150} 
                      maxWidth={190} 
                      size={140}
                      borderWidth="1" 
                      borderColor="coolGray.300" 
                      shadow="3" 
                      bg="coolGray.100" 
                      p="3" 
                      rounded="8" 
                      marginLeft={2} 
                      marginRight={6}
                      marginTop={1}>
                      <HStack alignItems="center">
                        <Badge alignItems="center" colorScheme="darkBlue" _text={{
                          color: "white"
                          }} variant="solid" rounded="4" >
                          Vehicle Details
                        </Badge>
                        <Spacer />
                      </HStack>
                      <Text style={{
                        color:"coolGray.700",
                        marginTop:2,
                        fontSize:15,
                        }}>
                      <Icon name="car-multiple" size={17}/>
                        Add your car details here
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
                <Box alignItems="center" >
                  <Pressable onPressIn={()=>this.props.navigation.navigate("Statistics")}>
                    <Box  
                      maxHeight={200} 
                      maxWidth={190}
                      size={140} 
                      borderWidth="1"
                      borderColor="coolGray.300" 
                      shadow="3" 
                      bg="coolGray.100" 
                      p="3" 
                      rounded="8"  
                      marginRight={2}
                      marginTop={1}>
                      <HStack alignItems="center">
                        <Badge colorScheme="darkBlue" _text={{
                          color: "white"
                          }} variant="solid" rounded="4">
                          Statistics
                        </Badge>
                        <Spacer />  
                      </HStack>
                      <Text style={{
                        color:"coolGray.700",
                        marginTop:2,
                        fontSize:15,
                        }}>
                        <Icon name="chart-areaspline" size={17}/>
                        All your booking and payments history
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
              </HStack>
              <HStack>
                <Box alignItems="center">
                  <Pressable onPressIn={()=>this.props.navigation.navigate("UserProfile")}>
                    <Box
                      maxHeight={150} 
                      maxWidth={190}
                      size={140} 
                      borderWidth="1" 
                      borderColor="coolGray.300" 
                      shadow="3" 
                      bg="coolGray.100" 
                      p="3" 
                      rounded="8" 
                      marginLeft={2} 
                      marginRight={6}
                      marginTop={1}>
                      <HStack alignItems="center">
                        <Badge alignItems="center" colorScheme="darkBlue" _text={{
                          color: "white"
                          }} variant="solid" rounded="4" >
                          Profile
                        </Badge>
                        <Spacer />
                      </HStack>
                      <Text style={{
                        color:"coolGray.700",
                        marginTop:2,
                        fontSize:15,
                        }}>
                      <Icon name="account" size={17}/>
                        You can view and edit your profile
                      </Text>
                    </Box>
                  </Pressable >
                </Box>
                <Box alignItems="center" >
                  <Pressable onPressIn={()=>this.props.navigation.navigate("Statistics")}>
                    <Box  
                      maxHeight={200} 
                      maxWidth={190}
                      size={140} 
                      borderWidth="1"
                      borderColor="coolGray.300" 
                      shadow="3" 
                      bg="coolGray.100" 
                      p="3" 
                      rounded="8"  
                      marginRight={2}
                      marginTop={1}
                      marginBottom={5}>
                      <HStack alignItems="center">
                        <Badge colorScheme="darkBlue" _text={{
                          color: "white"
                          }} variant="solid" rounded="4">
                          Payment History
                        </Badge>
                        <Spacer />  
                      </HStack>
                      <Text style={{
                        color:"coolGray.700",
                        marginTop:2,
                        fontSize:15,
                        }}>
                        <Icon name="credit-card-clock" size={17}/>
                        All your previous transactions
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
              </HStack>
              
            </VStack>
          </Center>
        </ScrollView>
      )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 4,
    }
  }
})