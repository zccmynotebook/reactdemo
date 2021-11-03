
import React,{Component} from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import Msg from '../Msg'
import News from '../News'
 
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
                <Route path="/home/msg" component={Msg} />
                <Route path="/home/news" component={News} />
                <Redirect to="/home/news"/>
            </div>
        )
    }
}