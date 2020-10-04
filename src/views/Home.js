import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import {
  Item,
  Input,
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
import Icon from "react-native-vector-icons/Ionicons";
import Category from "./category1";
import Carousel from "./slide";
// import { Appbar } from "react-native-paper";
import { dummyData } from "./data";
import { Feather, AntDesign } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
const { height, width } = Dimensions.get("window");

class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }
  state = {
    gender: "men",
  };
  rendereye = () => {
    if (this.state.gender == "men")
      return {
        uri:
          "https://5.imimg.com/data5/DI/AY/MY-49116846/ft1016a1a1-from-fastrack-eyeglass-500x500.png  ",
      };
    if (this.state.gender == "women")
      return {
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfkMRz8hRULjbEEm3PFO5ZjX1uodBDO3sSgd3H6XNne0gsJ8ooAxUB3Zc9VGbrz_XHYnyZ1RQ&usqp=CAchttps://5.imimg.com/data5/DI/AY/MY-49116846/ft1016a1a1-from-fastrack-eyeglass-500x500.png  ",
      };
  };
  rendersun = () => {
    if (this.state.gender == "men")
      return {
        uri:
          "https://demo.kallyas.net/glasses/wp-content/uploads/sites/102/2018/10/gls-002.jpg",
      };
    if (this.state.gender == "women")
      return {
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrCLC9N24nqifOsOF5MQyJFHiMq_pd05BA5A&usqp=CAU",
      };
  };
  renderread = () => {
    if (this.state.gender == "men")
      return {
        uri:
          "https://image-tb.vova.com/image/500_500/filler/a7/2b/fea71990142f73b48a19e5723f50a72b.jpg?format=webp",
      };
    if (this.state.gender == "women")
      return {
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRUNiD5re_pPNhWMabLEBdIPO3mWzRsY-Ox4Ex6qcucmVOYDQFlXj_FpSHiztglEUylGQi9cA&usqp=CAc",
      };
  };
  _goBack = () => console.log("Went back");

  _onSearch = () => console.log("Searching");

  _onMore = () => console.log("Shown more");

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: "#dfe6e9" }}>
          <Appbar.Header style={{ backgroundColor: "#00cec9" }}>
            <Feather
              name="menu"
              size={20}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />

            <View
              style={{
                flexDirection: "row",
                // padding: 10,
                backgroundColor: "white",
                width: screenWidth * 60,
                borderRadius: 12,
                height: screenHeight * 5,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                marginHorizontal: screenWidth * 2,
                // elevation: 1,
                // marginTop: Platform.OS == "android" ? 30 : null,
              }}
            >
              {/* <Icon name="ios-search" size={20} style={{ marginRight: 10 }} /> */}
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: "700",
                  backgroundColor: "white",
                  width: screenWidth * 40,
                  borderRadius: 20,
                  padding: 10,
                }}
              />
            </View>
            <TouchableOpacity style={{ marginHorizontal: screenWidth * 3 }}>
              <Icon family="AntDesign" name="ios-heart" size={22} />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginHorizontal: screenWidth * 3 }}>
              <Icon family="AntDesign" name="ios-cart" size={22} />
            </TouchableOpacity>
          </Appbar.Header>

          <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>
              Introducing optics Plus
            </Text>
            <Text
              style={{
                fontWeight: "100",
                marginTop: 5,
                fontSize: 18,
                alignSelf: "center",
              }}
            >
              A new selection of homes verified for quality & comfort
            </Text>
            <Carousel data={dummyData} />
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ gender: "men" })}
                style={{
                  width: 100,
                  borderRadius: 8,
                  borderColor: "black",
                  backgroundColor:
                    this.state.gender == "men" ? "#00cec9" : "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    color: this.state.gender == "men" ? "white" : "black",
                    fontWeight: "bold",
                  }}
                >
                  MEN
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ gender: "women" })}
                style={{
                  width: 100,
                  borderRadius: 8,
                  borderColor: "black",
                  backgroundColor:
                    this.state.gender == "women" ? "#00cec9" : "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    color: this.state.gender == "women" ? "white" : "black",
                    fontWeight: "bold",
                  }}
                >
                  WOMEN
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={{
                marginTop: screenHeight * 2,
                backgroundColor: "white",
                width: screenWidth * 92,
                alignSelf: "center",
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={this.rendereye()}
                    style={{
                      height: screenHeight * 10,
                      width: screenWidth * 20,
                      resizeMode: "stretch",
                      margin: 5,
                    }}
                  />
                  <Text>Eyeglases</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={this.rendersun()}
                    style={{
                      height: screenHeight * 10,
                      width: screenWidth * 20,
                      resizeMode: "stretch",
                      margin: 5,
                    }}
                  />
                  <Text>Sunglases</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: screenHeight * 1,
                  marginBottom: screenHeight * 2,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={{
                      uri:
                        "https://img1-image.cdnsbg.com/hashImg/c5e26cb2c4.jpg_w600h300q80",
                    }}
                    style={{
                      height: screenHeight * 10,
                      width: screenWidth * 20,
                      resizeMode: "stretch",
                      margin: 5,
                    }}
                  />
                  <Text>Computer Glasses</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={this.renderread()}
                    style={{
                      height: screenHeight * 10,
                      width: screenWidth * 20,
                      resizeMode: "stretch",
                      margin: 5,
                    }}
                  />
                  <Text>Reading Glasses</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            <View
              style={{ flex: 1, backgroundColor: "#dfe6e9", paddingTop: 20 }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                }}
              >
                Brands:
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../../assets/kids_fashion.jpg")}
                    name="Fastrack"
                  />
                  <Category
                    imageUri={require("../../assets/login_bg_1.jpg")}
                    name="Rayban"
                  />
                  <Category
                    imageUri={require("../../assets/men_fashion.jpeg")}
                    name="Other Brands"
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
