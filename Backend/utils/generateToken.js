import jwt from 'jsonwebtoken';

export const generateToken = (res, userId) => {
    const token = jwt.sign(
        { userId }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d' }
    );
    
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, 
    });
    
    return token;
};