import React, { useState, createContext, useContext } from "react";

import {
  FluentProvider,
  makeStyles,
  typographyStyles,
  Image,
  ToggleButton,
  Button,
  Text,
} from "@fluentui/react-components";

import { useMediaQuery } from "../hooks";
import { darkTheme, lightTheme } from "../themes";

const useStyles = makeStyles({
  largeTitle: typographyStyles.largeTitle,
  display: typographyStyles.display
});

const App: React.FC = () => {
  const styles = useStyles();
  const [useDarkMode, setUseDarkMode] = useState(false);
  const isDesktop: boolean = useMediaQuery("(min-width: 1024px)");
  return (
    <FluentProvider theme={useDarkMode ? darkTheme : lightTheme}>
      <div className="flex h-screen items-center justify-center relative max-h-[960px]">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[960px] space-y-2 md:space-x-8 md:space-y-0">
          <div className="hidden sm:block sm:basis-1/3 md:basis-1/3 w-32 md:w-72">
            <Image
              alt="Guess who's back"
              shape="circular"
              fit="cover"
              src="/src/assets/self.jpg"
              height="256px"
              width="256px"
              shadow
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:basis-3/4 md:basis-2/3 space-y-2 md:space-y-4">
            <Text as="p" block className={isDesktop ? styles.display : styles.largeTitle}>
              Hello I'm Vaibhav
            </Text>
            <Button
              as="a"
              size={isDesktop ? "large" : "medium"}
              href="https://vaibhavp.tech"
              target="_blank"
              appearance="primary"
            >
              Portfolio
            </Button>
          </div>
        </div>
        <ToggleButton
          className="absolute top-4 right-4"
          appearance="transparent"
          checked={useDarkMode}
          onClick={() => setUseDarkMode(!useDarkMode)}
        >
          Switch theme
        </ToggleButton>
      </div>
    </FluentProvider>
  );
};

export default App;
