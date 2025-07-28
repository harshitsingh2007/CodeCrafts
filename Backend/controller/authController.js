import { user } from "../models/userModels.js";
import bcrypt from 'bcrypt'

import { generateToken } from "../utils/generateToken.js";
export const Signup =async (req,res)=>{
    const {email,password}=req.body;
    try {
        if(!email||!password){
            return res.status(400).json({message: "Email and Password are required"});
        }
        const ifUserExists = await user.findOne({ email });

        if (ifUserExists) {
            alert("User already exists");
            return res.status(400).json(
                { message: "user already exists" }
            )
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 1000000).toString();
        const newUser = await user.create({
            email: email,
            password: hashedPassword,
            lastlogin: Date.now(),
            verificationToken
        });


        await newUser.save()
        
        generateToken(res, user._id);

        res.status(201).json({
            message: "user created succesfully",
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const Login =async (req,res)=>{
    const {email,password}=req.body;
    try {
        const userexits = await user.findOne({ email });
        if(!userexits){
            return res.status(400).json({message: "invalid credential"});
        }
        const isPasswordVerified = await bcrypt.compare(password, userexits.password);
        
        if (!isPasswordVerified) {
            return res.status(400).json({message:"invalid credential"});
        }
        generateTokenAndSetCookie(res, user._id);
 

        await userexits.save();
        res.status(200).json({
            message:"login successfull"
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const logout =(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({
        message:"logout succesfull",
    })
}