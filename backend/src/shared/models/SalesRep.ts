import mongoose, { Document, Schema, Types } from 'mongoose';


interface SalesRep extends Document {
  user: Types.ObjectId; 
  region?: string; 
  salesTargets?: number;
}

const SalesRepSchema: Schema<SalesRep> = new Schema(
  {
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
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
