import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";

import { Item, Input, Header } from "native-base";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
const CATEGORY = [
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts",
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts",
];

var publics = [
  {
    id: 1,
    imageUri: require("../../assets/dresses/dresses_1.jpg"),
    name: "Hetan",
    price: 120,
    brand: "fastrack",
    priceTwo: "$180",
  },
  {
    id: 2,
    imageUri: require("../../assets/dresses/dresses_2.jpg"),
    name: "vraj",
    price: 180,
    brand: "titan",
    priceTwo: null,
  },
  {
    id: 3,
    imageUri: require("../../assets/dresses/dresses_3.jpg"),
    name: "gnanesh",
    price: 80,
    brand: "rayban",
    priceTwo: null,
  },
  {
    id: 4,
    imageUri: require("../../assets/dresses/dresses_4.jpg"),
    name: "kavin",
    price: 80,
    brand: "random",
    priceTwo: null,
  },
  {
    id: 5,
    imageUri: require("../../assets/dresses/dresses_1.jpg"),
    name: "sarthak",
    price: 80,
    brand: "tommy",
    priceTwo: null,
  },
  {
    id: 6,
    imageUri: require("../../assets/dresses/dresses_2.jpg"),
    name: "thakkar",
    brand: "tommy",
    price: 80,
    priceTwo: null,
  },
];

const SHOES = [
  {
    id: 1,
    imageUri: require("../../assets/shoes/shoes_1.jpg"),
    name: "Helena",
    price: 120,
    priceTwo: "$180",
  },
  {
    id: 2,
    imageUri: require("../../assets/shoes/shoes_2.jpg"),
    name: "Marie-Anne short",
    price: 180,
    priceTwo: null,
  },
  {
    id: 3,
    imageUri: require("../../assets/shoes/shoes_3.jpg"),
    name: "Betruschka",
    price: 80,
    priceTwo: null,
  },
  {
    id: 4,
    imageUri: require("../../assets/shoes/shoes_4.jpg"),
    name: "Betruschka",
    price: 80,
    priceTwo: null,
  },
  {
    id: 5,
    imageUri: require("../../assets/shoes/shoes_1.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null,
  },
  {
    id: 6,
    imageUri: require("../../assets/shoes/shoes_2.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null,
  },
];
var id = [];
class Category extends Component {
  async componentDidMount() {
    for (let i = 0; i < publics.length; i++) {
      id.push(publics[i].id);
    }
    await this.setState({ id });
    console.log(this.state.id);
  }
  state = {
    currentIndex: 0,
    checkbox: false,
    bar: "",
    dis: publics,
    disp: [],
    id: [],
    state: "Enter State",
    about: [],
    city: [],
    cityy: "",
    pressed: false,
  };
  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "#F08C4F" : "white",
            paddingHorizontal: 10,
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_Dress = () => {
    return this.state.dis.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.price,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null,
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.price}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList_Shoes = () => {
    return SHOES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.price,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null,
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.price}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Dress();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Shoes();
    }
  };
  onChange = async (bar) => {
    await this.setState({ bar });
    if (bar.length != 0) {
      let dis = [];
      //  if (newpublics.length != 0) publics = newpublics;
      for (let i = 0; i < publics.length; i++) {
        //  console.log(publics);
        if (
          publics[i].name.includes(this.state.bar) ||
          publics[i].name.includes(this.state.bar.toLowerCase()) ||
          publics[i].brand.includes(this.state.bar) ||
          publics[i].brand.includes(this.state.bar.toLowerCase())
        ) {
          dis.push(publics[i]);
        }
      }
      await this.setState({ dis: dis });
    } else {
      await this.setState({ dis: publics });
    }
  };

  toRender = async () => {
    await this.setState({ checkbox: !this.state.checkbox });
    await this.setState({ pressed: !this.state.pressed });
    // if (!this.state.pressed) this.onChange(this.state.bar);
    // else this.updatecity(this.state.city);
  };
  view = () => {
    console.log(this.state.picker);
    if (this.state.checkbox) {
      return (
        <View>
          <CheckBox
            containerStyle={{
              backgroundColor: "blue",
              borderRadius: 22,
            }}
            style={{
              backgroundColor: "white",
              marginHorizontal: screenWidth * 2,
              marginTop: screenHeight * -1,
            }}
            title="10:00 AM - 12:00 PM"
            checked={this.state.checked1}
            onPress={this.check1}
          />
        </View>
      );
    } else return <View></View>;
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Header
          searchBar
          rounded
          autoCorrect={false}
          style={{ backgroundColor: "#63CBA7" }}
        >
          <Item style={{ marginTop: screenHeight * 2 }}>
            <Icon name="ios-search" style={{ fontSize: 22, padding: 10 }} />
            <Input value={this.state.bar} onChangeText={this.onChange} />
          </Item>
          <TouchableOpacity
            onPress={this.toRender}
            style={{
              flex: 0.3,
              marginTop: screenHeight * 2.5,
              marginLeft: screenWidth * 3,
              backgroundColor: "#fc0f84",
              borderRadius: 7,
              height: screenHeight * 4,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Filter
            </Text>
          </TouchableOpacity>
        </Header>
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#63CBA7",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 4,
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center",
              }}
              ref={(node) => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              onPress={() => {
                this.scroll.scrollTo({ x: wp("80%") });
              }}
              name="ios-arrow-forward"
              size={20}
              color="white"
            />
          </View>
        </View>
        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1,
          }}
        >
          {this.view()}

          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default Category;
