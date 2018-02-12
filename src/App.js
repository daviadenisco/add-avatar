import React from 'react';
import data from './data';
import StudentList from './StudentList';
import './App.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputBox: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputBox: e.target.value });
  }

  render() {
    return (
      <div style={ styles }>
        <h2>Input search term {'\u2728'}</h2>
        <input type="text" onChange={ this.handleChange } />
        <StudentList students={ data } />
      </div>
    )
  }
}

export default App;
