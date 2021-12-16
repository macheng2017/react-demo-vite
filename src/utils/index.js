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
