import jwt from 'jsonwebtoken';

export const generateToken = (req,res) => {
    const token=jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
        expiresIn:'7d'
    })
    res.cookie("token",token,{
        httpOnly: true,
        sameSite: 'strict',
        maxage: 7 * 24 * 60 * 60 * 1000
    })
    return token;
}