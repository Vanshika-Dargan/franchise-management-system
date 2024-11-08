import mongoose, { Schema, Document } from 'mongoose';

interface PointOfContact extends Document {
  name: string;
  email?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PointOfContactSchema: Schema<PointOfContact> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String},
    phone: { type: String},
  },
  { timestamps: true }
);

const PointOfContact = mongoose.model<PointOfContact>('PointOfContact', PointOfContactSchema);

export default PointOfContact;
