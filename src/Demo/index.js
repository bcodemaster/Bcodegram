import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './Components/Main.js'
import './styles/stylesheet.css'

const trinity = ['Father', 'Son', 'Holy Spirit'];

const element = React.createElement('ol',null, 
  
  trinity.map((person, index) => React.createElement('li', {key: index}, person))
  
);

const JSXhardcoded =
  <div>
    <h1>Holy Trinity</h1>
    <ol>
      <li>{trinity[0]}</li>
      <li>{trinity[1]}</li>
      <li>{trinity[2]}</li>
    </ol>
  </div>

const JSX = 
  <div>
    <h1>Holy Trinity</h1>
    <ol>
      {trinity.map((person, index) => <li key = {index}> {person} </li>)}
    </ol>
  </div>

class List extends Component {

  render() {
    return (
      <ol>
        {this.props.trinity.map((person, index) => <li key = {index}> {person} </li>)}
      </ol>)
  }

}

class Title extends Component {

  render() {
    return <h1>Holy Trinity</h1>
  }
}

class Main extends Component {

  render() {
    return <div>
             <Title/> 
             <List trinity = {['Emmanuel', 'Son of Man', 'Lamb of God']}/>
             <List trinity = {['Emmanuel', 'Son of Man', 'Lamb of God']}/>
            </div>
  }

}

ReactDOM.render(<MainComponent/>, document.getElementById('root'));