import mongoose, { Document, Schema,Types } from 'mongoose';

interface Campaign extends Document {
  name: string;
  area: string;
  runningFranchise: Types.ObjectId;
  uniqueCode: string;
}

const CampaignSchema: Schema<Campaign> = new Schema({
  name: { type: String, required: true },
  area: { type: String, required: true },
  runningFranchise: { type: mongoose.Schema.Types.ObjectId, ref: 'Franchise', required: true },
  uniqueCode: { type: String, unique: true, required: true }
});

const Campaign = mongoose.model<Campaign>('Campaign', CampaignSchema);
export default Campaign;
