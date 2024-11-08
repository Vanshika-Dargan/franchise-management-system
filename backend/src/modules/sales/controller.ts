import { Request, Response } from 'express';
import User from '../../shared/models/User';
import SalesRep from '../../shared/models/SalesRep';
import producer from '../../shared/queue/producer.ts'

export const registerSalesRep = async (req: Request, res: Response): Promise<void> => {
  const { userId, region } = req.body;

  try {
    
    const user = await User.findById(userId);
    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    }

   
    const salesRep = new SalesRep({
      user: user._id,
      region
    });

    
    await salesRep.save();

    await producer({
      key: (salesRep._id as string),
      salesRepData: { salesRepId: salesRep._id },
      region,
    });

     res.status(201).json({
      message: 'SalesRep registered successfully',
      salesRep,
    });
  } catch (error) {
    console.error('Error registering SalesRep:', error);
     res.status(500).json({ message: 'Server error' });
  }
};
