import mongoose from "mongoose";

const ContactLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    businessName: String,
    phone: { type: String, required: true },
    email: String,
    serviceRequired: String,
    message: String
  },
  { timestamps: true }
);

export default mongoose.models.ContactLead || mongoose.model("ContactLead", ContactLeadSchema);
