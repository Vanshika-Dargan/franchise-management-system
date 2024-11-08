

import { Request, Response, NextFunction } from 'express';
import PointOfContact from '../../shared/models/Lead/PointOfContact';
import ExternalLink from '../../shared/models/Lead/ExternalLink';


export const addExternalLinks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const externalLinks = req.body.externalLinks; 

    
    if (!externalLinks || !Array.isArray(externalLinks)) {
       res.status(400).json({ message: 'External links should be an array' });
    }


    
    const savedLinks = [];
    for (let linkObj of externalLinks) {
      const { type, link } = linkObj;
      
      const newLink = new ExternalLink({
        type,
        link
      });

      await newLink.save();
      savedLinks.push(newLink);
    }
    req.body.links = savedLinks;
    next();
  } catch (error) {
    console.error('Error adding external links:', error);
     res.status(500).json({ message: 'Error adding external links', error });
  }
};


export const addPointOfContact = async (req: Request, res: Response, next: NextFunction):Promise<void>=> {
  try {
    const { name,email,phone } = req.body;
    
   

    const poc = new PointOfContact({
      name,
      email,
      phone,
    })

    
    await poc.save();
    req.body.poc = poc;
    next();
  } 
  catch (error) {
    console.error('Error adding Point of Contact:', error);
     res.status(500).json({ message: 'Error adding point of contact', error });
  }
};

