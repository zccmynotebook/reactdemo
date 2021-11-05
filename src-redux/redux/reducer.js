//处理list数据的state
//一个reducer最好处理一个数据

export default function getList(state=[],action){
    let {type,id,done}=action
    switch(type){
        case 'ADD_TODO':
            let {value} = action
            //state.unshift(value)
            state=[value,...state]
        break
        case 'DEL_TODO': 
            let i= state.findIndex(v=>v.id===id)
            state.splice(i,1)
        break
        case 'DEL_DONE': 
            state=state.filter(v=>!v.done)
        break
        case 'CHECK_STATUS': 
            state=state.map(v=>{
                if(v.id===id) return {...v,done}
                return v
            })
        break
        case 'CHECKALL':  
            state=state.map(v=>{
                return {...v,done}
            }) 
        break
    }
    return state
}