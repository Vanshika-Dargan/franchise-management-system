import { Request, Response } from 'express';
import Lead from '../../shared/models/Lead/Lead.ts';
import ExternalLink from '../../shared/models/Lead/ExternalLink';


export const captureLead = async (req: Request, res: Response): Promise<void> => {
  try {

    const { source } = req.body;
    const poc=req.body.poc;
    const externalLinks=req.body.links;
    // Create a new lead
    const newLead = new Lead({
      source,
      poc,
      externalLinks
    });

   
    await newLead.save();

    
    res.status(201).json({ message: 'Lead captured successfully', lead: newLead });
  } catch (error) {
    console.error('Error capturing lead:', error);
    res.status(500).json({ message: 'Error capturing lead', error });
  }
};
