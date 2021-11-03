import {Component} from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import './App.css'

export default class App extends Component{

    render(){
      return (
        <div><Header></Header>
          <div className="wrap1">
              <menu>
                  <ul className="nav nav-pills nav-stacked w200">
                    <li>
                    <NavLink to="/home">HOME</NavLink>
                    </li>
                    <li> <NavLink to="/about">ABOUT</NavLink></li>
                  </ul>
              </menu>
              <main>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Redirect to="/home"/>
                </Switch>
              </main>
          </div> 
        </div>
      );
    }
}
