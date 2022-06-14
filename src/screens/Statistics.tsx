import { Box, HStack, VStack } from "native-base";
import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const data =[
    {
        id: 1,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
    {
        id: 2,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
    {
        id: 3,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
       
    },
    {
        id: 4,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
       
    },
    {
        id: 5,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
    {
        id: 6,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
    {
        id: 7,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
    {
        id: 8,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
    {
        id: 9,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
    {
        id: 10,
        date: "27 MAY",
        location: "Gadhinglaj",
        time: "17:54 - 18:13",
        number: "MH09-AB4089",
        
    },
]

export default class Statistics extends React.Component {
    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <FlatList data={data} renderItem={({item})=>(
                    <VStack>
                        <Box  
                        maxHeight={200} 
                        maxWidth={390}
                        borderWidth="1"
                        borderColor="coolGray.300" 
                        shadow="3" 
                        bg="coolGray.100" 
                        p="3" 
                        rounded="8"  
                        marginRight={2}
                        marginTop={1}
                        marginBottom={3}>
                            <HStack>
                                <Text style={styles.date}>  {item.date} </Text>
                                <VStack marginLeft={5}>
                                    <Text style={styles.text}>
                                    <Icon 
                                    name="map-marker-outline" 
                                    
                                    size={18}
                                    style={styles.icon}/>
                                        {item.location}</Text>
                                    
                                    <Text style={styles.text}>
                                    <Icon 
                                    name="clock-time-four-outline" 
                                    
                                    size={16}
                                    style={styles.icon}/>
                                        {item.time}</Text>
                                    <Text style={styles.text}>
                                    <Icon 
                                    name="car" 
                                    
                                    size={18}
                                    style={styles.icon}/>
                                        {item.number}</Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </VStack>
                    
                )}
                keyExtractor={(item) => item.id}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    date:{
        fontSize: 25,
        color: `#7b68ee`,
        fontWeight: "bold"
    },
    icon:{
        color:"black",
        marginRight:15
        
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
        color: "black"
        
    }
})

