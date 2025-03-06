import jwt from "jsonwebtoken"

const AuthentikasiJwt = (req,res,next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (!token) return res.status(401).json({message : "Token Invalid"});
    try {
        const decode = jwt.verify(token, "secret")
        req.user = decode
        next()
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
}

export default AuthentikasiJwt