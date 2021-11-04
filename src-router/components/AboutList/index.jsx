
import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import Query from '../Query'
let list=[
    {id:1,name:'今天开会',city:'北京'},
    {id:2,name:'今天放假',city:'上海'}
]
export default class AboutList extends Component{
    render(){
        return (
            <div>
                <ul>
                    {
                        list.map(v=>{
                            return <li key={v.id}>
                            <Link to={`/about/msg?name=${v.name}&city=${v.city}`}>{v.name}</Link></li>
                        })
                    }
                </ul>
                <Route path="/about/msg" component={Query}/>
           </div>
        )
    }
}