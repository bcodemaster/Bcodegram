import React, {Component} from 'react';

class List extends Component {

    render() {
      return (
        <ol>
          {this.props.trinity.map((person, index) => <li key = {index}> {person} </li>)}
        </ol>)
    }
  
  }

export default List