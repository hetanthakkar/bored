// Docs: https://reactnavigation.org/docs/en/drawer-navigator.html
// Ionicons: http://ionicons.com
// Brent Vatne: https://twitter.com/notbrent
// Eric Vicenti: https://twitter.com/EricVicenti
// Video Tutorial: https://www.youtube.com/watch?v=ZzhOjO-1dCs
import NavigationDrawerStructure from "./main2";
import * as React from "react";
import {
  Item,
  Input,
  Icon,
  Button,
  Container,
  Header,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from "native-base";
import Chat from "./Home";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Constants } from "expo";
import Main from "./Login";
const width = Dimensions.get("window");
import {
  createAppContainer,
  DrawerItems,
  SafeAreaView,
  TouchableOpacity,
} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-home" size={24} color={focused ? "blue" : "black"} />
    ),
  };
  componentDidMount() {
    // this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => console.log("skdjfn")}
        ></TouchableWithoutFeedback>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      //title: "Demo Screen 1",
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "#fff",
    }),
  },
});

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      // title: "Demo Screen 2",
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: "#FF9800",
      },
      headerTintColor: "#fff",
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      // title: "Demo Screen 3",
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: "#FF9800",
      },
      headerTintColor: "#fff",
    }),
  },
});

const navigator = createDrawerNavigator(
  // {
  //   //Drawer Optons and indexing
  //   // NavScreen1: {
  //   //   screen: FirstActivity_StackNavigator,
  //   //   navigationOptions: {
  //   //     // drawerLabel: "Demo Screen 1",
  //   //   },
  //   // },
  //   // NavScreen2: {
  //   //   screen: Screen2_StackNavigator,
  //   //   navigationOptions: {
  //   //     // drawerLabel: "Demo Screen 2",
  //   //   },
  //   // },
  //   // NavScreen3: {
  //   //   screen: Screen3_StackNavigator,
  //   //   navigationOptions: {
  //   //     // drawerLabel: "Demo Screen 3",
  //   //   },
  //   // },
  // },
  {
    Home: Chat,
    Settings: Chat,
  },
  {
    drawerType: "permanent",
    // drawerWidth: 200,
    drawerOpenByDefault: true,
    drawerBackgroundColor: "orange",
    // contentComponent: CustomDrawerContentComponent
  },
  {
    drawerBackgroundColor: "rgba(255,255,255,.9)",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae",
    },
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    flexDirection: "row",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    height: 300,
  },
});
