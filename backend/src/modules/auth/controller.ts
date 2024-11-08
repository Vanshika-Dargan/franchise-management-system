import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import User from '../../shared/models/User';


// Register Controller
export const registerUser = async (req: Request, res: Response): Promise<void> => {

    const { name, email, password, confirmPassword, phone, address, city, country } = req.body;

    try {
       
        const hashedPassword = password;
        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            city,
            country,
        });

        await newUser.save();

        
        const payload = {
            userId: newUser._id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '12h' });

         res.status(201).json({ message: 'User registered successfully', token });
    } catch (err) {
        console.error(err);
         res.status(500).json({ message: 'Server error' });
    }
};


export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
             res.status(400).json({ message: 'Invalid credentials' });
             return;
        }

        

        // Create JWT token
        const payload = {
            userId: user._id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

         res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
         res.status(500).json({ message: 'Server error' });
    }
};
