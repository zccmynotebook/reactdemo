import {Component} from 'react'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';

export default class App extends Component{
  state={
    todos:[
      {
        id:1,
        name:'吃饭'
      },
      {
        id:2,
        name:'工作'
      },
      {
        id:3,
        name:'睡觉'
      },
    ]
  }
  addOne=(obj)=>{
     let {todos} =this.state
     let list = [obj,...todos]
     this.setState({'todos':list})
  }
  render(){
    return (
      <div className="wrap">
      <Input addOne={this.addOne}/>
      <List list={this.state.todos}/>
      <Footer/>
      </div>
    );
  }
}
