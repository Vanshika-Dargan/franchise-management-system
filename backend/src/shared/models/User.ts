import mongoose, {Document, Schema} from 'mongoose'



interface User extends Document {
    name?: string;
    email: string;
    password: string;
    phone?: string;
    address?: string,
    city?: string;
    country?: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<User> = new Schema(

    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }, 
        phone: { type: String },
        address: { type: String },
        city: { type: String },
        country: { type: String },
      },
      {
        timestamps: true, 
      } 
)

const User = mongoose.model<User>('User',UserSchema);

export default User;