const UserModel = require("../models/UserModel")
const bcyrpt = require('bcryptjs');
const { generatingToken } = require("../utils/generateJwtToken");

async function register(req, res) {
    try {
        const { username, password, confirmPassword } = req.body;
        if (!username || !password || !confirmPassword) return res.status(400).json({ error: "All fields must be required!" })
        if (password != confirmPassword) return res.status(400).json({ error: "confirm password must be equal!" })
        const existingUser = await UserModel.find({ username: username })
        if (existingUser.length < 1) {
            const encryptedPass = await bcyrpt.hash(password, 8)
            const user = await UserModel.create({ username, password: encryptedPass, confirmPassword: encryptedPass })
            await generatingToken(user, res)  
            return res.status(200).json({ data: user })
        }
        res.status(400).json({ error: "user already exist!" })
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err.message)
    }
}


async function loginUser(req, res) {
    const {username, password} = req.body
    if(!username || !password) return res.status(400).json({error: 'all fields must be required !'})
    const registeredUser = await UserModel.findOne({username: username})
    if(!registeredUser) return res.status(400).json({error: "User Does't exist !"})
    let isCorrectPass = await bcyrpt.compare(password, registeredUser.password)
    if(isCorrectPass){
        await generatingToken(registeredUser, res)
        return res.status(200).json(registeredUser)
    }
    return res.status(400).json({error: 'make sure password is correct !'})
}


module.exports = { register, loginUser }