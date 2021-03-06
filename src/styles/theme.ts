import { DefaultTheme } from "styled-components";

// toggle의 1은 동그라미 부분, 2는 막대부분 색깔입니다.

const colors = {
  header: "#1565C0",
  primary: "#2196F3",
  white: "#ffffff",
  black: "#000000",
  buttonOrange: "#FFA000",
  dateText: "#939FA5",
  grayText: "#323D45",
  border: "#E5E5E5",
  toggleOn1: "#2196F3",
  toggleOn2: "#BBDEFB",
  toggleOff1: "#F5F5F5",
  toggleOff2: "#C2C2C2",
};

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
  smallText: 12,
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
