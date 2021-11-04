
import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from '../Detail'
let list=[
    {id:1,name:'今天开会'},
    {id:2,name:'今天放假'}
]
export default class Msg extends Component{
    render(){
        return (
            <div>
                <ul>
                    {
                        list.map(v=>{
                            return <li key={v.id}>
                            <Link to={`/home/msg/${v.name}`}>{v.name}</Link></li>
                        })
                    }
                </ul>
                <Route path="/home/msg/:name" component={Detail}/>
           </div>
        )
    }
}