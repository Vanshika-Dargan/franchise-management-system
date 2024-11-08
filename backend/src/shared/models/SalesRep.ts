import mongoose, { Document, Schema, Types } from 'mongoose';


interface SalesRep extends Document {
  user: Types.ObjectId; 
  lead?: Types.ObjectId;
  region?: string; 
  salesTargets?: number;
}

const SalesRepSchema: Schema<SalesRep> = new Schema(
  {
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
     },
     lead: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Lead',
   },
    region: { type: String },
    salesTargets: { type: Number },
  },
  {
    timestamps: true,
  }
);

const SalesRep = mongoose.model<SalesRep>('SalesRep', SalesRepSchema);

export default SalesRep;
