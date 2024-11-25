// models/DevProject.js
import mongoose from 'mongoose';

const DevProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  finishDate: {
    type: Date,
    required: false,
  },
  techStack: {
    type: [String], // Array of strings for technologies used
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  tags: {
    type: [String], // Array of tags
    required: false,
  },
  shortDescription: { 
    type: String, 
    required: false 
  }, 
  image: { 
    type: String, 
    required: false 
  },
  link: {
    type: String,
    required: false,
  },
});

export default mongoose.models.DevProject || mongoose.model('DevProject', DevProjectSchema);