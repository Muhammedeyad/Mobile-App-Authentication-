const jwt = require('jsonwebtoken')

async function generatingToken(user, res) {
    try {
        const token =await jwt.sign({ user: user }, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRES_IN
        })
        if(!token) return res.status(400).json({error: "log again to continue !"})
      
        res.cookie("login", token, {
            maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "lax"
        })
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err.message)
    }
}
module.exports = { generatingToken }