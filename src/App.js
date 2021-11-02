import {Component} from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
 
 
export default class App extends Component{
    
    render(){
      // <Home></Home>
      // <About></About>
      return (
     
        <div className="wrap">
         
         <Link to="/home">HOME</Link>
         <Link to="about">ABOUT</Link>

         <Route path="/home" component={Home} />
         <Route path="/about" component={About} />
       
        </div>
       
      );
    }
}
