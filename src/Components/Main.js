import React, {Component} from 'react';
import Title from './Title.js'
import PhotoWall from './PhotoWall.js'
import AddPhoto from './AddPhoto.js'
import {Route} from 'react-router-dom'


class Main extends Component {
    constructor(){
      super()
      this.state = {
          posts: [{
          id: 0,
          description: "Beautiful landscape",
          imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg"
          }, {
          id: 1,
          description: "Aliens???",
          imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
          }, {
          id: 2,
          description: "On a vacation!",
          imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
          }]
      }
      this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
          posts: this.state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
      this.setState(state => ({
        posts: state.posts.concat([postSubmitted])
      }))
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState ){
      console.log(prevState.posts)
      console.log(this.state)
    }


    render() {
      return (

      <div>
        <Route exact path = "/" render={() => (
          <div>
            <Title title={'Bcodegram'}/>
            <PhotoWall posts={this.state.posts} onRemovePhoto= {this.removePhoto} onNavigate = {this.navigate}/>
          </div>
      )}/>

      <Route exact path = "/AddPhoto" render={({history}) => (
        <div>
          <AddPhoto onAddPhoto={(addedPost) => {
            this.addPhoto(addedPost)
            history.push("/")
          }}/>
        </div>
      )}/>

      </div>
    )
  }
}

export default Main
