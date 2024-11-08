import mongoose, { Document, Schema,Types } from 'mongoose';

interface Franchise extends Document {
  user: Types.ObjectId;
  lead: Types.ObjectId;
  contract: Types.ObjectId;
  accessUrl:string;
}

const FranchiseSchema: Schema<Franchise> = new Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
     },
     lead: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Lead',
        required: true
     },
     contract: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
     },
     accessUrl: {
        type: 'string',
        required: true
     }

});

const Franchise = mongoose.model<Franchise>('Franchise', FranchiseSchema);
export default Franchise;
