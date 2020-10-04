import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  CheckBox,
  Radio,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Title,
  Body,
} from "native-base";
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;
export default class filter extends Component {
  state = {
    price: [],
    brand: [],
    color: [],
    size: [],
    shape: [],
    lcolor: [],
    toHigh: false,
    toLow: false,
    noSort: false,
    pressed1: true,
    pressed2: false,
    button1: "#00d2d3",
    button2: "white",
    button3: "white",
    button4: "white",
    button5: "white",
    button6: "white",
    button7: "white",
    text1: "white",
    text2: "black",
    text3: "black",
    text4: "black",
    text5: "black",
    text6: "black",
    text7: "black",
  };
  brands = async () => {
    console.log(this.state.pressed1);
    await this.setState({ pressed1: true });
    console.log(this.state.pressed1);
    if (this.state.pressed1) {
      this.setState({ button1: "#00d2d3" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ button5: "white" });
      this.setState({ button6: "white" });
      this.setState({ button7: "white" });
      this.setState({ text1: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ text6: "black" });
      this.setState({ text7: "black" });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
      this.setState({ pressed5: false });
      this.setState({ pressed6: false });
      this.setState({ pressed7: false });
    }
  };
  price = async () => {
    await this.setState({ pressed2: true });
    if (this.state.pressed2) {
      this.setState({ button2: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ button5: "white" });
      this.setState({ button6: "white" });
      this.setState({ button7: "white" });
      this.setState({ text2: "white" });
      this.setState({ text1: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ text6: "black" });
      this.setState({ text7: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
      this.setState({ pressed5: false });
      this.setState({ pressed6: false });
      this.setState({ pressed7: false });
    }
  };

  color = async () => {
    await this.setState({ pressed3: true });
    if (this.state.pressed3) {
      this.setState({ button3: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button4: "white" });
      this.setState({ button5: "white" });
      this.setState({ button6: "white" });
      this.setState({ button7: "white" });
      this.setState({ text3: "white" });
      this.setState({ text2: "black" });
      this.setState({ text1: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ text6: "black" });
      this.setState({ text7: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed5: false });
      this.setState({ pressed4: false });
      this.setState({ pressed6: false });
      this.setState({ pressed7: false });
    }
  };

  lcolor = async () => {
    await this.setState({ pressed4: true });
    if (this.state.pressed4) {
      this.setState({ button4: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button5: "white" });
      this.setState({ button6: "white" });
      this.setState({ button7: "white" });
      this.setState({ text4: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text1: "black" });
      this.setState({ text5: "black" });
      this.setState({ text6: "black" });
      this.setState({ text7: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed5: false });
      this.setState({ pressed6: false });
      this.setState({ pressed7: false });
    }
  };

  size = async () => {
    await this.setState({ pressed5: true });
    if (this.state.pressed5) {
      this.setState({ button5: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ button6: "white" });
      this.setState({ button7: "white" });
      this.setState({ text5: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text1: "black" });
      this.setState({ text6: "black" });
      this.setState({ text7: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
      this.setState({ pressed6: false });
      this.setState({ pressed7: false });
    }
  };
  sort = async () => {
    await this.setState({ pressed6: true });
    if (this.state.pressed6) {
      this.setState({ button6: "#00d2d3" });
      this.setState({ button7: "white" });
      this.setState({ button5: "white" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ text6: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ text7: "black" });
      this.setState({ text1: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
      this.setState({ pressed5: false });
      this.setState({ pressed7: false });
    }
  };
  frameShape = async () => {
    await this.setState({ pressed7: true });
    if (this.state.pressed7) {
      this.setState({ button7: "#00d2d3" });
      this.setState({ button6: "white" });
      this.setState({ button5: "white" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ text7: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ text6: "black" });
      this.setState({ text1: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
      this.setState({ pressed5: false });
      this.setState({ pressed6: false });
    }
  };
  toHigh = () => {
    this.setState({ noSort: false });
    this.setState({ toLow: false });
    this.setState({ toHigh: true });
  };
  toLow = () => {
    this.setState({ noSort: false });
    this.setState({ toLow: true });
    this.setState({ toHigh: false });
  };
  noSort = () => {
    this.setState({ noSort: true });
    this.setState({ toLow: false });
    this.setState({ toHigh: false });
  };
  price1 = async () => {
    if (!this.state.price.includes(1)) {
      let price = [...this.state.price, 1];
      await this.setState({ price });
      console.log(this.state.price);
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(1), 1);
      this.setState({ price: temp });
    }
  };

  price2 = () => {
    if (!this.state.price.includes(2)) {
      let price = [...this.state.price, 2];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(2), 1);
      this.setState({ price: temp });
    }
  };

  price3 = () => {
    if (!this.state.price.includes(3)) {
      let price = [...this.state.price, 3];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(3), 1);
      this.setState({ price: temp });
    }
  };
  price4 = () => {
    if (!this.state.price.includes(4)) {
      let price = [...this.state.price, 4];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(4), 1);
      this.setState({ price: temp });
    }
  };
  price5 = () => {
    if (!this.state.price.includes(5)) {
      let price = [...this.state.price, 5];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(5), 1);
      this.setState({ price: temp });
    }
  };
  price6 = () => {
    if (!this.state.price.includes(6)) {
      let price = [...this.state.price, 6];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(6), 1);
      this.setState({ price: temp });
    }
  };

  price7 = () => {
    if (!this.state.price.includes(7)) {
      let price = [...this.state.price, 7];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(7), 1);
      this.setState({ price: temp });
    }
  };

  price8 = () => {
    if (!this.state.price.includes(8)) {
      let price = [...this.state.price, 8];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(8), 1);
      this.setState({ price: temp });
    }
  };

