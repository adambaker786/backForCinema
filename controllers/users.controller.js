const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const User = require('../models/User.model')
module.exports.userController = {
    registerUser: async (req,res)=>{
        const {name,login,password}= req.body
        try{
            const hash = await bcrypt.hash(password,10)
            const user = await User.create({
                name,
                login,
                password: hash
            })
            res.json(user)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    loginUser: async (req,res)=>{
        const {login, password} = req.body
        try{
            const user = await User.findOne({login: login})

            if(!login){
                return res.json("Неправильный логин или пароль")
            }
            const valid = await bcrypt.compare(password, user.password)
            if(!valid){
                return res.json("Неправильный логин или пароль")
            }
            const payload = {
                id: user._id,
                name: user.name
            }
            const token = await jwt.sign(payload,"dfsdsdsfdg",{
                expiresIn: "30d"
            })
            res.json(token)
        }
        catch(err){
            res.json(err.toString())
        }
    }
}