import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
} );

class Blog extends Component {
  state = {
    auth: true,
  }
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li><NavLink
                to="/posts"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() =>  <Posts/> }/>
        <Route path="/new-post" exact render={() =>  <NewPost/> }/> */}
        <Switch>
          {/* <Route path="/new-post" component={NewPost} /> */}
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Redirect from='/' exact to='/posts'/>
          <Route render= {() => <h1>Not found</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;