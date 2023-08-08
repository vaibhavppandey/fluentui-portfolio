import { BrandVariants, createLightTheme, createDarkTheme } from '@fluentui/react-components';

const brandRamp: BrandVariants = { 
  10: "#020306",
  20: "#121725",
  30: "#182542",
  40: "#1C305A",
  50: "#1F3D73",
  60: "#20498D",
  70: "#1F56A9",
  80: "#1B63C4",
  90: "#1471E1",
  100: "#007FFF",
  110: "#4C8CFF",
  120: "#6E9AFF",
  130: "#89A9FF",
  140: "#A1B8FF",
  150: "#B7C7FF",
  160: "#CCD6FF"
};

export const lightTheme = createLightTheme(brandRamp)
export const darkTheme  = createDarkTheme(brandRamp)

 darkTheme.colorBrandForeground1 = brandRamp[110];
 darkTheme.colorBrandForeground2 = brandRamp[120];

