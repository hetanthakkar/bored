import React from "react";
import { Dimensions } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import Login from "./src/views/Login";
import Register from "./src/views/Register";
import Home from "./src/views/drawer";
import Category from "./src/views/Category";
import Detail from "./src/views/Detail";
import Basket from "./src/views/Basket";
import EditBasket from "./src/views/EditBasket";
import Address from "./src/views/Address";
import Shipping from "./src/views/Shipping";
import Payment from "./src/views/Payment";
import TermsAndConditions from "./src/views/TermsAndConditions";
import CreditCard from "./src/views/CreditCard";
import Filter from "./src/views/filter";
// import CustomDrawerComponent from "./src/components/CustomDrawerComponent";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA1MjIrluFGBLbOI9FuZn0vK6ykLr_nO6c",
  authDomain: "optics-39440.firebaseapp.com",
  databaseURL: "https://optics-39440.firebaseio.com",
  projectId: "optics-39440",
  storageBucket: "optics-39440.appspot.com",
  messagingSenderId: "122866416097",
  appId: "1:122866416097:web:ad82116233e26fa3ccbaa0",
  measurementId: "G-P61CHK5E9D",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Home,
      Filter,
      Register,
      Category,
      Detail,
      Basket,
      EditBasket,
      Address,
      Shipping,
      Payment,
      TermsAndConditions,
      CreditCard,
      // CustomDrawerComponent,
    },
    {
      initialRouteName: "Filter",
    }
  )
);
