module.exports.login = function(req, res){
    res.status(200).json({
        login: 'LOGIN'
    })
}


module.exports.register = function(req, res){
    res.status(200).json({
        login: 'reg'
    })
}