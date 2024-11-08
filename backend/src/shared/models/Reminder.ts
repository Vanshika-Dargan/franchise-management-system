import mongoose, { Document, Schema,Types } from 'mongoose';

interface IReminder extends Document {
  lead: Types.ObjectId;
  salesRep: Types.ObjectId;
  dueDate: Date;
  message: string;
  completed: boolean;
}

const ReminderSchema: Schema<IReminder> = new Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  salesRep: { type: mongoose.Schema.Types.ObjectId, ref: 'SalesRep', required: true },
  dueDate: { type: Date, required: true },
  message: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Reminder = mongoose.model<IReminder>('Reminder', ReminderSchema);
export default Reminder;
