import 'styled-components';

type Breakpoints = string [] & { [key: string]: string };

const breakpointStrings = [ '600px', '640px', '780px', '1180px' ];

const breakpoints = Object.assign([...breakpointStrings], {
  xs: breakpointStrings[0],
  sm: breakpointStrings[1],
  md: breakpointStrings[2],
  lg: breakpointStrings[3],
});

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints
  }
}

export default {
  breakpoints,
};
