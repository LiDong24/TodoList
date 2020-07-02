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

  onKeyPress = (e) => {
    console.log(e.nativeEvent)
    if(e.nativeEvent.keyCode === 13) {
      this.handleClick()
    }
  }

  handleClick = () => {
    if(this.state.value === '' || !this.state.value) {
      alert('内容不能为空')
    }else {
      console.log(this.state.value)
      this.setState({
        list: [...this.state.list, this.state.value],
        value: ''
      })
    }
  }

  handleDelete = () => {

  }
  render() {
    let value = this.state.value;
    return (
      <div>
        <label>TodoList</label>
        <input 
          type="text" 
          value={value} 
          onChange={this.handleChange} 
          onKeyUp={this.handleChange}
          placeholder="添加ToDo"
          required="required"
          autoComplete="off"
          onKeyPress={this.onKeyPress}
        />
        <button className="btn__add" onClick={this.handleClick}>Add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return(
                <li className="content__item" key={index} onClick={this.handleDelete}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Content;