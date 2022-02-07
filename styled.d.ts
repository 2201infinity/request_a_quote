import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      header: string;
      primary: string;
      white: string;
      black: string;
      buttonOrange: string;
      dateText: string;
      border: string;
      toggleOn1: string;
      toggleOn2: string;
      toggleOff1: string;
      toggleOff2: string;
    };

    fontSize: {
      title: number;
      subTitle: number;
      text: number;
    };
  }
}
