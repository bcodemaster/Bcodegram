import React, {Component} from 'react';
import List from './List.js'
import Title from './Title.js'

class MainComponent extends Component {

    render() {
      return <div>
               <Title/> 
               <List trinity = {['Emmanuel', 'Son of Man', 'Lamb of God']}/>
               <List trinity = {['Emmanuel', 'Son of Man', 'Lamb of God']}/>
              </div>
    }
  
  }

export default MainComponent