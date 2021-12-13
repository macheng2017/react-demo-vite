import {useEffect, useState} from "react";

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    const [users, setUsers] = useState([])
    // 请求项目列表的api需要用到useEffect
    const [list,setList] =useState([])
    useEffect(() =>{
        //[Using Fetch - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
        fetch.then(async resp => {
            if(resp.ok){
                setList(resp.json())
            }
        })
    },[param])
    // 这里的[param]变化的时候去同步,去请求
    return <form action="">
        <div>

            {/* 下面的写法等价于这个{setParam(Object.assign({}, param,{name:evt.target.name}))}*/}
            <input type="text" value={param.name} onChange={(evt) => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value={param.personId} onChange={(evt) => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value="">负责人</option>
                {users.map(v => <option value={v.id}>{v.name}</option>)}
            </select>
        </div>
    </form>
}
