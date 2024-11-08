import mongoose, { Document, Schema,Types } from 'mongoose';

interface Lead extends Document {
  status: 'new' | 'contacted' | 'inProgress' | 'converted';
  source: string;
  salesRep: Types.ObjectId;
}

const LeadSchema: Schema<Lead> = new Schema({
    
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'inProgress', 'converted'], 
    default: 'new' 
},
  source: {
    type: String,
    required: true
  },
  salesRep:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SalesRep',
  }

});

const Lead = mongoose.model<Lead>('Lead', LeadSchema);
export default Lead;
