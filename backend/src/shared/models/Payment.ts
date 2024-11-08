import mongoose, { Document, Schema,Types } from 'mongoose';

interface Payment extends Document {
  lead: Types.ObjectId;
  link: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentDate: Date | null;
  amount: number;
  method: string;
}

const PaymentSchema: Schema<Payment> = new Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  link: { type: String, required: true },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  paymentDate: { type: Date, default: null },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
});

const Payment = mongoose.model<Payment>('Payment', PaymentSchema);
export default Payment;
