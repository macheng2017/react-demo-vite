module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.url === '/login') {
        if (req.body.username === 'jack' && req.body.password === '123') {
            res.status(200).json({token: '123456'})
        }else {
            return res.status(400).json({message: '用户名或密码错误'})
        }
    }
    res.header('x-hello', '*')
    next()
}
// 在写node.js 使用 common.js规范
