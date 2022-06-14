import * as React from "react"
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { LoginNavigators } from "./src/components/navigators";
import DrawerNavigator from "./src/components/drawer";




export default class App extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }  

  render(): React.ReactNode {
    return(
      <NativeBaseProvider>
        <NavigationContainer {...this.props}>
          { this.state.isLoggedIn ?  <DrawerNavigator /> :<LoginNavigators /> }
        </NavigationContainer>
      </NativeBaseProvider>
    )
  }
}