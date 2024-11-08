import { Router } from 'express';
import { registerUser, loginUser } from './controller.ts';
import { body } from 'express-validator';

const router = Router();

router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    registerUser
);


router.post('/login', loginUser);

export default router;
