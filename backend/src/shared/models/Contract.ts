import mongoose, { Document, Schema,Types } from 'mongoose';

interface Contract extends Document {
  lead: Types.ObjectId;
  contractTerms: string;
  signedDate: Date | null;
  status: 'pending' | 'signed' | 'completed';
}

const ContractSchema: Schema<Contract> = new Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  contractTerms: { type: String, required: true },
  signedDate: { type: Date, default: null },
  status: { type: String, enum: ['pending', 'signed', 'completed'], default: 'pending' }
});

const Contract = mongoose.model<Contract>('Contract', ContractSchema);
export default Contract;
