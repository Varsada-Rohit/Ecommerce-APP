import {Theme} from '@react-navigation/native';

const DarkThemeColor = {
  white: '#F6F6F6',
  grey: '#ABB4BD',
  primary: '#EF3651',
  secondary: '#2A2C36',
  background: '#1E1F28',
  text: '#F6F6F6',
  dark: '#2A2C36',
  hot: '#FF3E3E',
  error: '#FF2424',
  success: '#55D85A',
};

const LightThemeColor = {
  black: '#222222',
  grey: '#9B9B9B',
  primary: '#DB3022',
  secondary: '#FFFFFF',
  text: '#222222',
  background: '#F9F9F9',
  white: '#FFFFFF',
  error: '#F01F0E',
  success: '#2AA952',
};

export interface colort {
  dark: any;
  colors: any;
}

export type CustomTheme = {
  colors: {
    error: string;
    secondary: string;
    grey: string;
    white: string;
    success: string;
  };
} & Theme;

export default {
  DarkThemeColor,
  LightThemeColor,
};
