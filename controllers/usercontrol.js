import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export const Register = async (req,res) => {
    const {username, password} = req.body
    try {
        const user = await User.findOne({where : {username}})
        if(user) return res.status(400).json({message : "Email Sudah ada"});
        const HashPassword = await bcrypt.hash(password, 10)
        const NewUser = await User.create({username, password : HashPassword})
        res.status(201).json({message : "Daftar Berhasil"})
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
}

export const Login = async (req,res) => {
    const {username, password} = req.body
    try {
        const user = await User.findOne({where : {username}})
        if(!user) return res.status(400).json({message : "Email Belom Daftar"})
        const CekPass = await bcrypt.compare(password, user.password)
        if(!CekPass) return res.status(400).json({message : "Password Salah"})
        req.session.userid = user.id
        const GenerateToken = jwt.sign({id : user.id}, "secret", {algorithm : "HS256", expiresIn : '1h'})
        res.status(201).json({token : GenerateToken})
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
}
