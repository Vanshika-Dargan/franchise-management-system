import mongoose, { Schema, Document } from 'mongoose';

interface ExternalLink extends Document {
  type: 'youtube' | 'instagram' | 'twitter' | 'reddit' | string; 
  link: string; 
  createdAt: Date;
  updatedAt: Date;
}

const ExternalLinkSchema: Schema<ExternalLink> = new Schema(
  {
    type: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const ExternalLink = mongoose.model<ExternalLink>('ExternalLink', ExternalLinkSchema);

export default ExternalLink;
