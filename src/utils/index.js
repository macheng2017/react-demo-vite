import {useEffect} from "react";

const isFalsy = res => {
    // 这里的函数的作用是为了排除if(res[k]); res[k]=0有意义的这种情况的
    // !!res 可以把结果转化为Boolean值
    return res === 0 ? true : !!res
}
export const CleanObj = (obj) => {
    const res = {...obj}
    Object.keys(res).forEach(k => {
        if (!isFalsy(res[k])) {
            delete res[k]
        }
    })
    return res
}
// 创建一个自定义hook,来替换只加载一次的useEffect
export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}
// 注意上面的写法 与 直接写callback 有什么区别?
// useEffect(callback, [])

// const debounce = (func, delay) => {
//     let timeout
//     return function () {
//         if (timeout) {
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(() => {
//             func()
//         }, delay)
//     }
// }
//
// const log = debounce(()=>{ console.log('hello')},2000)

export const useDebounce = (param, delay) => {
    let timeout
    return function (param) {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            param()
        }, delay)
    }
}
