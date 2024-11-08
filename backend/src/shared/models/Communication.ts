import mongoose, { Document, Schema, Types } from 'mongoose';

interface Communication extends Document {
  lead: Types.ObjectId;
  salesRep: Types.ObjectId;
  method: 'email' | 'call' | 'meeting' | 'other';
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const CommunicationSchema: Schema<Communication> = new Schema({
  lead: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Lead', 
    required: true 

  },
  salesRep: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'SalesRep', 
    required: true 

  },
  method: { type: String, enum: ['email', 'call', 'meeting', 'other'], required: true },
  content: { type: String, required: true },
},{
    timestamps: true
});

const Communication = mongoose.model<Communication>('Communication', CommunicationSchema);
export default Communication;
