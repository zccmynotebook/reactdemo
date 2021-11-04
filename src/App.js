import {Component} from 'react'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';
 
export default class App extends Component{
    render(){    
      return (
        <div className="wrap">
          <Input/>
          <List/>
          <Footer/>
        </div>
      );
    }
}
