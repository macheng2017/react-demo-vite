import {useState} from "react";

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
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
            </select>
        </div>
    </form>
}
