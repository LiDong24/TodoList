import React from 'react';
import './App.css';
import Content from './content';

class App extends React.Component {
  render() {
    // let value = this.state.value;
    return (
      <div className="todolist">
        <Content></Content>
        {/* <input type="text" value={value} onChange={this.handleChange} />
        <h4>{value}</h4>
        <br />
        <button className="btn-add">Add</button>
        <ul className="list">
          <li>dds</li>
        </ul> */}
      </div>
    )
  }
}

export default App;
