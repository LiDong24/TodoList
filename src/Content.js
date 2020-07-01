import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      list: []
    };
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleClick = () => {
    console.log(this.state.value)
    this.setState({
      list: [...this.state.list, this.state.value],
      value: ''
    })

  }
  render() {
    let value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} onKeyUp={this.handleChange}/>
        <br/>
        <button className="btn__add" onClick={this.handleClick}>Add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return( 
                <li className="content__item" key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Content;