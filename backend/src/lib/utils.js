import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {

    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,//millsecond
        httpOnly:true,// Prevents XSS attacks by not allowing client-side JavaScript to access the cookie
        sameSite:"strict", // Helps prevent CSRF attacks by ensuring the cookie is sent only in same-site requests
        secure: process.env.NODE_ENV !== "development" ,// Ensures the cookie is sent over HTTPS in production
    });

    return token;
};