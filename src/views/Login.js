import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from "../components/Button";

class Login extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  onPressRegister = () => {
    this.props.navigation.navigate("Register");
  };
  onPressExplore = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#F6F6F6",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* brandName part */}
          <Text
            style={{
              // fontSize: hp("11.25%"),
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            Vimal Optics.
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "400",
            }}
          >
            your all in one optic store
          </Text>
        </View>
        <View
          style={{
            flex: 2,
          }}
        >
          {/* Image part */}
          <ImageBackground
            source={require("../../assets/login_bg_1.jpg")}
            style={{
              flex: 1,
              width: null,
              height: hp("78%"),
              // height: 550
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: hp("5%"),
                  paddingHorizontal: hp("2.5%"),
                }}
              >
                <Button
                  onPress={this.onPressRegister}
                  backgroundColor="#F08C4F"
                  text="Register"
                />
                <Button backgroundColor="#27ae60" text="Login" />
                <Button
                  backgroundColor="#f1c40f"
                  text="Explore"
                  onPress={this.onPressExplore}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Login;
