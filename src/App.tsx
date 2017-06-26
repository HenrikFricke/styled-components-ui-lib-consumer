import * as React from 'react';
import './App.css';

import { H1, Modal } from 'styled-components-ui-library';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <H1>Welcome to React</H1>
        </div>
        <div className="App-intro">
          <Modal
            title="Do you like this demo?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            saveButtonClickHandler={() => null}
          />
        </div>
      </div>
    );
  }
}

export default App;
