
import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import State from '../State'
let list=[
    {id:1,name:'北京新闻'},
    {id:2,name:'上海新闻'}
]
export default class StateList extends Component{
    render(){
        return (
            <div>
                <ul>
                    {
                        list.map(v=>{
                            return <li key={v.id}>
                            <Link to={{pathname:'/home/news/list',state:{name:v.name}}}>{v.name}</Link></li>
                        })
                    }
                </ul>
                <Route path="/home/news/list" component={State}/>
           </div>
        )
    }
}