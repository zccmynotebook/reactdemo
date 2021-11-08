import {Component,Context} from 'react'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';
import CusContext from './context'
export default class App extends Component{
    state={
      todos:[]
    }
    addOne=(obj)=>{
      let {todos} =this.state
      let list = [obj,...todos]
      this.setState({'todos':list})
    }
    deleteOne=(id)=>{
      let {todos} = this.state
      let i= todos.findIndex(v=>v.id===id)
      todos.splice(i,1)
      this.setState({'todos':todos})
    }
    handleCheck=(id,done)=>{
      let {todos} = this.state
      let list=todos.map(v=>{
        if(v.id===id) return {...v,done}
        return v
      })
      this.setState({todos:list})
    }
    handleCheckAll=(done)=>{
      let {todos} = this.state
      let list=todos.map(v=>{
         return {...v,done}
      })
      this.setState({todos:list})
    }
    deleteDone=()=>{
      let {todos} = this.state
      let list=todos.filter(v=>!v.done)
      this.setState({todos:list})
    }
    render(){
      let {addOne,deleteOne,handleCheck,handleCheckAll,deleteDone} = this
      let {todos} = this.state
      let lobj={
        list: todos,
        deleteOne,handleCheck
      }
      let fobj={
        list: todos,
        handleCheckAll,deleteDone
      }
      return (
        <div className="wrap">
        <CusContext.Provider value={{top:'value from app'}}>
          <Input addOne={addOne}/>
          <List {...lobj}/>
          <Footer {...fobj}/>
        </CusContext.Provider>
        </div>
      );
    }
}
