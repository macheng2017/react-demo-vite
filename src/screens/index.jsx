import {List} from "./list";
import {useEffect, useState} from "react";
import {SearchPanel} from "./search-panel";

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    // 请求项目列表的api需要用到useEffect
    // 这个组件中的list其他组件也需要用到,需要状态提升到父组件当中
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
    return <div>
        <SearchPanel param={param} setParam={setParam}/>
        <List/>
    </div>
}
