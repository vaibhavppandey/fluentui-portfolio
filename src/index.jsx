import ReactDOM from 'react-dom';
import { FluentProvider } from '@fluentui/react-components';

import { lightTheme, darkTheme } from "./themes";

import "./styles.css";
import App from './App/App';

ReactDOM.render(
  <FluentProvider theme={darkTheme}>
    <App />
  </FluentProvider>,
  document.getElementById('root'),
);