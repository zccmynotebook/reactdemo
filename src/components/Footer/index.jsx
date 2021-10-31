
import React,{Component} from 'react'
import './index.css'
export default class Input extends Component{
    render(){
        let {list, handleCheckAll,deleteDone}=this.props
        let done=list.filter(v=>v.done).length
        return (
            <footer>
                <input type="checkbox" checked={list.length&&done===list.length} onChange={(e)=>{handleCheckAll(e.target.checked)}}/> 
                已完成{done}个/ 总共{list.length}个 
                <span className="pull-right btn" onClick={deleteDone}>清除已完成</span>
            </footer>
        )
    }
}