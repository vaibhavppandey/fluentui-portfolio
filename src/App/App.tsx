import React from 'react';
import { Title3, Button } from '@fluentui/react-components';

const App : React.FC = () => <>
  <div style={{
    height: "100vh",
  }}>
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
      gap: 16,
    }} >
      <Title3>Hey I am Vaibhav :D</Title3>
      <Button as='a' href="https://vaibhavp.tech" target="_blank" appearance="primary">Portfolio</Button>
    </div >
  </div>
</>;

export default App;