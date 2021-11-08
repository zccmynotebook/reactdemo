
import React,{Component,lazy,Suspense} from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
// import Msg from '../Msg'
// import News from '../News'
const Msg = lazy(()=>import('../Msg') )
const News = lazy(()=>import('../News'))
export default class Home extends Component{
    render(){    
        return (
            <div>
                <h1>this is home page</h1>
                <ul className="nav nav-tabs">
                    <li role="presentation">
                    <NavLink to="/home/msg">MESSAGE</NavLink>
                    </li>
                    <li role="presentation"><NavLink to="/home/news">News</NavLink></li>
                </ul>
                <Suspense fallback={<h1>loading</h1>}>
                    <Switch>
                        <Route path="/home/msg" component={Msg} />
                        <Route path="/home/news" component={News} />
                        <Redirect to="/home/news"/>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}