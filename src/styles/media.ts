import Breakpoints from "./breakpoints";

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const { xlarge, large, middle, small } = Breakpoints;

const media = {
  xlarge: mediaQuery(xlarge),
  large: mediaQuery(large),
  middle: mediaQuery(middle),
  small: mediaQuery(small),
};

export default media;
