import Breakpoints from "./breakpoints";

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const { xlarge, large, medium, small } = Breakpoints;

const media = {
  xlarge: mediaQuery(xlarge),
  large: mediaQuery(large),
  medium: mediaQuery(medium),
  small: mediaQuery(small),
};

export default media;
