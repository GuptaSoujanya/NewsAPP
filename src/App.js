import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



export default class App extends Component {
  page= 9
  render() {
    return (
      <Router>
        <Navbar/>
       <Switch>
        <Route exact path="/">
        <News key="general" pageSize={this.page} country="in" />
        </Route>
        <Route exact path="/sports">
        <News key="sports" pageSize={this.page} country="in" category="sports"/>
        </Route>
        <Route exact path="/business">
        <News key="business" pageSize={this.page} country="in" category="business"/>
        </Route>
        <Route exact path="/entertainment">
        <News key="entertainment" pageSize={this.page} country="in" category="entertainment"/>
        </Route>
        <Route exact path="/health">
        <News key="health" pageSize={this.page} country="in" category="health"/>
        </Route>
        <Route exact path="/science">
        <News key="science" pageSize={this.page} country="in" category="science"/>
        </Route>
        <Route exact path="/technology">
        <News key="technology" pageSize={this.page} country="in" category="technology"/>
        </Route>
       </Switch>
      </Router>
      
    )
  }
}

