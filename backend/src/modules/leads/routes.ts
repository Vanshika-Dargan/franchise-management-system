import express from 'express';
import { captureLead } from './controller';
import { addPointOfContact, addExternalLinks } from './middleware';
const router = express.Router();



// endpoint to capture lead 
router.post('/lead',addPointOfContact,addExternalLinks,captureLead);




export default router;
