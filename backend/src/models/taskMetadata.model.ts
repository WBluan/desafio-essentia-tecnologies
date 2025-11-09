import mongoose, { Schema, Document } from 'mongoose';

export interface ITaskMetadata extends Document {
  task_id: number; 
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

const TaskMetadataSchema = new Schema<ITaskMetadata>(
  {
    task_id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  { collection: 'task_metadata' }
);

export const TaskMetadataModel = mongoose.model<ITaskMetadata>('TaskMetadata', TaskMetadataSchema);