  price9 = () => {
    if (!this.state.price.includes(9)) {
      let price = [...this.state.price, 9];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf(9), 1);
      this.setState({ price: temp });
    }
  };
  brand1 = () => {
    if (!this.state.brand.includes(1)) {
      let brand = [...this.state.brand, 1];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf(1), 1);
      this.setState({ brand: temp });
    }
  };

  brand2 = () => {
    if (!this.state.brand.includes(2)) {
      let brand = [...this.state.brand, 2];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf(2), 1);
      this.setState({ brand: temp });
    }
  };

  brand3 = () => {
    if (!this.state.brand.includes(3)) {
      let brand = [...this.state.brand, 3];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf(3), 1);
      this.setState({ brand: temp });
    }
  };

  brand4 = () => {
    if (!this.state.brand.includes(4)) {
      let brand = [...this.state.brand, 4];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf(4), 1);
      this.setState({ brand: temp });
    }
  };

  brand5 = () => {
    if (!this.state.brand.includes(5)) {
      let brand = [...this.state.brand, 5];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf(5), 1);
      this.setState({ brand: temp });
    }
  };
  brand6 = () => {
    if (!this.state.brand.includes(6)) {
      let brand = [...this.state.brand, 6];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf(6), 1);
      this.setState({ brand: temp });
    }
  };

  brand7 = () => {
    if (!this.state.brand.includes(7)) {
      let brand = [...this.state.brand, 7];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf(7), 1);
      this.setState({ brand: temp });
    }
  };

  color1 = () => {
    if (!this.state.color.includes(1)) {
      let color = [...this.state.color, 1];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(1), 1);
      this.setState({ color: temp });
    }
  };
  color2 = () => {
    if (!this.state.color.includes(2)) {
      let color = [...this.state.color, 2];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(2), 1);
      this.setState({ color: temp });
    }
  };
  color3 = () => {
    if (!this.state.color.includes(3)) {
      let color = [...this.state.color, 3];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(3), 1);
      this.setState({ color: temp });
    }
  };
  color4 = () => {
    if (!this.state.color.includes(4)) {
      let color = [...this.state.color, 4];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(4), 1);
      this.setState({ color: temp });
    }
  };
  color5 = () => {
    if (!this.state.color.includes(5)) {
      let color = [...this.state.color, 5];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(5), 1);
      this.setState({ color: temp });
    }
  };
  color6 = () => {
    if (!this.state.color.includes(6)) {
      let color = [...this.state.color, 6];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(6), 1);
      this.setState({ color: temp });
    }
  };
  color7 = () => {
    if (!this.state.color.includes(7)) {
      let color = [...this.state.color, 7];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(7), 1);
      this.setState({ color: temp });
    }
  };
  color8 = () => {
    if (!this.state.color.includes(8)) {
      let color = [...this.state.color, 8];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(8), 1);
      this.setState({ color: temp });
    }
  };
  color9 = () => {
    if (!this.state.color.includes(9)) {
      let color = [...this.state.color, 9];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(9), 1);
      this.setState({ color: temp });
    }
  };

  color10 = () => {
    if (!this.state.color.includes(10)) {
      let color = [...this.state.color, 10];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(10), 1);
      this.setState({ color: temp });
    }
  };
  color11 = () => {
    if (!this.state.color.includes(11)) {
      let color = [...this.state.color, 11];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf(11), 1);
      this.setState({ color: temp });
    }
  };

  lcolor1 = () => {
    if (!this.state.lcolor.includes(1)) {
      let lcolor = [...this.state.lcolor, 1];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(1), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor2 = () => {
    if (!this.state.lcolor.includes(2)) {
      let lcolor = [...this.state.lcolor, 2];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(2), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor3 = () => {
    if (!this.state.lcolor.includes(3)) {
      let lcolor = [...this.state.lcolor, 3];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(3), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor4 = () => {
    if (!this.state.lcolor.includes(4)) {
      let lcolor = [...this.state.lcolor, 4];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(4), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor5 = () => {
    if (!this.state.lcolor.includes(5)) {
      let lcolor = [...this.state.lcolor, 5];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(5), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor6 = () => {
    if (!this.state.lcolor.includes(6)) {
      let lcolor = [...this.state.lcolor, 6];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(6), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor7 = () => {
    if (!this.state.lcolor.includes(7)) {
      let lcolor = [...this.state.lcolor, 7];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(7), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor8 = () => {
    if (!this.state.lcolor.includes(8)) {
      let lcolor = [...this.state.lcolor, 8];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(8), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor9 = () => {
    if (!this.state.lcolor.includes(9)) {
      let lcolor = [...this.state.lcolor, 9];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(9), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor10 = () => {
    if (!this.state.lcolor.includes(10)) {
      let lcolor = [...this.state.lcolor, 10];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(10), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor11 = () => {
    if (!this.state.lcolor.includes(11)) {
      let lcolor = [...this.state.lcolor, 11];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(11), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor12 = () => {
    if (!this.state.lcolor.includes(12)) {
      let lcolor = [...this.state.lcolor, 12];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(12), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor13 = () => {
    if (!this.state.lcolor.includes(13)) {
      let lcolor = [...this.state.lcolor, 13];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(13), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor14 = () => {
    if (!this.state.lcolor.includes(14)) {
      let lcolor = [...this.state.lcolor, 14];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(14), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor15 = () => {
    if (!this.state.lcolor.includes(15)) {
      let lcolor = [...this.state.lcolor, 15];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(15), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor16 = () => {
    if (!this.state.lcolor.includes(16)) {
      let lcolor = [...this.state.lcolor, 16];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(16), 1);
      this.setState({ lcolor: temp });
    }
  };

  size1 = () => {
    if (!this.state.size.includes(1)) {
      let size = [...this.state.size, 1];
      this.setState({ size });
    } else {
      let temp = this.state.size;
      temp.splice(temp.indexOf(1), 1);
      this.setState({ size: temp });
    }
  };

  size2 = () => {
    if (!this.state.size.includes(2)) {
      let size = [...this.state.size, 2];
      this.setState({ size });
    } else {
      let temp = this.state.size;
      temp.splice(temp.indexOf(2), 1);
      this.setState({ size: temp });
    }
  };

  size3 = () => {
    if (!this.state.size.includes(3)) {
      let size = [...this.state.size, 3];
      this.setState({ size });
    } else {
      let temp = this.state.size;
      temp.splice(temp.indexOf(3), 1);
      this.setState({ size: temp });
    }
  };
  shape1 = () => {
    if (!this.state.shape.includes(1)) {
      let shape = [...this.state.shape, 1];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(1), 1);
      this.setState({ shape: temp });
    }
  };
  shape2 = () => {
    if (!this.state.shape.includes(2)) {
      let shape = [...this.state.shape, 2];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(2), 1);
      this.setState({ shape: temp });
    }
  };
  shape3 = () => {
    if (!this.state.shape.includes(3)) {
      let shape = [...this.state.shape, 3];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(3), 1);
      this.setState({ shape: temp });
    }
  };
  shape4 = () => {
    if (!this.state.shape.includes(4)) {
      let shape = [...this.state.shape, 4];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(4), 1);
      this.setState({ shape: temp });
    }
  };
  shape5 = () => {
    if (!this.state.shape.includes(5)) {
      let shape = [...this.state.shape, 5];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(5), 1);
      this.setState({ shape: temp });
    }
  };
  shape6 = () => {
    if (!this.state.shape.includes(6)) {
      let shape = [...this.state.shape, 6];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(6), 1);
      this.setState({ shape: temp });
    }
  };
  shape7 = () => {
    if (!this.state.shape.includes(7)) {
      let shape = [...this.state.shape, 7];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(7), 1);
      this.setState({ shape: temp });
    }
  };
  shape8 = () => {
    if (!this.state.shape.includes(8)) {
      let shape = [...this.state.shape, 8];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(8), 1);
      this.setState({ shape: temp });
    }
  };
  shape9 = () => {
    if (!this.state.shape.includes(9)) {
      let shape = [...this.state.shape, 9];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(9), 1);
      this.setState({ shape: temp });
    }
  };
  shape10 = () => {
    if (!this.state.shape.includes(10)) {
      let shape = [...this.state.shape, 10];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(10), 1);
      this.setState({ shape: temp });
    }
  };
  shape11 = () => {
    if (!this.state.shape.includes(11)) {
      let shape = [...this.state.shape, 11];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(11), 1);
      this.setState({ shape: temp });
    }
  };
  shape12 = () => {
    if (!this.state.shape.includes(12)) {
      let shape = [...this.state.shape, 12];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(12), 1);
      this.setState({ shape: temp });
    }
  };
  shape13 = () => {
    if (!this.state.shape.includes(13)) {
      let shape = [...this.state.shape, 13];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(13), 1);
      this.setState({ shape: temp });
    }
  };
  shape14 = () => {
    if (!this.state.shape.includes(14)) {
      let shape = [...this.state.shape, 14];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf(14), 1);
      this.setState({ shape: temp });
    }
  };

  ischecked = (val) => {
    if (val == 1 && this.state.price.includes(1)) return true;
    if (val == 2 && this.state.price.includes(2)) return true;
    if (val == 3 && this.state.price.includes(3)) return true;
    if (val == 4 && this.state.price.includes(4)) return true;
    if (val == 5 && this.state.price.includes(5)) return true;
    if (val == 6 && this.state.price.includes(6)) return true;
    if (val == 7 && this.state.price.includes(7)) return true;
    if (val == 8 && this.state.price.includes(8)) return true;
    if (val == 9 && this.state.price.includes(9)) return true;
  };
  isBrandchecked = (val) => {
    if (val == 1 && this.state.brand.includes(1)) return true;
    if (val == 2 && this.state.brand.includes(2)) return true;
    if (val == 3 && this.state.brand.includes(3)) return true;
    if (val == 4 && this.state.brand.includes(4)) return true;
    if (val == 5 && this.state.brand.includes(5)) return true;
    if (val == 6 && this.state.brand.includes(6)) return true;
  };
  isColorchecked = (val) => {
    if (val == 1 && this.state.color.includes(1)) return true;
    if (val == 2 && this.state.color.includes(2)) return true;
    if (val == 3 && this.state.color.includes(3)) return true;
    if (val == 4 && this.state.color.includes(4)) return true;
    if (val == 5 && this.state.color.includes(5)) return true;
    if (val == 6 && this.state.color.includes(6)) return true;
    if (val == 7 && this.state.color.includes(7)) return true;
    if (val == 8 && this.state.color.includes(8)) return true;
    if (val == 9 && this.state.color.includes(9)) return true;
    if (val == 10 && this.state.color.includes(10)) return true;
    if (val == 11 && this.state.color.includes(11)) return true;
  };
  isSizechecked = (val) => {
    if (val == 1 && this.state.size.includes(1)) return true;
    if (val == 2 && this.state.size.includes(2)) return true;
    if (val == 3 && this.state.size.includes(3)) return true;
  };
  isShapechecked = (val) => {
    if (val == 1 && this.state.shape.includes(1)) return true;
    if (val == 2 && this.state.shape.includes(2)) return true;
    if (val == 3 && this.state.shape.includes(3)) return true;
    if (val == 4 && this.state.shape.includes(4)) return true;
    if (val == 5 && this.state.shape.includes(5)) return true;
    if (val == 6 && this.state.shape.includes(6)) return true;
    if (val == 7 && this.state.shape.includes(7)) return true;
    if (val == 8 && this.state.shape.includes(8)) return true;
    if (val == 9 && this.state.shape.includes(9)) return true;
    if (val == 10 && this.state.shape.includes(10)) return true;
    if (val == 11 && this.state.shape.includes(11)) return true;
    if (val == 12 && this.state.shape.includes(12)) return true;
    if (val == 13 && this.state.shape.includes(13)) return true;
    if (val == 14 && this.state.shape.includes(14)) return true;
  };

  isLcolorchecked = (val) => {
    if (val == 1 && this.state.lcolor.includes(1)) return true;
    if (val == 2 && this.state.lcolor.includes(2)) return true;
    if (val == 3 && this.state.lcolor.includes(3)) return true;
    if (val == 4 && this.state.lcolor.includes(4)) return true;
    if (val == 5 && this.state.lcolor.includes(5)) return true;
    if (val == 6 && this.state.lcolor.includes(6)) return true;
    if (val == 7 && this.state.lcolor.includes(7)) return true;
    if (val == 8 && this.state.lcolor.includes(8)) return true;
    if (val == 9 && this.state.lcolor.includes(9)) return true;
    if (val == 10 && this.state.lcolor.includes(10)) return true;
    if (val == 11 && this.state.lcolor.includes(11)) return true;
    if (val == 12 && this.state.lcolor.includes(12)) return true;
    if (val == 13 && this.state.lcolor.includes(13)) return true;
    if (val == 14 && this.state.lcolor.includes(14)) return true;
    if (val == 15 && this.state.lcolor.includes(15)) return true;
    if (val == 16 && this.state.lcolor.includes(16)) return true;
    if (val == 17 && this.state.lcolor.includes(17)) return true;
  };
  renderify = () => {
    if (this.state.pressed6)
      return (
        <View>
          <TouchableOpacity onPress={this.toHigh}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: screenHeight * 6,
                marginTop: screenHeight * 3,
                marginLeft: screenWidth * 2,
              }}
            >
              <Text style={{ fontSize: 15 }}>Price - Low to High</Text>
              <Radio
                selected={this.state.toHigh}
                onPress={this.toHigh}
                style={{ marginLeft: screenWidth * 18 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toLow}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: screenWidth * 2,
                marginTop: screenHeight * -3,
              }}
            >
              <Text style={{ fontSize: 15 }}>Price - High to Low</Text>
              <Radio
                selected={this.state.toLow}
                onPress={this.toLow}
                style={{ marginLeft: screenWidth * 18.5 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.noSort}>
            <View
              style={{
                flexDirection: "row",
                marginVertical: screenHeight * 3,
                marginLeft: screenWidth * 2,
              }}
            >
              <Text style={{ fontSize: 15 }}>Newest First</Text>
              <Radio
                selected={this.state.noSort}
                onPress={this.noSort}
                style={{ marginLeft: screenWidth * 29 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    if (this.state.pressed2) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.price1}>
            <View
              style={{
                flexDirection: "row",
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 200 - Rs. 400</Text>
              <CheckBox
                checked={this.ischecked(1)}
                onPress={this.price1}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 13 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 400 - Rs. 600</Text>
              <CheckBox
                checked={this.ischecked(2)}
                onPress={this.price2}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 13 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 600 - Rs. 800</Text>
              <CheckBox
                checked={this.ischecked(3)}
                onPress={this.price3}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 13 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 800 - Rs. 1000</Text>
              <CheckBox
                checked={this.ischecked(4)}
                onPress={this.price4}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 10 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 1000 - Rs. 1200</Text>
              <CheckBox
                checked={this.ischecked(5)}
                onPress={this.price5}
                color="#0984e3"
                style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 1200 - Rs. 1500</Text>
              <CheckBox
                checked={this.ischecked(6)}
                onPress={this.price6}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 1500 - Rs. 1800</Text>
              <CheckBox
                checked={this.ischecked(7)}
                onPress={this.price7}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 2000 - Rs. 2500</Text>
              <CheckBox
                checked={this.ischecked(8)}
                onPress={this.price8}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 2500 and Above</Text>
              <CheckBox
                checked={this.ischecked(9)}
                onPress={this.price9}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 6 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.pressed3) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.color1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Black</Text>
              <CheckBox
                checked={this.isColorchecked(1)}
                onPress={this.color1}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Bright</Text>
              <CheckBox
                checked={this.isColorchecked(2)}
                onPress={this.color2}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Neutral </Text>
              <CheckBox
                checked={this.isColorchecked(3)}
                onPress={this.color3}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 30 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Blue</Text>
              <CheckBox
                checked={this.isColorchecked(4)}
                onPress={this.color4}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Grey</Text>
              <CheckBox
                checked={this.isColorchecked(5)}
                onPress={this.color5}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Brown</Text>
              <CheckBox
                checked={this.isColorchecked(6)}
                onPress={this.color6}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Green</Text>
              <CheckBox
                checked={this.isColorchecked(7)}
                onPress={this.color7}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Golden</Text>
              <CheckBox
                checked={this.isColorchecked(8)}
                onPress={this.color8}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Red</Text>
              <CheckBox
                checked={this.isColorchecked(9)}
                onPress={this.color9}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color10}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Silver</Text>
              <CheckBox
                checked={this.isColorchecked(10)}
                onPress={this.color10}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color11}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pink</Text>
              <CheckBox
                checked={this.isColorchecked(11)}
                onPress={this.color11}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color12}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Orange</Text>
              <CheckBox
                checked={this.isColorchecked(12)}
                onPress={this.color12}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 31 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.pressed5) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.size1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Small</Text>
              <CheckBox
                checked={this.isSizechecked(1)}
                onPress={this.size1}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.size2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Medium</Text>
              <CheckBox
                checked={this.isSizechecked(2)}
                onPress={this.size2}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 29 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.size3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Large </Text>
              <CheckBox
                checked={this.isSizechecked(3)}
                onPress={this.size3}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.pressed1) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.brand1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Burberry</Text>
              <CheckBox
                checked={this.isBrandchecked(1)}
                onPress={this.brand1}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand2}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: screenWidth * -10,
                marginTop: screenHeight * 2,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Maui Jim</Text>
              <CheckBox
                checked={this.isBrandchecked(2)}
                onPress={this.brand2}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand3}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
                marginTop: screenHeight * 2,
              }}
            >
              <Text style={{ fontSize: 17 }}>Oakley </Text>
              <CheckBox
                checked={this.isBrandchecked(3)}
                onPress={this.brand3}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Polaroid</Text>
              <CheckBox
                checked={this.isBrandchecked(4)}
                onPress={this.brand4}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Titan</Text>
              <CheckBox
                checked={this.isBrandchecked(5)}
                onPress={this.brand5}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,

                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Fastrack</Text>
              <CheckBox
                checked={this.isBrandchecked(6)}
                onPress={this.brand6}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Rayban</Text>
              <CheckBox
                checked={this.isBrandchecked(7)}
                onPress={this.brand7}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.pressed4) {
      return (
        <ScrollView style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.lcolor1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Black</Text>
              <CheckBox
                checked={this.isLcolorchecked(1)}
                onPress={this.lcolor1}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 36 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Bronze</Text>
              <CheckBox
                checked={this.isLcolorchecked(2)}
                onPress={this.lcolor2}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Brown </Text>
              <CheckBox
                checked={this.isLcolorchecked(3)}
                onPress={this.lcolor3}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Maroon</Text>
              <CheckBox
                checked={this.isLcolorchecked(4)}
                onPress={this.lcolor4}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Grey</Text>
              <CheckBox
                checked={this.isLcolorchecked(5)}
                onPress={this.lcolor5}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pink</Text>
              <CheckBox
                checked={this.isLcolorchecked(6)}
                onPress={this.lcolor6}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Blue</Text>
              <CheckBox
                checked={this.isLcolorchecked(7)}
                onPress={this.lcolor7}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Brown</Text>
              <CheckBox
                checked={this.isLcolorchecked(8)}
                onPress={this.lcolor8}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Green</Text>
              <CheckBox
                checked={this.isLcolorchecked(9)}
                onPress={this.lcolor9}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor10}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Grey</Text>
              <CheckBox
                checked={this.isLcolorchecked(10)}
                onPress={this.lcolor10}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor11}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>GOld</Text>
              <CheckBox
                checked={this.isLcolorchecked(11)}
                onPress={this.lcolor11}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor12}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Silver</Text>
              <CheckBox
                checked={this.isLcolorchecked(12)}
                onPress={this.lcolor12}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 36 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor13}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pink</Text>
              <CheckBox
                checked={this.isLcolorchecked(13)}
                onPress={this.lcolor13}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor14}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Purple</Text>
              <CheckBox
                checked={this.isLcolorchecked(14)}
                onPress={this.lcolor14}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor15}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Yellow</Text>
              <CheckBox
                checked={this.isLcolorchecked(15)}
                onPress={this.lcolor15}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor16}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Orange</Text>
              <CheckBox
                checked={this.isLcolorchecked(16)}
                onPress={this.lcolor16}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
    if (this.state.pressed7) {
      return (
        <ScrollView style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.shape1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Aviator</Text>
              <CheckBox
                checked={this.isShapechecked(1)}
                onPress={this.shape1}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Clubmaster</Text>
              <CheckBox
                checked={this.isShapechecked(2)}
                onPress={this.shape2}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 23 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pilot </Text>
              <CheckBox
                checked={this.isShapechecked(3)}
                onPress={this.shape3}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Maroon</Text>
              <CheckBox
                checked={this.isShapechecked(4)}
                onPress={this.shape4}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 30 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Reactangle</Text>
              <CheckBox
                checked={this.isShapechecked(5)}
                onPress={this.shape5}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 23 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Sports</Text>
              <CheckBox
                checked={this.isShapechecked(6)}
                onPress={this.shape6}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Wayfarer</Text>
              <CheckBox
                checked={this.isShapechecked(7)}
                onPress={this.shape7}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 28 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Round</Text>
              <CheckBox
                checked={this.isShapechecked(8)}
                onPress={this.shape8}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Oval</Text>
              <CheckBox
                checked={this.isShapechecked(9)}
                onPress={this.shape9}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape10}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>CatEye</Text>
              <CheckBox
                checked={this.isShapechecked(10)}
                onPress={this.shape10}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape11}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Wraparound</Text>
              <CheckBox
                checked={this.isShapechecked(11)}
                onPress={this.shape11}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 22 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape12}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Bugeye</Text>
              <CheckBox
                checked={this.isShapechecked(12)}
                onPress={this.shape12}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape13}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Square</Text>
              <CheckBox
                checked={this.isShapechecked(13)}
                onPress={this.shape13}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape14}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Navigator</Text>
              <CheckBox
                checked={this.isShapechecked(14)}
                onPress={this.shape14}
                color="#0984e3"
                // style={{ marginLeft: screenWidth * 27 }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  };
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1.2,
              backgroundColor: "white",
              borderColor: "#0984e3",
            }}
          >
            <Header style={{ backgroundColor: "#0984e3" }}>
              <Left>
                <Button transparent>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Right>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: screenHeight * 2.7,
                  }}
                >
                  Filters
                </Text>
              </Right>
            </Header>

            <TouchableOpacity
              onPress={this.brands}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.button1,
                height: screenHeight * 7,
                borderRightColor: "#0984e3",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: this.state.text1,
                }}
              >
                Brands
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.price}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.button2,
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.text2,
                  fontSize: 15,
                }}
              >
                Price
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.color}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.button3,
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.text3,
                  fontSize: 15,
                }}
              >
                Frame Color
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.lcolor}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.button4,
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.text4,
                  fontSize: 15,
                }}
              >
                Lens Color
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.size}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.button5,
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.text5,
                  fontSize: 15,
                }}
              >
                Frame Size
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.sort}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.button6,
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.text6,
                  fontSize: 15,
                }}
              >
                Sort
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.frameShape}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.button7,
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.text7,
                  fontSize: 15,
                }}
              >
                Frame Shape
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Header style={{ backgroundColor: "#0984e3" }}></Header>

            {this.renderify()}
          </View>
        </View>
        <TouchableOpacity
          onPress={this.frameShape}
          style={{
            width: screenWidth * 38,
            alignSelf: "center",
            padding: 10,
            borderWidth: 1.5,
            borderColor: "#00d2d3",
            borderRadius: 12,
            marginLeft: screenWidth * -45,
            marginTop: screenHeight * 27,
            backgroundColor: this.state.button7,
          }}
        >
          <Text
            style={{
              color: "#00d2d3",
              alignSelf: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Reset All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.frameShape}
          style={{
            width: screenWidth * 40,
            padding: 10,
            borderColor: "#00d2d3",
            borderRadius: 12,
            marginLeft: screenWidth * 52,
            marginTop: screenHeight * -6,
            backgroundColor: "#00d2d3",
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
