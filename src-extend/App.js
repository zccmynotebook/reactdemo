import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// class App extends Component{
//     state={
//       count:1
//     }
//     add=()=>{
//       this.setState({count:this.state.count+1})
//     }
//     render(){
//       return (
//         <div className="wrap">
//           <p>curren value {this.state.count}</p>
//           <button onClick={this.add}>click + 1</button>
//         </div>
//       );
//     }
// }

function App(){
    console.log('app')
    //React.useState()返回值是长度=2的数组,state和更改state的方法
    //App()调用n+1次，但是没有给count重置0，react底层做了处理；
    let [count,setState]=React.useState(0)
    let [{name,age},setObj]=React.useState({name:'tom',age:1})
    //第2个参数是判断监测那个值，不写全部监测，传[]相当于didMount,不传相当于update
    React.useEffect(()=>{
      console.log(111)
      return ()=>{
        console.log('相当于willunmount')
      }
    },[count])

    function add(){
      setState(count+1)
    }
    function changeName(){
      setObj(({name,age})=>{
        return {name:'jerry',age}
      })
    }
    function changeAll(){
      setObj({name:'jerry',age:2})
    }
    function unload(){
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    return (
            <div className="wrap">
              <p>curren value {count}</p>
              <button onClick={add}>click + 1</button>
              <p> {name} - {age}</p>
              <button onClick={changeName}>changeName</button>
              <button onClick={changeAll}>changeAll</button>
              <button onClick={unload}>unload</button>
            </div>
          );
}

export default App