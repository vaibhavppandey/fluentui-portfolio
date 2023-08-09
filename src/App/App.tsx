import React, { useState } from "react";

import {
  FluentProvider,
  makeStyles,
  typographyStyles,
  ToggleButton,
  Button,
  teamsDarkTheme,
  teamsLightTheme,
} from "@fluentui/react-components";

import { darkTheme, lightTheme } from "../themes";

const useStyles = makeStyles({
  parent: { height: "100vh" },
  wrapper: {
    display: "flex",
    columnGap: "32px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    position: "relative",
    rowGap: "16px",
  },
  switch: {
    position: "absolute",
    top: "16px",
    right: "16px",
  },
  text: typographyStyles.title2,
});

const App: React.FC = () => {
  const styles = useStyles();
  const [useDarkMode, setUseDarkMode] = useState(false);
  return (
  <FluentProvider theme={useDarkMode ? darkTheme : lightTheme}>
     <div className={styles.parent}>
      <div className={styles.wrapper}>
        <span className={styles.text}>Hi I am Vaibhav :D</span>
        <Button
          as="a"
          href="https://vaibhavp.tech"
          target="_blank"
          appearance="primary"
        >
          Portfolio
        </Button>
        <ToggleButton className={styles.switch} appearance="transparent" checked={useDarkMode} onClick={() => setUseDarkMode(!useDarkMode)}>
          Switch theme
        </ToggleButton>
      </div>
    </div>
  </FluentProvider>
  );
};

export default App;
