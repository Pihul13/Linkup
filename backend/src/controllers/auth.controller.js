import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signup = async (req, res) => {
    const {fullName,email,password} = req.body
    try {
        //Hashing password using bcrypt
        if(password < 6){
            return res.status(400).json({message: "Password must be atleast 6 characters."});
        }

        const user = await User.findOne({email})
        if(user) return res.status(400).json({message: "User already exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })

        if(newUser){
            //generate jwt token
            
        }else{
            res.status(400).json({message:"Invalid User Data"});
        }
    } catch (error) {
        
    }
};
export const login = (req, res) => {
    res.send('Login route');
};

export const logout = (req, res) => {
    res.send('Logout route');
};

