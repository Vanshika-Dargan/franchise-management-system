import { Router } from 'express';
import { registerSalesRep } from './controller';

const router = Router();


router.post('/register', registerSalesRep);

export default router;
