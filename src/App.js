import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import AllPostsContainer from './containers/AllPostsContainer';
import PostContainer from './containers/PostContainer';
import './App.css';


class App extends Component {
  renderHome = () => <h1>Home Container = Contenedor de todos los posts.</h1> ;
  renderAllPostsContainer = () => <h1>Contenedor de posts publicos y privados.</h1>
  renderPublicPostContainer = () => <h1> contenedor de un post publico. </h1> ;
  renderPrivatePostContainer = () => <h1> Contenedor de un post privado. </h1>


render() {
    return (
      <Router>
        <div className="App">

        <Route exact path="/" component= {HomeContainer} />
        <Route exact path= "/public/posts" component={AllPostsContainer} />
        <Route exact path= "/public/posts/:_id"
               render={ props =>  <PostContainer {...props} _id = {props.match.params._id}  /> } />
        <Route exact path="/posts/:id" component={this.renderPrivatePostContainer} />
                
        </div>
      </Router>
      

    );
  }
}

export default App;
