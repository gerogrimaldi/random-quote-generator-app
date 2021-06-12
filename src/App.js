import './assets/css/App.css';
import React from 'react';
import QuoteBox from './components/QuoteBox'


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <QuoteBox />
        </div>
        <div className="components">
        </div>
      </div>
    );
  }
}

export default App;
